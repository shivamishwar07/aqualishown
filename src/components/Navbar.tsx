'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import styles from '../styles/navbar.module.css';
import { menuData, MenuItem } from '../utils/menuConfig';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [hoveredLabel, setHoveredLabel] = useState<string | null>(null);
  const [navHovered, setNavHovered] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [ready, setReady] = useState(false);

  const pathname = usePathname();
  const isHome = pathname === '/';

  const navRef = useRef<HTMLElement | null>(null);
  const spacerRef = useRef<HTMLDivElement | null>(null);
  const navHeightRef = useRef(0);

  // scroll state refs (avoid re-subscribing listeners)
  const lastScrollYRef = useRef(0);
  const tickingRef = useRef(false);

  const closeMenus = () => {
    setHoveredLabel(null);
    setNavHovered(false);
  };

  // Measure navbar height and keep spacer in sync
  useEffect(() => {
    if (!navRef.current) return;

    const measure = () => {
      const h = navRef.current!.getBoundingClientRect().height || 0;
      navHeightRef.current = h;
      if (spacerRef.current) {
        spacerRef.current.style.height = isHome || hidden ? '0px' : `${h}px`;
      }
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(navRef.current);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [isHome, hidden]);

  // After first paint, enable transitions to avoid initial blink
  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  // Scroll logic (RAF + refs → smooth, no flicker)
  useEffect(() => {
    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;

      requestAnimationFrame(() => {
        const y = window.scrollY || 0;

        // Only home reacts to scrolled state (solid pages are already solid)
        if (isHome) setScrolled(y > 80);

        // hide when scrolling down, show when up (after 80px)
        const lastY = lastScrollYRef.current;
        const shouldHide = y > lastY && y > 80;
        setHidden(shouldHide);
        lastScrollYRef.current = y;

        // update spacer height if needed
        if (spacerRef.current && !isHome) {
          spacerRef.current.style.height = shouldHide ? '0px' : `${navHeightRef.current}px`;
        }

        tickingRef.current = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  // Close menus on route change
  useEffect(() => {
    closeMenus();
  }, [pathname]);

  const getMenuItem = (label: string): MenuItem | undefined =>
    menuData.find((item) => item.label === label);

  const renderMenuContent = () => {
    if (!hoveredLabel) return null;
    const item = getMenuItem(hoveredLabel);
    if (!item?.type) return null;

    if (item.type === 'dropdown') {
      return (
        <div className={styles.dropdown}>
          {item.links?.map((link) => (
            <Link key={link.name} href={link.href} className={styles.dropdownItem} onClick={closeMenus}>
              {link.name}
            </Link>
          ))}
        </div>
      );
    }

    if (item.type === 'mega') {
      return (
        <div className={styles.megaMenu}>
          {item.categories?.map((cat) => (
            <div key={cat.title} className={styles.megaColumn}>
              <h4>
                {cat.icon && <span className={styles.icon}>{cat.icon}</span>}
                {cat.title}
              </h4>
              <ul>
                {cat.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} onClick={closeMenus}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <nav
        ref={navRef}
        className={[
          styles.navbar,
          ready ? styles.ready : '',
          isHome ? styles.overlay : styles.solid,
          isHome && scrolled ? styles.scrolled : '',
          hidden ? styles.hidden : '',
          isHome ? styles.hoverable : '',
          isHome && navHovered ? styles.hovered : '',
        ].join(' ')}
        onMouseEnter={() => { if (isHome) setNavHovered(true); }}
        onMouseLeave={closeMenus}
      >
        <div className={styles.logo}>
          <Link href="/" onClick={closeMenus}>
            <Image src="/logos/Aqualish-logo.png" alt="Sollers Logo" width={200} height={85} />
          </Link>
        </div>

        <ul className={styles.menu}>
          {menuData.map((item) => (
            <li
              key={item.label}
              onMouseEnter={() => setHoveredLabel(item.label)}
              className={`${styles.menuItem} ${hoveredLabel === item.label ? styles.active : ''}`}
            >
              {item.label}
              {item.type && <span className={styles.chevron}>▼</span>}
            </li>
          ))}
        </ul>

        {renderMenuContent()}
      </nav>

      {/* Spacer only on non-home routes */}
      {!isHome && <div ref={spacerRef} aria-hidden />}
    </>
  );
};

export default Navbar;
