'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles/hero.module.css';

const heroTabs = [
    {
        title: 'Celebrating 25th anniversary',
        img: '/imgs/hero1.png',
        heading: '25 Years',
        subheading: 'of Shaping the Future of Insurance',
        description: 'Discover highlights from our 25-year journey through clients stories',
        ctaText: 'Learn More →',
    },
    {
        title: 'Sollers Predictions Report',
        img: '/imgs/hero2.png',
        heading: 'Sollers Predictions Report',
        subheading: 'Window of Opportunity',
        description: 'Trends in insurance industry for 2025',
        ctaText: 'Download Report →',
    },
    {
        title: 'Services & Products',
        img: '/imgs/hero3.png',
        heading: 'Services & Products',
        subheading: 'Tailored to Your Needs',
        description: 'Explore our comprehensive suite of solutions.',
        ctaText: 'Explore Auqalish Offering →',
    },
    {
        title: 'Case Studies',
        img: '/imgs/hero4.png',
        heading: 'Proven Success',
        subheading: 'Read Our Case Studies',
        description: 'See how we help our clients achieve their goals.',
        ctaText: 'See all case studies →',
    },
    {
        title: 'Meet us at events',
        img: '/imgs/hero5.png',
        heading: 'Upcoming Events',
        subheading: 'Connect With Us',
        description: 'Find out where you can meet the Sollers team.',
        ctaText: 'See all Events →',
    },
];

export default function HeroSection() {
    const [currentTab, setCurrentTab] = useState(0);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const DURATION = 10000;

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
            setCurrentTab((prev) => (prev + 1) % heroTabs.length);
        }, DURATION);
    };

    useEffect(() => {
        resetTimeout();
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [currentTab]);

    const handleTabClick = (idx: number) => {
        setCurrentTab(idx);
    };

    return (
        <section className={styles.hero}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={heroTabs[currentTab].img}
                    className={styles.heroImage}
                    initial={{ scale: 1.05, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 1.05, opacity: 0 }}
                    transition={{ duration: 1.6, ease: 'easeInOut' }}
                    style={{ backgroundImage: `url(${heroTabs[currentTab].img})` }}
                />
            </AnimatePresence>

            <motion.div
                key={currentTab}
                className={styles.diagonalReveal}
                initial={{ width: '0%' }}
                animate={{ width: '60%' }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
            />

            <div className={styles.overlay}>
                <div className={styles.heroContent}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`${currentTab}-content`}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.8, ease: 'easeInOut' }}
                        >
                            <div className={styles.headingWrap}>
                                <motion.img
                                    src="/imgs/hero-left-bracket.png"
                                    alt="Left Bracket"
                                    className={styles.bracket}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.8 }}
                                />
                                <div className={styles.headingTextBlock}>
                                    <h1>{heroTabs[currentTab].heading}</h1>
                                    <h2>{heroTabs[currentTab].subheading}</h2>
                                </div>
                                <motion.img
                                    src="/imgs/hero-right-bracket.png"
                                    alt="Right Bracket"
                                    className={styles.bracket}
                                    initial={{ x: 20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.8 }}
                                />
                            </div>


                            <motion.div
                                className={styles.revealText}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 1.6, ease: 'easeOut' }}
                            >
                                <p className={styles.subtext}>
                                    {heroTabs[currentTab].description}
                                </p>

                                <motion.button
                                    className={styles.cta}
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow: '0 0 20px rgba(255, 255, 255, 0.6)',
                                    }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    {heroTabs[currentTab].ctaText}
                                </motion.button>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className={styles.tabs}>
                    {heroTabs.map((tab, idx) => (
                        <button
                            key={idx}
                            className={`${styles.tabButton} ${idx === currentTab ? styles.active : ''}`}
                            onClick={() => handleTabClick(idx)}
                        >
                            {tab.title}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );

}