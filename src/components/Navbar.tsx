'use client';

import { useState, useEffect } from 'react';
import styles from '../styles/navbar.module.css';
import { menuData, MenuItem } from '../utils/menuConfig';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    const [hoveredLabel, setHoveredLabel] = useState<string | null>(null);
    const [navHovered, setNavHovered] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY && window.scrollY > 80) {
                setHidden(true);
            } else {
                setHidden(false);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

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
                        <Link key={link.name} href={link.href} className={styles.dropdownItem}>
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
                                        <Link href={link.href}>{link.name}</Link>
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
        <nav
            className={`${styles.navbar} ${navHovered ? styles.navbarHovered : ''} ${hidden ? styles.hidden : ''}`}
            onMouseEnter={() => setNavHovered(true)}
            onMouseLeave={() => {
                setNavHovered(false);
                setHoveredLabel(null);
            }}
        >
            <div className={styles.logo}>
                <Link href="/">
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
    );
};

export default Navbar;