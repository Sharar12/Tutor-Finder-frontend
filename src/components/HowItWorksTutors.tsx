"use client";

import { ReactNode } from "react";
import Link from "next/link";
import Reveal from "./Reveal";

type TutorStep = {
    num: string;
    icon: ReactNode;
    title: string;
    desc: string;
    perks: string[];
    color: string;
    glow: string;
};

const steps: TutorStep[] = [
    {
        num: "01",
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
        ),
        title: "Create & Verify Profile",
        desc: "Sign up in 3 minutes. Upload your educational credentials, NID, and varsity student ID for fast-track verification.",
        perks: ["Free Registration", "NID & Varsity ID Check", "Set Your Own Rate"],
        color: "#00A8E8",
        glow: "rgba(0,168,232,0.4)",
    },
    {
        num: "02",
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        title: "Browse & Apply to Jobs",
        desc: "Filter through 1,200+ live tuition vacancies across Dhaka, Chattogram, and nationwide by area, class, and salary.",
        perks: ["1,200+ Daily Vacancies", "Neighborhood Filters", "Instant WhatsApp Alerts"],
        color: "#10B981",
        glow: "rgba(16,185,129,0.4)",
    },
    {
        num: "03",
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: "Free Demo & Schedule",
        desc: "Conduct a 1-hour demo session with the student/guardian. Confirm the teaching schedule, class days, and honorarium.",
        perks: ["1-on-1 Trial Class", "Flexible Time Slot", "Transparent Terms"],
        color: "#F0501E",
        glow: "rgba(240,80,30,0.4)",
    },
    {
        num: "04",
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        ),
        title: "Teach & Earn Reliably",
        desc: "Deliver impactful lessons home or online. Build your verified 5-star reputation and receive secured monthly payments.",
        perks: ["Guaranteed Monthly Pay", "5-Star Tutor Profile", "24/7 Support Team"],
        color: "#7A5AF8",
        glow: "rgba(122,90,248,0.4)",
    },
];

export default function HowItWorksTutors() {
    return (
        <section id="how-it-works-tutors" className="relative w-full overflow-hidden bg-gradient-to-b from-white via-[#edf5fc] to-white py-16 md:py-24">
            {/* Background Looping Video with 25% Opacity & Smooth Edge Fades */}
            <div
                className="pointer-events-none absolute inset-0 overflow-hidden"
                style={{
                    maskImage: "linear-gradient(to bottom, transparent 0%, black 16%, black 84%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 16%, black 84%, transparent 100%)",
                }}
            >
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover opacity-25"
                >
                    <source src="/tutors_bg_video.mp4" type="video/mp4" />
                    <source src="/generate_a_white_background_wi.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Smooth Top & Deep Bottom Fade Overlays */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white via-white/60 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent" />

            {/* Background Soft Wave and Gradients */}
            <svg
                className="pointer-events-none absolute inset-x-0 bottom-0 h-64 w-full opacity-35"
                viewBox="0 0 1440 260"
                preserveAspectRatio="none"
            >
                <path
                    d="M0,180 C 360,80 720,260 1080,180 C 1260,140 1380,120 1440,110 L1440,260 L0,260 Z"
                    fill="#dbeafe"
                />
            </svg>

            <div className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-[#00A8E8]/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-[#7A5AF8]/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* ===== Heading ===== */}
                <div className="flex flex-col items-center text-center">
                    <Reveal direction="down" duration={900}>
                        <div className="inline-flex items-center gap-2 rounded-full border border-[#00A8E8]/30 bg-white/90 px-4 py-1.5 text-xs font-bold text-[#1E2772] shadow-sm backdrop-blur-md">
                            <span className="text-[#00A8E8]">★</span>
                            <span>FOR PASSIONATE EDUCATORS &amp; TUTORS</span>
                            <span className="text-slate-300">•</span>
                            <span className="text-emerald-600 font-extrabold">0% APPLICATION FEE</span>
                        </div>
                    </Reveal>

                    <Reveal direction="down" delay={150}>
                        <h2 className="mt-4 text-3xl font-black tracking-tight text-[#141B4D] md:text-4xl lg:text-[2.6rem]">
                            How It Works For{" "}
                            <span className="bg-gradient-to-r from-[#00A8E8] via-[#0284C7] to-[#1E2772] bg-clip-text text-transparent">
                                Tutors
                            </span>
                            {" "}?
                        </h2>
                    </Reveal>

                    <Reveal direction="up" delay={250}>
                        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
                            Join Bangladesh&apos;s most rewarding tutoring network. Find nearby tuition opportunities, set your own schedule, and earn guaranteed monthly honorarium.
                        </p>
                    </Reveal>
                </div>

                {/* ===== Connected 4 Steps Grid ===== */}
                <div className="relative mt-14 md:mt-20">
                    {/* Animated Desktop Connector Line */}
                    <div className="pointer-events-none absolute left-[12%] right-[12%] top-[56px] hidden h-0.5 lg:block">
                        <div className="relative h-full w-full overflow-hidden rounded-full bg-slate-200">
                            <div className="absolute inset-y-0 left-0 w-full rounded-full bg-gradient-to-r from-[#00A8E8] via-[#10B981] via-[#F0501E] to-[#7A5AF8] opacity-70" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {steps.map((s, i) => (
                            <Reveal
                                key={s.num}
                                direction="up"
                                delay={i * 150}
                                duration={850}
                            >
                                <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/85 bg-white/85 p-6 shadow-[0_12px_35px_-12px_rgba(20,27,77,0.12)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_55px_-12px_rgba(20,27,77,0.22)]">
                                    {/* Top colored accent line */}
                                    <span
                                        className="absolute left-6 right-6 top-0 h-1 rounded-b-full opacity-70 transition-all duration-500 group-hover:left-3 group-hover:right-3 group-hover:opacity-100"
                                        style={{ backgroundColor: s.color }}
                                    />

                                    {/* Step Header: Icon & Step Badge */}
                                    <div className="relative mb-5 flex items-center justify-between">
                                        {/* Icon Container with glowing aura */}
                                        <div className="relative">
                                            <div
                                                className="absolute -inset-1 rounded-2xl opacity-40 blur-md transition-opacity duration-500 group-hover:opacity-80"
                                                style={{ backgroundColor: s.glow }}
                                            />
                                            <div
                                                className="relative flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                                                style={{
                                                    backgroundColor: s.color,
                                                    boxShadow: `0 8px 20px -6px ${s.glow}`,
                                                }}
                                            >
                                                {s.icon}
                                            </div>
                                        </div>

                                        {/* Step Number Tag */}
                                        <div className="flex flex-col items-end">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                                                STEP
                                            </span>
                                            <span
                                                className="text-2xl font-black leading-none"
                                                style={{ color: s.color }}
                                            >
                                                {s.num}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-black text-[#1E2772] transition-colors group-hover:text-[#00A8E8]">
                                        {s.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="mt-2.5 flex-1 text-xs leading-relaxed text-slate-600 sm:text-[13px]">
                                        {s.desc}
                                    </p>

                                    {/* Perks Tags */}
                                    <div className="mt-5 border-t border-slate-100 pt-4">
                                        <ul className="flex flex-col gap-1.5">
                                            {s.perks.map((perk) => (
                                                <li key={perk} className="flex items-center gap-2 text-[11px] font-semibold text-slate-700">
                                                    <span
                                                        className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full text-[9px] font-black text-white"
                                                        style={{ backgroundColor: s.color }}
                                                    >
                                                        ✓
                                                    </span>
                                                    <span>{perk}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Ambient hover corner glow */}
                                    <span
                                        className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-40"
                                        style={{ backgroundColor: s.glow }}
                                    />
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>

                {/* ===== Tutor Callout Banner ===== */}
                <Reveal direction="up" delay={600} className="mt-14">
                    <div className="relative overflow-hidden rounded-3xl border border-white/80 bg-gradient-to-r from-[#1E2772] via-[#232C77] to-[#141B4D] p-6 text-white shadow-xl shadow-[#1E2772]/20 sm:p-8">
                        {/* Ambient Glows */}
                        <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-[#00A8E8]/30 blur-3xl" />
                        <div className="pointer-events-none absolute right-0 bottom-0 h-60 w-60 rounded-full bg-[#7A5AF8]/30 blur-3xl" />

                        <div className="relative flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
                            <div className="max-w-xl">
                                <div className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-0.5 text-[11px] font-bold text-[#00D4FF]">
                                    <span>💰 High Earning Potential</span>
                                </div>
                                <h3 className="mt-2 text-xl font-black sm:text-2xl">
                                    Earn Up to ৳ 20,000 – ৳ 45,000+ / Month
                                </h3>
                                <p className="mt-1.5 text-xs leading-relaxed text-slate-200 sm:text-sm">
                                    Join 12,500+ verified tutors from BUET, DU, DMC, and top institutions. Choose your location, days per week, and subject.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
                                <Link
                                    href="#how-it-works-tutors"
                                    className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[#00A8E8] to-[#0284C7] px-6 py-3 text-xs font-black text-white shadow-lg shadow-[#00A8E8]/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#00A8E8]/50 sm:text-sm"
                                >
                                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                                    <span>Apply as a Tutor Now</span>
                                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                                </Link>

                                <Link
                                    href="#job-board"
                                    className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-xs font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 sm:text-sm"
                                >
                                    Explore 1,200+ Jobs
                                </Link>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}