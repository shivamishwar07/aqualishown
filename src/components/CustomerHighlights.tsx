'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/customerHighlights.module.css';
import { useCallback, useMemo } from "react";
import StaticHeroCarousel from './StaticHeroCarousel';
const logos = [
    '/logos/BNP_Cardif.png',
    '/logos/conte_logo_small.png.webp',
    '/logos/lolivier-assurance-logo.png',
    '/logos/Nationale.png',
    '/logos/warta.webp',
    '/logos/warta.webp',
];

const stats = [
    {
        value: 1000,
        iconSrc: '/icons/expert.png',
        labelTop: 'IT & Business Experts',
        labelBottom: 'and counting!',
    },
    {
        value: 100,
        iconSrc: '/icons/money.png',
        labelTop: 'Financial groups',
        labelBottom: 'as customers',
    },
    {
        value: 250,
        iconSrc: '/icons/globe.png',
        labelTop: 'Projects in over',
        labelBottom: '30 countries',
    },
    {
        value: 2000,
        iconSrc: '/icons/target.png',
        labelTop: 'On the market',
        labelBottom: 'since 2000',
    },
];

type Slide = {
    id: number | string;
    image: string;
    title: string;
    subtitle?: string;
    description?: string;
    ctaText?: string;
    ctaHref?: string;
};

const SLIDES: Slide[] = [
    {
        id: 1,
        image: "/slider/slider1.png",
        title: "Blazing Fast Checkout",
        subtitle: "Reduce drop-offs with fewer steps",
        description:
            "Our new flow cuts 3 screens down to 1. Customers complete in seconds.",
        ctaText: "Learn More",
        ctaHref: "/checkout",
    },
    {
        id: 2,
        image: "/slider/slider2.png",
        title: "Analytics You’ll Love",
        subtitle: "Make better decisions with clarity",
        description:
            "Real-time funnels, cohorts, and alerts baked in. No extra tooling.",
        ctaText: "See Dashboards",
        ctaHref: "/analytics",
    },
    {
        id: 3,
        image: "/slider/slider3.png",
        title: "Secure by Default",
        subtitle: "Your data, locked tight",
        description:
            "ISO-27001 aligned practices and tokenized payments out of the box.",
        ctaText: "Read Security",
        ctaHref: "/security",
    }
];

export default function CustomerHighlights() {
    const [counts, setCounts] = useState(stats.map(() => 0));

    const scrollRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<number | null>(null);
    const isHoveredRef = useRef(false);

    const startAutoScroll = () => {
        if (animationRef.current !== null) return;

        animationRef.current = window.requestAnimationFrame(function step() {
            if (!scrollRef.current || isHoveredRef.current) {
                animationRef.current = null;
                return;
            }

            scrollRef.current.scrollLeft += 1;
            if (
                scrollRef.current.scrollLeft >=
                scrollRef.current.scrollWidth / 2
            ) {
                scrollRef.current.scrollLeft = 0;
            }
            animationRef.current = window.requestAnimationFrame(step);
        });
    };

    const stopAutoScroll = () => {
        if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
            animationRef.current = null;
        }
    };

    useEffect(() => {
        startAutoScroll();

        return () => stopAutoScroll();
    }, []);

    const handleMouseEnter = () => {
        isHoveredRef.current = true;
        stopAutoScroll();
    };

    const handleMouseLeave = () => {
        isHoveredRef.current = false;
        startAutoScroll();
    };

    const scrollManually = (offset: number) => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft += offset;
        }
    };

    useEffect(() => {
        const duration = 2000;
        const steps = 30;
        const interval = duration / steps;

        const timers: NodeJS.Timeout[] = [];

        stats.forEach((stat, index) => {
            let current = 0;
            const increment = stat.value / steps;

            const timer = setInterval(() => {
                current += increment;
                setCounts(prev => {
                    const updated = [...prev];
                    updated[index] = Math.min(Math.floor(current), stat.value);
                    return updated;
                });
                if (current >= stat.value) clearInterval(timer);
            }, interval);

            timers.push(timer);
        });

        return () => timers.forEach(clearInterval);
    }, []);
    const base = SLIDES;
    const len = base.length;

    const slides = useMemo(() => {
        if (len === 0) return [];
        const first = base[0];
        const last = base[len - 1];
        return [last, ...base, first];
    }, [len]);

    const [index, setIndex] = useState(1);
    const [withTransition, setWithTransition] = useState(true);

    return (
        <div className={styles.container}>
            <section className={styles.testimonial}>
                <div className={styles.testimonialText}>
                    <h2>
                        <span>Happy customers</span> are our biggest satisfaction
                    </h2>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>Customers about Sollers</p>
                    <div className={styles.underline}></div>
                </div>
                <div className={styles.testimonialVideo}>
                    <div className={styles.customColorBorder}></div>
                    <img src="/imgs/happy-customer.png" alt="Customer Video" />
                    <button className={styles.playButton}>PLAY VIDEO</button>
                </div>
            </section>

            <section className={styles.logosSection}>
                <h2>Customers who have put their trust in us</h2>

                <div
                    className={styles.logoScrollContainer}
                    ref={scrollRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className={styles.logoScrollTrack}>
                        {[...logos, ...logos].map((src, idx) => (
                            <img
                                key={idx}
                                src={src}
                                alt={`logo-${idx}`}
                                className={styles.logoImage}
                            />
                        ))}
                    </div>
                </div>
                <button className={styles.caseStudies}>CASE STUDIES →</button>
            </section>

            <section className={styles.stats}>
                <h2>We are a truly international company</h2>
                <div className={styles.statsGrid}>
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            className={styles.statItem}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2, duration: 0.6 }}
                        >
                            <div className={styles.statNumberWrapper}>
                                <h3>{counts[i]}</h3>
                                <img src={stat.iconSrc} alt={`icon-${i}`} className={styles.iconInline} />
                            </div>
                            <div className={styles.labelLines}>
                                <span className={styles.labelTop}>{stat.labelTop}</span>
                                <span className={styles.labelBottom}>{stat.labelBottom}</span>
                            </div>
                            <div className={styles.statUnderline}></div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section>
                <StaticHeroCarousel></StaticHeroCarousel>
            </section>
        </div>
    );
}
