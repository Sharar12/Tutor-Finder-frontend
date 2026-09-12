"use client";

import { ReactNode } from "react";
import Link from "next/link";
import Reveal from "./Reveal";

type Feature = {
    icon: ReactNode;
    category: string;
    title: string;
    desc: string;
    bullets: string[];
    gradient: string;
    accent: string;
    glow: string;
};

const features: Feature[] = [
    {
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        category: "SAFETY & SECURITY",
        title: "100% Security Assurance",
        desc: "Guardian peace of mind is our prime priority. We conduct thorough identity checks to guarantee maximum safety in every home and online session.",
        bullets: [
            "National ID (NID) & Face Authentication",
            "University Student ID & Hall Verification",
            "Guardian Emergency Contact Recorded",
        ],
        gradient: "from-[#1E2772] via-[#232C77] to-[#00A8E8]",
        accent: "#00A8E8",
        glow: "rgba(0,168,232,0.35)",
    },
    {
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
        category: "ACADEMIC EXCELLENCE",
        title: "Pre-Screened Tutors",
        desc: "All tutors undergo manual screening for academic competency, past teaching track record, and communication skills before being shortlisted.",
        bullets: [
            "Tutors from BUET, DU, DMC & Top Univs",
            "SSC & HSC GPA 5.00 Academic Records",
            "Subject Mastery & English Fluency Tested",
        ],
        gradient: "from-[#6d28d9] via-[#7A5AF8] to-[#4f46e5]",
        accent: "#7A5AF8",
        glow: "rgba(122,90,248,0.35)",
    },
    {
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
        ),
        category: "RISK-FREE TRIAL",
        title: "Free 1st Demo Class",
        desc: "Experience the tutor's methodology firsthand. If the chemistry isn't right, we immediately provide a free replacement without hassle.",
        bullets: [
            "1-Hour Free Assessment Session",
            "Zero Obligation if Not Satisfied",
            "Instant Tutor Replacement Guarantee",
        ],
        gradient: "from-[#059669] via-[#10B981] to-[#34d399]",
        accent: "#10B981",
        glow: "rgba(16,185,129,0.35)",
    },
    {
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        category: "TRANSPARENT PRICING",
        title: "No Advance Payment",
        desc: "Guardians pay zero upfront or registration fees. Monthly honorarium is settled only after classes are completed satisfactorily.",
        bullets: [
            "0% Registration Fee for Guardians",
            "Pay Monthly Directly to Tutor",
            "Transparent Hourly / Monthly Rates",
        ],
        gradient: "from-[#d97706] via-[#f59e0b] to-[#fbbf24]",
        accent: "#f59e0b",
        glow: "rgba(245,158,11,0.35)",
    },
    {
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        ),
        category: "GUARDIAN CARE",
        title: "24/7 Dedicated Support",
        desc: "Our responsive academic coordinators assist guardians and tutors throughout the tuition term via hotline, WhatsApp, or office.",
        bullets: [
            "Dedicated Academic Advisor Assigned",
            "Instant WhatsApp & Call Assistance",
            "Swift Conflict & Schedule Resolution",
        ],
        gradient: "from-[#4f46e5] via-[#7A5AF8] to-[#8b5cf6]",
        accent: "#7A5AF8",
        glow: "rgba(122,90,248,0.35)",
    },
    {
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        category: "NATIONWIDE & GLOBAL",
        title: "Wide Coverage & Online",
        desc: "Find home tutors in every neighborhood across Dhaka and major cities, or connect with expert tutors globally via our digital whiteboard system.",
        bullets: [
            "All 64 Districts in Bangladesh Covered",
            "Online Classes for Overseas Students",
            "Cambridge & Edexcel Curriculum Specialists",
        ],
        gradient: "from-[#0284C7] via-[#00A8E8] to-[#38bdf8]",
        accent: "#00A8E8",
        glow: "rgba(0,168,232,0.35)",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-[#f4f9fd] to-white py-16 md:py-24">
            {/* High-Visibility Floating Security Hexagon Shields */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
                {/* Shield 1: Cyan Security Badge */}
                <div
                    className="absolute left-[4%] top-16 flex flex-col items-center justify-center h-28 w-28 rounded-2xl border-2 border-[#00A8E8]/50 bg-white/70 shadow-[0_8px_30px_rgba(0,168,232,0.3)] backdrop-blur-md"
                    style={{ animation: "hexShieldFloat1 6.5s ease-in-out infinite" }}
                >
                    <span className="text-2xl">🛡️</span>
                    <span className="mt-1 text-[9px] font-black uppercase tracking-wider text-[#00A8E8]">NID VERIFIED</span>
                </div>

                {/* Shield 2: Violet Auth Badge */}
                <div
                    className="absolute right-[5%] top-24 flex flex-col items-center justify-center h-30 w-30 rounded-2xl border-2 border-[#7A5AF8]/50 bg-white/70 shadow-[0_8px_30px_rgba(122,90,248,0.3)] backdrop-blur-md p-3"
                    style={{ animation: "hexShieldFloat2 7.5s ease-in-out infinite 1s" }}
                >
                    <span className="text-2xl">🔒</span>
                    <span className="mt-1 text-[9px] font-black uppercase tracking-wider text-[#7A5AF8]">100% SECURE</span>
                </div>

                {/* Shield 3: Emerald Zero-Advance Badge */}
                <div
                    className="absolute left-[8%] bottom-16 flex flex-col items-center justify-center h-24 w-24 rounded-2xl border-2 border-[#10B981]/50 bg-white/70 shadow-[0_8px_25px_rgba(16,185,129,0.3)] backdrop-blur-md"
                    style={{ animation: "hexShieldFloat1 7s ease-in-out infinite 2s" }}
                >
                    <span className="text-xl">✓</span>
                    <span className="mt-0.5 text-[8px] font-black uppercase tracking-wider text-[#10B981]">NO ADVANCE</span>
                </div>

                {/* Shield 4: Amber 24/7 Support Badge */}
                <div
                    className="absolute right-[8%] bottom-14 flex flex-col items-center justify-center h-26 w-26 rounded-2xl border-2 border-[#F59E0B]/50 bg-white/70 shadow-[0_8px_25px_rgba(245,158,11,0.3)] backdrop-blur-md"
                    style={{ animation: "hexShieldFloat2 8s ease-in-out infinite 1.5s" }}
                >
                    <span className="text-xl">⚡</span>
                    <span className="mt-0.5 text-[8px] font-black uppercase tracking-wider text-[#F59E0B]">24/7 CARE</span>
                </div>

                {/* Ambient Cyber Grid Lines */}
                <svg className="absolute inset-0 h-full w-full opacity-15" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="25%" x2="100%" y2="25%" stroke="#00A8E8" strokeWidth="1" strokeDasharray="12 8" />
                    <line x1="0" y1="75%" x2="100%" y2="75%" stroke="#7A5AF8" strokeWidth="1" strokeDasharray="12 8" />
                </svg>
            </div>

            {/* Background Dot Patterns & Soft Glows */}
            <div
                className="pointer-events-none absolute left-6 top-8 h-24 w-28 opacity-30"
                style={{
                    backgroundImage: "radial-gradient(circle, #00A8E8 1.5px, transparent 1.5px)",
                    backgroundSize: "14px 14px",
                }}
            />
            <div
                className="pointer-events-none absolute bottom-8 right-6 h-24 w-28 opacity-30"
                style={{
                    backgroundImage: "radial-gradient(circle, #1E2772 1.5px, transparent 1.5px)",
                    backgroundSize: "14px 14px",
                }}
            />

            <div className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-[#00A8E8]/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-32 top-1/2 h-80 w-80 rounded-full bg-[#7A5AF8]/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* ===== Heading ===== */}
                <div className="flex flex-col items-center text-center">
                    <Reveal direction="down" duration={900}>
                        <div className="inline-flex items-center gap-2 rounded-full border border-[#00A8E8]/30 bg-white/90 px-4 py-1.5 text-xs font-bold text-[#1E2772] shadow-sm backdrop-blur-md">
                            <span className="text-[#00A8E8]">🛡️</span>
                            <span>THE TUTOR FINDER ADVANTAGE</span>
                            <span className="text-slate-300">•</span>
                            <span className="text-emerald-600 font-extrabold">TRUSTED BY 10,000+ GUARDIANS</span>
                        </div>
                    </Reveal>

                    <Reveal direction="down" delay={150}>
                        <h2 className="mt-4 text-3xl font-black tracking-tight text-[#141B4D] md:text-4xl lg:text-[2.6rem]">
                            Why Choose{" "}
                            <span className="bg-gradient-to-r from-[#00A8E8] via-[#0284C7] to-[#1E2772] bg-clip-text text-transparent">
                                Tutor Finder
                            </span>
                            {" "}?
                        </h2>
                    </Reveal>

                    <Reveal direction="up" delay={250}>
                        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
                            Bangladesh&apos;s most reliable tuition network. We empower students and tutors with verified credentials, zero financial risk, and unmatched academic safety.
                        </p>
                    </Reveal>
                </div>

                {/* ===== Feature Cards Grid ===== */}
                <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-18 lg:grid-cols-3 lg:gap-8">
                    {features.map((feature, i) => (
                        <Reveal
                            key={feature.title}
                            direction="up"
                            delay={i * 120}
                            duration={850}
                        >
                            <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/85 bg-white/85 p-6 shadow-[0_12px_35px_-12px_rgba(20,27,77,0.12)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_-12px_rgba(20,27,77,0.22)] md:p-7">
                                {/* Top Accent Bar */}
                                <span
                                    className="absolute left-6 right-6 top-0 h-1 rounded-b-full opacity-70 transition-all duration-500 group-hover:left-3 group-hover:right-3 group-hover:opacity-100"
                                    style={{ backgroundColor: feature.accent }}
                                />

                                {/* Icon + Category Header */}
                                <div className="mb-5 flex items-center justify-between">
                                    <div className="relative">
                                        <div
                                            className="absolute -inset-1 rounded-2xl opacity-40 blur-md transition-opacity duration-500 group-hover:opacity-80"
                                            style={{ backgroundColor: feature.glow }}
                                        />
                                        <div
                                            className={`relative flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} text-white shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 p-3`}
                                        >
                                            {feature.icon}
                                        </div>
                                    </div>

                                    <span
                                        className="rounded-full px-2.5 py-0.5 text-[9px] font-black uppercase tracking-wider"
                                        style={{
                                            backgroundColor: `${feature.accent}15`,
                                            color: feature.accent,
                                        }}
                                    >
                                        {feature.category}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-black text-[#1E2772] transition-colors group-hover:text-[#00A8E8]">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="mt-2.5 text-xs leading-relaxed text-slate-600 sm:text-[13px]">
                                    {feature.desc}
                                </p>

                                {/* Feature Checklist Bullets */}
                                <div className="mt-5 flex-1 border-t border-slate-100 pt-4">
                                    <ul className="flex flex-col gap-2">
                                        {feature.bullets.map((bullet) => (
                                            <li key={bullet} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                                                <span
                                                    className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[9px] font-black text-white"
                                                    style={{ backgroundColor: feature.accent }}
                                                >
                                                    ✓
                                                </span>
                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Ambient Hover Glow */}
                                <span
                                    className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-40"
                                    style={{ backgroundColor: feature.glow }}
                                />
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* ===== Trust Callout & Direct Helpline Banner ===== */}
                <Reveal direction="up" delay={650} className="mt-14 md:mt-18">
                    <div className="relative overflow-hidden rounded-3xl border border-white/80 bg-gradient-to-r from-[#1E2772] via-[#232C77] to-[#121842] p-6 text-white shadow-xl shadow-[#1E2772]/20 sm:p-8">
                        {/* Ambient back glows */}
                        <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-[#00A8E8]/30 blur-3xl" />
                        <div className="pointer-events-none absolute right-0 bottom-0 h-60 w-60 rounded-full bg-[#7A5AF8]/30 blur-3xl" />

                        <div className="relative flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
                            <div className="max-w-xl">
                                <div className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-0.5 text-[11px] font-bold text-[#00D4FF]">
                                    <span>📞 24/7 Dedicated Guardian Support</span>
                                </div>
                                <h3 className="mt-2 text-xl font-black sm:text-2xl">
                                    Need a Verified Tutor for Your Child Today?
                                </h3>
                                <p className="mt-1.5 text-xs leading-relaxed text-slate-200 sm:text-sm">
                                    Our senior education advisors will match your exact curriculum requirements within 15 minutes. 100% free consultation.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
                                <Link
                                    href="#find-tutor"
                                    className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[#00A8E8] via-[#0284C7] to-[#00A8E8] px-6 py-3 text-xs font-black text-white shadow-lg shadow-[#00A8E8]/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#00A8E8]/50 sm:text-sm"
                                >
                                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                                    <span>Find a Tutor Now</span>
                                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                                </Link>

                                <a
                                    href="https://wa.me/8801947368456"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-xs font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-[#25D366] hover:border-[#25D366] sm:text-sm"
                                >
                                    <span>💬 Chat on WhatsApp</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}