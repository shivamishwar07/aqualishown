// app/components/StaticHeroCarousel.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import styles from '../styles/ststicHeroCrausel.module.css';

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
    },
];

const INTERVAL_MS = 6000;

export default function StaticHeroCarousel() {
    const [index, setIndex] = useState(0);
    const len = SLIDES.length;
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const go = useCallback(
        (delta: number) => {
            setIndex((i) => (i + delta + len) % len);
            restartTimer();
        },
        [len]
    );

    const restartTimer = useCallback(() => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
        if (len > 1) {
            timerRef.current = setInterval(() => {
                setIndex((i) => (i + 1) % len);
            }, INTERVAL_MS);
        }
    }, [len]);

    useEffect(() => {
        restartTimer();
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [restartTimer]);

    const onMouseEnter = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    };
    const onMouseLeave = () => restartTimer();

    const containerRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") go(1);
            if (e.key === "ArrowLeft") go(-1);
        };
        el.addEventListener("keydown", onKey);
        return () => el.removeEventListener("keydown", onKey);
    }, [go]);

    const active = useMemo(() => SLIDES[index], [index]);

    return (
        <section
            ref={containerRef}
            tabIndex={0}
            aria-roledescription="carousel"
            aria-label="Highlights carousel"
            className="relative w-full overflow-hidden border-zinc-200 bg-white px-[5%] pr-[10%]"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-[300px] w-full md:h-[480px]">
                    {SLIDES.map((s, i) => (
                        <div
                            key={`img-${s.id}`}
                            className={`${styles.imageLayer} ${i === index ? styles.imageActive : ""
                                }`}
                            aria-hidden={i !== index}
                        >
                            <Image
                                src={s.image}
                                alt={s.title}
                                fill
                                className="object-cover"
                                sizes="(min-width: 768px) 50vw, 100vw"
                                priority={i === index}
                            />
                        </div>
                    ))}
                </div>

                <div className="relative">
                    <div className={`${styles.customRact}`}></div>
                    {len > 1 && (
                        <div className="absolute right-4 top-4 z-10 flex">
                            <button
                                aria-label="Previous"
                                onClick={() => go(-1)}
                                className={styles.navBtnGreen}
                            >
                                ‹
                            </button>
                            <button
                                aria-label="Next"
                                onClick={() => go(1)}
                                className={styles.navBtnGrey}
                            >
                                ›
                            </button>
                        </div>
                    )}

                    <div className={`h-full p-6 md:p-10 right-content ${styles.rightContent}`}>
                        <div className="relative h-full">
                            {SLIDES.map((s, i) => (
                                <article
                                    key={`content-${s.id}`}
                                    className={`${styles.contentLayer} ${i === index ? styles.contentActive : ""
                                        }`}
                                    aria-roledescription="slide"
                                >
                                    <h3 className="text-3xl font-semibold leading-tight text-[#142a5c] md:text-[40px] md:leading-[1.1]">
                                        {s.title}
                                    </h3>

                                    {s.subtitle && (
                                        <p className="mt-4 text-lg text-[#0b2a66]/80">{s.subtitle}</p>
                                    )}

                                    {s.description && (
                                        <p className="mt-3 max-w-[60ch] text-[17px] leading-7 text-zinc-700">
                                            {s.description}
                                        </p>
                                    )}

                                    {s.ctaHref && s.ctaText && (
                                        <Link
                                            href={s.ctaHref}
                                            className={styles.ctaBtn}
                                        >
                                            {s.ctaText}
                                            <span aria-hidden className="ml-2">→</span>
                                        </Link>
                                    )}
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}