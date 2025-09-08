"use client";

import { useEffect, useState } from "react";

export default function Footer() {
    return (
        <footer className="relative bg-[#0E2550] text-white">
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 py-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center gap-4">
                            <span className="text-3xl font-semibold tracking-widest">25</span>
                            <span className="text-2xl font-light">|</span>
                            <span className="text-3xl font-semibold">sollers</span>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Services &amp; Products</h3>
                        <ul className="space-y-2 text-sm text-white/90">
                            <li>Process automation</li>
                            <li>Core Systems Implementation</li>
                            <li>Data Management</li>
                            <li>Digitalisation</li>
                            <li>Bancassurance software – RIFE</li>
                            <li>Artificial Intelligence in Insurance</li>
                            <li>Agile &amp; DevOps mindset</li>
                            <li>Software Quality Assurance</li>
                            <li>Cloud consulting services</li>
                            <li>Expert nearshoring</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Industries</h3>
                        <ul className="space-y-2 text-sm text-white/90">
                            <li>Banking</li>
                            <li>Other financial</li>
                            <li>Insurance</li>
                            <li>Policy administration</li>
                            <li>Claims handling</li>
                            <li>Data and finance in Insurance</li>
                            <li>Digital Insurance</li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">About us</h3>
                            <ul className="space-y-2 text-sm text-white/90">
                                <li>About Sollers</li>
                                <li>Partnership</li>
                                <li>Insights</li>
                                <li>Media</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Career</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-white/20" />
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 py-4">
                <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/90">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Cookies Policy</a>
                    <a href="#">Contact Us</a>
                    <a href="#">Legal Disclaimer</a>
                </nav>
            </div>
            <div className="bg-[#0A1E3D] py-4">
                <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="text-sm text-white/80">
                        Copyright © Sollers Consulting 2025
                    </div>
                    <div className="flex items-center gap-4">
                        <SocialIcon label="LinkedIn" href="#" svgPath="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 20h-3v-11h3v11zm-1.5-12.27c-.96 0-1.73-.79-1.73-1.73s.77-1.73 1.73-1.73 1.73.79 1.73 1.73-.78 1.73-1.73 1.73zm13.5 12.27h-3v-5.6c0-1.34-.03-3.06-1.86-3.06-1.86 0-2.14 1.45-2.14 2.96v5.7h-3v-11h2.88v1.5h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v6.47z" />
                        <SocialIcon label="Facebook" href="#" svgPath="M18 0h-12c-3.31 0-6 2.69-6 6v12c0 3.31 2.69 6 6 6h6v-9h-3v-3h3v-2.2c0-3 1.79-4.7 4.53-4.7 1.31 0 2.68.23 2.68.23v3h-1.51c-1.49 0-1.95.93-1.95 1.88v2.01h3.32l-.53 3h-2.79v9h3.05c3.31 0 6-2.69 6-6v-12c0-3.31-2.69-6-6-6z" />
                        <SocialIcon label="YouTube" href="#" svgPath="M10 15l5.19-3-5.19-3v6zm13-9s-.2-1.39-.8-2.01c-.77-.8-1.63-.8-2.03-.84-2.84-.21-7.11-.21-7.11-.21h-.02s-4.27 0-7.11.21c-.4.04-1.26.04-2.03.84-.6.62-.8 2.01-.8 2.01s-.2 1.64-.2 3.28v1.54c0 1.64.2 3.28.2 3.28s.2 1.39.8 2.01c.77.8 1.78.78 2.23.86 1.62.16 6.91.21 6.91.21s4.27-.01 7.11-.22c.4-.04 1.26-.04 2.03-.84.6-.62.8-2.01.8-2.01s.2-1.64.2-3.28v-1.54c0-1.64-.2-3.28-.2-3.28z" />
                        <SocialIcon label="Instagram" href="#" svgPath="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.4.61.21 1.05.46 1.51.92.46.46.71.9.92 1.51.16.46.35 1.26.4 2.43.06 1.27.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.4 2.43-.21.61-.46 1.05-.92 1.51-.46.46-.9.71-1.51.92-.46.16-1.26.35-2.43.4-1.27.06-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.4-.61-.21-1.05-.46-1.51-.92-.46-.46-.71-.9-.92-1.51-.16-.46-.35-1.26-.4-2.43C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.054-1.17.24-1.97.4-2.43.21-.61.46-1.05.92-1.51.46-.46.9-.71 1.51-.92.46-.16 1.26-.35 2.43-.4C8.416 2.212 8.8 2.2 12 2.2zm0 2.2c-3.17 0-3.546.012-4.79.07-1.03.047-1.59.22-1.96.36-.49.19-.84.41-1.2.77-.36.36-.58.71-.77 1.2-.14.37-.32.93-.36 1.96-.059 1.244-.07 1.62-.07 4.79s.012 3.546.07 4.79c.047 1.03.22 1.59.36 1.96.19.49.41.84.77 1.2.36.36.71.58 1.2.77.37.14.93.32 1.96.36 1.244.059 1.62.07 4.79.07s3.546-.012 4.79-.07c1.03-.047 1.59-.22 1.96-.36.49-.19.84-.41 1.2-.77.36-.36.58-.71.77-1.2.14-.37.32-.93.36-1.96.059-1.244.07-1.62.07-4.79s-.012-3.546-.07-4.79c-.047-1.03-.22-1.59-.36-1.96-.19-.49-.41-.84-.77-1.2-.36-.36-.71-.58-1.2-.77-.37-.14-.93-.32-1.96-.36C15.546 4.412 15.17 4.4 12 4.4zm0 2.9a4.7 4.7 0 1 1 0 9.4 4.7 4.7 0 0 1 0-9.4zm6-1.3a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2z" />
                        <SocialIcon label="Twitter" href="#" svgPath="M24 4.56c-.89.39-1.85.66-2.86.78a4.98 4.98 0 0 0 2.18-2.74 9.94 9.94 0 0 1-3.15 1.2A4.96 4.96 0 0 0 12.3 8.3a14.06 14.06 0 0 1-10.21-5.18 4.96 4.96 0 0 0 1.53 6.63 4.92 4.92 0 0 1-2.25-.62v.06a4.97 4.97 0 0 0 3.98 4.87c-.54.15-1.1.18-1.66.07a4.97 4.97 0 0 0 4.64 3.45A9.95 9.95 0 0 1 0 20.29 14.05 14.05 0 0 0 7.61 22c9.13 0 14.13-7.56 14.13-14.12l-.02-.64A10.1 10.1 0 0 0 24 4.56z" />
                        <SocialIcon label="Xing" href="#" svgPath="M13.6 12.4l3.4 5.9h-3.1l-3.4-5.9 5.3-9.4h3.1l-5.3 9.4zm-5.5-3.4l1.9 3.3-3.3 5.8h-3.1l3.3-5.8-1.9-3.3h3.1z" />
                    </div>
                </div>
            </div>
            <BackToTop />
        </footer>
    );
}

function SocialIcon({ label, href, svgPath }: { label: string; href: string; svgPath: string }) {
    return (
        <a aria-label={label} href={href} className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true">
                <path d={svgPath} />
            </svg>
        </a>
    );
}

function BackToTop() {
    const [show, setShow] = useState(false);
    useEffect(() => {
        const onScroll = () => setShow(window.scrollY > 160);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    if (!show) return null;
    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-40 rounded-full border-4 border-[#A6D08F] bg-white/90 p-3 shadow-lg"
        >
            <div className="h-6 w-6 rounded-full border-2 border-[#A6D08F] grid place-items-center">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-[#7FB76B]">
                    <path d="M12 5l7 7-1.41 1.41L13 9.83V20h-2V9.83l-4.59 4.58L5 12z" />
                </svg>
            </div>
        </button>
    );
}