"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Slide = {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    image: string;
};

const slides: Slide[] = [
    {
        id: 1,
        title: "Digital insurance brochure",
        subtitle: "RIFE",
        description:
            "Explore our latest digital brochure for innovative insurance solutions.",
        image: "/slider/mini-slider1.png",
    },
    {
        id: 2,
        title: "Create choice and guide the customer",
        subtitle: "RIFE",
        description:
            "See how guided choices improve satisfaction, conversion, and retention.",
        image: "/slider/mini-slider2.png",
    },
    {
        id: 3,
        title: "Business Ecosystems – Strategy for The Future",
        subtitle: "Business Advisory",
        description:
            "Strategies and playbooks for building resilient business ecosystems.",
        image: "/slider/mini-slider3.png",
    },
    {
        id: 4,
        title: "Location – what value does it bring?",
        subtitle: "GIS",
        description:
            "Location intelligence that powers better decisions across the org.",
        image: "/slider/mini-slider4.png",
    },
    {
        id: 5,
        title: "Channels of communication – German market",
        subtitle: "Electronic Channel",
        description:
            "Insights into effective communication channels within the DACH region.",
        image: "/slider/mini-slider5.png",
    },
    {
        id: 6,
        title: "Future of Insurance Technology",
        subtitle: "RIFE",
        description: "A look into the tech shaping the next decade of insurance.",
        image: "/slider/mini-slider6.png",
    },
];

export default function ImageSlider() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState<1 | -1>(1);

    useEffect(() => {
        const timer = setInterval(() => next(), 10000);
        return () => clearInterval(timer);
    }, [index]);

    const prev = () => {
        setDirection(-1);
        setIndex((i) => (i - 1 + slides.length) % slides.length);
    };

    const next = () => {
        setDirection(1);
        setIndex((i) => (i + 1) % slides.length);
    };

    const n = slides.length;
    const visible = [slides[index], slides[(index + 1) % n], slides[(index + 2) % n]];

    return (
        <div className="w-full flex flex-col items-center bg-white">
            <h2 className="mb-6 pt-10 text-3xl md:text-4xl font-semibold text-blue-900">
                Technology &amp; market insights
            </h2>

            <div className="relative w-full max-w-[1400px]">
                <button
                    onClick={prev}
                    className="absolute left-[-52px] top-1/2 -translate-y-1/2 cursor-pointer bg-green-600 text-white px-4 py-2 font-bold shadow"
                    aria-label="Previous"
                >
                    ‹
                </button>

                <div className="overflow-hidden w-full h-[520px] flex items-center">
                    <AnimatePresence initial={false} custom={direction} mode="popLayout">
                        <motion.div
                            key={index}
                            custom={direction}
                            initial={{ x: direction === 1 ? 480 : -480, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: direction === 1 ? -480 : 480, opacity: 0 }}
                            transition={{ duration: 0.45, ease: "easeOut" }}
                            className="flex gap-8"
                        >
                            {visible.map((s) => (
                                <article
                                    key={s.id}
                                    className="group w-[450px] bg-white shadow-lg cursor-pointer overflow-hidden border border-gray-100"
                                >
                                    <div className="relative w-full h-[500px] overflow-hidden">
                                        <Image
                                            src={s.image}
                                            alt={s.title}
                                            fill
                                            sizes="(min-width:1200px) 420px, 33vw"
                                            className="object-cover"
                                        />

                                        <div
                                            className="absolute inset-x-0 bottom-0 bg-white/95 backdrop-blur-[0.5px] shadow-[0_-6px_20px_rgba(0,0,0,0.12)] transition-transform duration-500 ease-in-out translate-y-[var(--offset)] group-hover:translate-y-0"
                                            style={{
                                                ["--panel" as any]: "260px",
                                                ["--exposed" as any]: "120px",
                                                ["--offset" as any]: "calc(var(--panel) - var(--exposed))",
                                                height: "var(--panel)",
                                            } as React.CSSProperties}
                                        >
                                            <div className="p-5">
                                                <p className="text-[11px] tracking-wide text-gray-500 line-clamp-2 break-words" title={s.subtitle}>
                                                    {s.subtitle}
                                                </p>
                                                <h3 className="mt-1 text-[17px] leading-snug text-blue-800 font-medium line-clamp-2 break-words" title={s.title}>
                                                    {s.title}
                                                </h3>
                                            </div>

                                            <div
                                                className="px-5 pb-5 pt-0 opacity-0 translate-y-2 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0"
                                                style={{
                                                    maxHeight: "calc(var(--panel) - var(--exposed) - 20px)",
                                                    overflowY: "auto",
                                                }}
                                            >
                                                <div className="[mask-image:linear-gradient(to_bottom,black_85%,transparent)] [mask-size:100%_100%] [mask-repeat:no-repeat]">
                                                    <p className="text-sm text-gray-600 whitespace-pre-wrap break-words">
                                                        {s.description}
                                                    </p>
                                                </div>

                                                <div className="mt-4">
                                                    <button
                                                        className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white text-sm font-medium shadow hover:bg-green-700 transition-colors"
                                                        aria-label={`Read more about ${s.title}`}
                                                    >
                                                        READ MORE →
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                <button
                    onClick={next}
                    className="absolute right-[-52px] top-1/2 -translate-y-1/2 cursor-pointer bg-white text-green-600 border border-green-600 px-4 py-2 font-bold shadow"
                    aria-label="Next"
                >
                    ›
                </button>
            </div>
        </div>
    );
}