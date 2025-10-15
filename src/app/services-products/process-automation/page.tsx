'use client';

import { useState } from "react";

export default function Page() {
    const faqs = [
        {
            q: 'Common challenges faced by insurance companies when implementing process automation',
            a: 'Identifying the right processes to automate, ensuring data quality, creativity to reimagine workflows, and managing employee adaptation to new systems.',
        },
        {
            q: 'What are the key benefits of automation in insurance?',
            a: 'Automation delivers faster turnaround times, improved accuracy, cost reduction, and better compliance with regulatory requirements.',
        },
        {
            q: 'How to measure the success of process automation in insurance?',
            a: 'Success can be measured via cycle time reduction, increased straight-through-processing, lower error rates, and improved SLA adherence.',
        },
        {
            q: 'How does process automation integrate with existing insurance software and systems?',
            a: 'Many automation tools offer integration capabilities through APIs or connectors, enabling them to exchange data with existing systems. RPA can also automate legacy systems, but it is essential to define clear objectives before implementation.',
        },
        {
            q: 'What are the security implications of process automation in insurance?',
            a: 'Automated systems can introduce new vulnerabilities. Ensure strong access controls, encryption, and regular security audits to mitigate risks.',
        },
        {
            q: 'How can process automation support fraud detection and risk management in insurance?',
            a: 'Automation analyzes data to detect anomalies and patterns that may indicate fraud while streamlining risk assessment processes.',
        },
        {
            q: 'What types of processes are best suited for insurance workflow automation?',
            a: 'Rule-based tasks such as claims handling, policy issuance, and renewal notifications are ideal for automation.',
        },
        {
            q: 'How does insurance automation impact customer experience in the insurance sector?',
            a: 'It accelerates claims processing, enhances accuracy, and provides 24/7 self-service options, improving customer satisfaction.',
        },
        {
            q: 'How can process automation help in regulatory compliance for insurance companies?',
            a: 'Automation ensures consistency, enables detailed audit trails, and simplifies compliance reporting and monitoring.',
        },
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);
    return (
        <main className="flex flex-col">
            <section
                className="relative h-[30vh] flex flex-col items-center justify-center text-white text-center bg-cover bg-center"
                style={{ backgroundImage: "url('/imgs/Process-automation-banner.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Process Automation</h1>
                    <p className="text-lg md:text-2xl font-light">Accelerate your business and improve its efficiency</p>
                </div>
            </section>

            <section className="px-6 md:px-24 py-16 text-center bg-gray-50 text-[#12295A]">
                <h2 className="text-2xl md:text-3xl mb-6">
                    Challenged by competitive markets, insurers are looking for their next steps in process automation.
                </h2>
                <p className="text-base md:text-sm leading-relaxed">
                    Serving increasingly demanding clients and distribution partners, many insurance companies are still behind in
                    terms of the speed and quality of their digital services. They are looking for new solutions in business
                    process automation to improve the level of their services, accelerate typical insurance processes and overcome
                    transactional frictions which are still common in the industry. Business process automation enhances all the
                    functions of the insurance industry. It is applied in policy administration, claims handling and many other
                    areas of the insurance value chain.
                </p>
            </section>

            <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20 py-20 bg-gray-50">
                <div className="flex-1 space-y-4 text-[#12295A]">
                    <h2 className="text-2xl font-semibold mb-4">Sollers helps insurers to:</h2>
                    <ul className="space-y-3">
                        {[
                            'Analyse problems in existing processes',
                            'Develop a strategy to increase the level of automation',
                            'Design more efficient and scalable business processes',
                            'Implement new processes and tools',
                            'Increase cooperation between business and IT experts',
                            'Train staff to use automation tools',
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <span className="text-green-600 mt-1">✔</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex-1">
                    <img src="/imgs/Carrer-path_Business.jpg" alt="Sollers helps insurers" className="rounded-lg shadow-lg w-full object-cover" />
                </div>
            </section>

            <section className="bg-[#004A8F] text-white text-center px-6 py-20">
                <blockquote className="text-2xl md:text-3xl font-semibold leading-relaxed max-w-4xl mx-auto mb-10">
                    “The insurance industry is characterised by too many paper-based processes and a low level of process automation.”
                </blockquote>
                <div className="flex flex-col items-center">
                    <img src="/imgs/Lennart_round.png" alt="Lennart Imorde" className="w-24 h-24 rounded-full mb-4 border-4 border-white" />
                    <p className="text-lg font-medium">Lennart Imorde</p>
                    <p className="text-sm italic">Head of Process Automation</p>
                    <p className="text-sm">Sollers Consulting</p>
                </div>
            </section>

            <section className="px-6 md:px-20 py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-[#12295A] text-2xl md:text-3xl font-semibold mb-4">
                            Based on the experience from more than 150 insurance core system implementation projects,
                        </h2>
                        <p className="text-[#12295A] leading-8">
                            Sollers experts have designed thousands of business processes helping insurers to increase their degree of
                            automation. Supporting a variety of insurance companies worldwide, Sollers consultants rely on their
                            experience in Business Process Management Notation (BPMN), Case Management Model and Notation (CMMN) and
                            Decision Management Notation (DMN). Their expertise and hands-on approach have helped insurers to cut
                            their costs and to boost the quality of their service.
                        </p>
                    </div>
                    <div>
                        <img src="/imgs/PA-collaboration-team.jpg" alt="Workshop with customers" className="rounded-lg shadow w-full object-cover" />
                    </div>
                </div>
            </section>

            <section className="bg-[#EEF4FA]">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_520px] gap-8 px-6 md:px-16 py-16 items-start">
                    <h2 className="text-[#12295A] text-[42px] leading-[1.1] font-semibold md:mt-8">Contact Us</h2>

                    <div className="w-full rounded-md overflow-hidden shadow-[0_12px_30px_rgba(0,0,0,.08)] bg-white">
                        <img src="/imgs/pa-contacts.jpg" alt="Lennart Imorde" className="w-full h-[300px] object-cover" />
                        <div className="relative">
                            <div className="absolute left-0 top-0 h-full w-[18px] bg-[#0C3E83]" />
                            <div className="pl-8 pr-6 py-6">
                                <h3 className="text-[#12295A] text-[28px] font-semibold">Lennart Imorde</h3>
                                <p className="text-[#5B6F96] mt-1">Head of Process Automation</p>
                            </div>
                            <div className="border-t border-[#E0E8F5] px-8 py-5">
                                <a href="mailto:lennart@sollers.example" className="inline-flex items-center gap-3 text-[#0C3E83] font-medium">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#24A148" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 8l8 6 8-6" /><rect x="3" y="5" width="18" height="14" rx="2" ry="2" /></svg>
                                    Send a message to Lennart
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-6 md:px-20 py-20 bg-gray-50">
                <h2 className="text-[#12295A] text-3xl md:text-[40px] font-extrabold mb-12 text-center">
                    Frequently asked questions about Process Automation
                </h2>

                <div className="space-y-6 max-w-[1100px] mx-auto">
                    {faqs.map((f, i) => {
                        const open = openIndex === i;
                        return (
                            <div
                                key={i}
                                onClick={() => toggle(i)}
                                className={[
                                    'rounded-2xl border-2 p-7 cursor-pointer transition-all duration-200 text-left select-none bg-[#F2F6FC]',
                                    open ? 'border-[#204E8F]' : 'border-[#C9D7EE] hover:border-[#204E8F]',
                                ].join(' ')}
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <h3
                                        className={[
                                            'font-extrabold leading-snug tracking-tight text-[22px] md:text-[24px] transition-colors duration-200',
                                            open ? 'text-[#24A148]' : 'text-[#12295A]',
                                        ].join(' ')}
                                    >
                                        {f.q}
                                    </h3>
                                    <span className="shrink-0 leading-none">
                                        {open ? (
                                            <svg
                                                width="32"
                                                height="32"
                                                viewBox="0 0 24 24"
                                                stroke="#24A148"
                                                fill="none"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                            >
                                                <path d="M5 12h14" />
                                            </svg>
                                        ) : (
                                            <svg
                                                width="32"
                                                height="32"
                                                viewBox="0 0 24 24"
                                                stroke="#0F3B7A"
                                                fill="none"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                            >
                                                <path d="M12 5v14M5 12h14" />
                                            </svg>
                                        )}
                                    </span>
                                </div>
                                {open && (
                                    <p className="text-[#000] text-[17px] mt-4 leading-[1.8] font-normal">
                                        {f.a}
                                    </p>
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>
        </main>
    );
}