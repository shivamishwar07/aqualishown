'use client';
import React from "react";

export default function BannerHp() {
    return (
        <section className="relative min-h-[88vh] w-full overflow-hidden bg-black text-white">
            <img
                src="/imgs/banner-hp.png"
                alt="Smiling professional in an office"
                className="absolute inset-0 h-full w-full object-cover opacity-90"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr via-black/30 to-transparent" />

            <div className="pointer-events-none left-0 top-0 h-full w-[64%] clip-diagonal shadow-2xl shadow-black/40" />

            <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl" style={{marginLeft:'12%'}}>
                <div className="max-w-2xl py-16">
                    <h1 className="leading-[1.05] tracking-tight">
                        <span className="block text-5xl">Human</span>
                        <span className="block mt-2 text-5xl font-bold">behind IT</span>
                    </h1>

                    <p className="mt-8 text-lg sm:text-xl leading-relaxed text-white/90 w-90">
                        We believe Sollers is people. Our employees have the highest priority for us
                        and are the core of our business.
                    </p>

                    <div className="mt-10">
                        <a
                            href="#careers"
                            className="inline-flex items-center gap-3 rounded-2xl bg-white/10 px-7 py-3 text-base font-semibold uppercase tracking-wider backdrop-blur-md ring-1 ring-white/25 transition hover:bg-white/20"
                        >
                            Career
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                                <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .clip-diagonal {
          /* Creates the left wedge shape */
          clip-path: polygon(0 0, 62% 0, 84% 100%, 0% 100%);
        }
        @media (max-width: 1024px) {
          .clip-diagonal { clip-path: polygon(0 0, 72% 0, 96% 100%, 0% 100%); }
        }
        @media (max-width: 640px) {
          .clip-diagonal { clip-path: polygon(0 0, 90% 0, 100% 100%, 0% 100%); }
        }
      `}</style>
        </section>
    );
}
