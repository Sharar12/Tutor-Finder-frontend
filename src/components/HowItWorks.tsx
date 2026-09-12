import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import type { ReactNode } from "react";

type Step = {
    num: string;
    icon: ReactNode;
    title: string;
    desc: string;
    color: string;
    glow: string;
};

const steps: Step[] = [
    {
        num: "01",
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
        ),
        title: "Post Your Tutor Requirement",
        desc: "Share your needs — subject, class/curriculum, area, weekly schedule, and budget in under 2 minutes.",
        color: "#00A8E8",
        glow: "rgba(0,168,232,0.45)",
    },
    {
        num: "02",
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
        ),
        title: "Get Qualified Tutor Matches",
        desc: "Receive pre-screened tutor profiles from BUET, DU, DMC and enjoy a free trial demo class.",
        color: "#7CB342",
        glow: "rgba(124,179,66,0.45)",
    },
    {
        num: "03",
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        title: "Review & Select",
        desc: "Compare tutor credentials, past student ratings, experience, and choose your perfect fit.",
        color: "#F0501E",
        glow: "rgba(240,80,30,0.45)",
    },
    {
        num: "04",
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
        ),
        title: "Confirm & Start Learning",
        desc: "Finalize your tutor schedule and begin personalized 1-on-1 classes at home or online.",
        color: "#232C77",
        glow: "rgba(35,44,119,0.45)",
    },
];

const trustPoints = [
    { icon: "✓", label: "100% Verified tutor profiles" },
    { icon: "✓", label: "Free 1-hour demo class" },
    { icon: "✓", label: "0% Hidden parent fees" },
    { icon: "✓", label: "Safe & verified home visits" },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="relative w-full overflow-hidden bg-gradient-to-b from-white via-[#f4f9fd] to-white py-16 md:py-24">
            {/* Elegant Slim Circuit Flowing Data Tracks (0.5x Slower, Hairline Thin) */}
            <svg
                className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                viewBox="0 0 1200 800"
            >
                <path
                    d="M 50 180 L 450 180 C 560 180, 560 380, 680 380 L 1150 380"
                    fill="none"
                    stroke="#00A8E8"
                    strokeWidth="1.2"
                    strokeDasharray="14 10"
                    style={{
                        animation: "circuitPacketFlow 14s linear infinite",
                        filter: "drop-shadow(0 0 3px rgba(0, 168, 232, 0.4))",
                    }}
                />
                <path
                    d="M 1150 620 L 720 620 C 600 620, 600 460, 480 460 L 50 460"
                    fill="none"
                    stroke="#7A5AF8"
                    strokeWidth="1.2"
                    strokeDasharray="14 10"
                    style={{
                        animation: "circuitPacketFlow 16s linear infinite reverse",
                        filter: "drop-shadow(0 0 3px rgba(122, 90, 248, 0.4))",
                    }}
                />
                {/* Subtle junction pulses */}
                <circle cx="450" cy="180" r="3" fill="#00A8E8" style={{ animation: "junctionPulse 8s ease-in-out infinite" }} />
                <circle cx="680" cy="380" r="3" fill="#10B981" style={{ animation: "junctionPulse 8s ease-in-out infinite 2.5s" }} />
                <circle cx="480" cy="460" r="3" fill="#F0501E" style={{ animation: "junctionPulse 8s ease-in-out infinite 5s" }} />
            </svg>

            {/* Background Dot Grid Corners */}
            <div
                className="pointer-events-none absolute left-6 top-8 h-24 w-24 opacity-25"
                style={{
                    backgroundImage: "radial-gradient(circle, #232C77 1.5px, transparent 1.5px)",
                    backgroundSize: "14px 14px",
                }}
            />
            <div
                className="pointer-events-none absolute bottom-8 right-6 h-24 w-24 opacity-25"
                style={{
                    backgroundImage: "radial-gradient(circle, #00A8E8 1.5px, transparent 1.5px)",
                    backgroundSize: "14px 14px",
                }}
            />

            {/* Ambient Background Glows */}
            <div className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-[#00A8E8]/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-[#232C77]/10 blur-3xl" />

            <div className="relative mx-auto flex w-full flex-col gap-8 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20">
                {/* ===== SECTION TITLE (Placed ABOVE all containers) ===== */}
                <div className="flex flex-col items-center text-center">
                    <Reveal direction="down" duration={900}>
                        <div className="inline-flex items-center gap-2 rounded-full border border-[#00A8E8]/30 bg-white/90 px-4 py-1.5 text-xs font-bold text-[#1E2772] shadow-sm backdrop-blur-md">
                            <span className="text-[#00A8E8]">🎯</span>
                            <span>SIMPLE 4-STEP MATCHING PROCESS</span>
                            <span className="text-slate-300">•</span>
                            <span className="text-emerald-600 font-extrabold">100% FREE MATCHING</span>
                        </div>
                    </Reveal>

                    <Reveal direction="down" delay={150}>
                        <h2 className="mt-4 text-3xl font-black tracking-tight text-[#141B4D] md:text-4xl lg:text-[2.6rem]">
                            How It Works For{" "}
                            <span className="bg-gradient-to-r from-[#00A8E8] via-[#0284C7] to-[#1E2772] bg-clip-text text-transparent">
                                Guardians
                            </span>{" "}
                            &amp;{" "}
                            <span className="bg-gradient-to-r from-[#1E2772] via-[#0284C7] to-[#00A8E8] bg-clip-text text-transparent">
                                Students
                            </span>
                            {" "}?
                        </h2>
                    </Reveal>

                    <Reveal direction="up" delay={250}>
                        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
                            Finding the right tutor is simple, fast, and secure. Follow four easy steps and start learning with complete confidence.
                        </p>
                    </Reveal>
                </div>

                {/* ============ Row 1: Workflow Overview Card + Trust Card ============ */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.4fr_1fr]">
                    {/* Workflow Overview Card */}
                    <Reveal direction="left" duration={900}>
                        <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border-2 border-[#232C77]/20 bg-white/90 p-7 shadow-sm backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-[#00A8E8]/60 hover:shadow-xl md:p-8">
                            {/* Shine effect on hover */}
                            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#00A8E8]/10 to-transparent transition-transform duration-[1400ms] group-hover:translate-x-full" />

                            <div>
                                <div className="inline-flex items-center gap-1.5 rounded-full bg-[#00A8E8]/10 px-3 py-0.5 text-[11px] font-bold text-[#00A8E8]">
                                    <span>⚡ 15-Minute Shortlist</span>
                                </div>

                                <h3 className="mt-2.5 text-xl font-black text-[#1E2772] md:text-2xl">
                                    Fast, Transparent &amp; Stress-Free Tutoring
                                </h3>

                                <p className="mt-2 text-xs leading-relaxed text-slate-600 md:text-sm">
                                    We match your child with certified, background-checked tutors from BUET, DU, DMC, and top institutions tailored precisely to your curriculum, neighborhood, and schedule.
                                </p>
                            </div>

                            {/* 4-Step Progress Roadmap */}
                            <div className="mt-6 border-t border-slate-100 pt-4">
                                <div className="mb-2 flex items-center justify-between text-[11px] font-black text-slate-400 uppercase tracking-wider">
                                    <span>01 Post</span>
                                    <span>02 Match</span>
                                    <span>03 Review</span>
                                    <span>04 Learn</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    {steps.map((s, i) => (
                                        <span
                                            key={s.num}
                                            className="h-2 flex-1 rounded-full transition-all duration-500 group-hover:h-2.5"
                                            style={{
                                                backgroundColor: s.color,
                                                opacity: 1 - i * 0.1,
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Trust Card */}
                    <Reveal direction="right" delay={200} duration={900}>
                        <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-[#1E2772] via-[#232C77] to-[#0284C7] p-7 text-white shadow-lg shadow-[#1E2772]/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#00A8E8]/30 md:p-8">
                            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#00A8E8]/30 blur-2xl transition-all duration-700 group-hover:scale-125" />

                            <div className="relative">
                                <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold tracking-[0.18em] text-[#00D4FF]">
                                    WHY GUARDIANS TRUST US
                                </span>
                                <h3 className="mt-3 text-lg font-black leading-tight text-white md:text-xl">
                                    Peace of mind, from search to first class.
                                </h3>

                                <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                                    {trustPoints.map((t, i) => (
                                        <li
                                            key={t.label}
                                            className="flex items-center gap-2 text-xs font-semibold transition-transform duration-300 hover:translate-x-1 md:text-sm"
                                            style={{ transitionDelay: `${i * 40}ms` }}
                                        >
                                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00A8E8] text-[10px] font-black text-white shadow">
                                                {t.icon}
                                            </span>
                                            <span>{t.label}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-6 flex items-center gap-2 text-[11px] font-semibold text-slate-200">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                <span>Zero parent commission • 100% Free service</span>
                            </div>
                        </div>
                    </Reveal>
                </div>

                {/* ============ Row 2: Tall Illustration + Nested Steps ============ */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[0.8fr_1.6fr]">
                    {/* Tall Illustration Card */}
                    <Reveal direction="left" delay={300} duration={900}>
                        <div className="group relative flex h-full min-h-[420px] flex-col justify-between overflow-hidden rounded-3xl border-2 border-[#232C77]/20 bg-gradient-to-br from-[#f3f8fc] to-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#00A8E8]/60 hover:shadow-xl">
                            <div className="absolute inset-0 opacity-[0.05]">
                                <div
                                    className="h-full w-full"
                                    style={{
                                        backgroundImage:
                                            "radial-gradient(circle, #232C77 1px, transparent 1px)",
                                        backgroundSize: "16px 16px",
                                    }}
                                />
                            </div>

                            <div className="relative flex h-full flex-col items-center justify-center gap-4 text-center">
                                {/* Verified Tutor Photo */}
                                <div className="relative mb-2 aspect-[3/4] w-full max-w-[210px] overflow-hidden rounded-2xl border-2 border-white/80 shadow-lg transition-transform duration-500 group-hover:scale-105">
                                    <Image
                                        src="/tutor_verified_match.jpg"
                                        alt="Accomplished verified tutor"
                                        fill
                                        sizes="210px"
                                        className="object-cover"
                                    />
                                    {/* Floating Chips */}
                                    <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full border border-white bg-[#00A8E8] text-xs font-black text-white shadow-lg">
                                        ✓
                                    </span>
                                    <span className="absolute -bottom-1 -left-1 flex h-7 w-7 items-center justify-center rounded-xl border border-white bg-[#232C77] text-xs font-black text-[#FBBF24] shadow-lg">
                                        ★
                                    </span>
                                </div>

                                <h3 className="text-lg font-black leading-tight text-[#1E2772] md:text-xl">
                                    Learn With the Right Tutor
                                </h3>
                                <p className="max-w-xs text-xs leading-relaxed text-slate-600 md:text-sm">
                                    From verified academic experts to free demo classes — everything is designed for your child&apos;s academic success.
                                </p>

                                <Link
                                    href="#find-tutor"
                                    className="group/btn mt-2 inline-flex items-center gap-2 rounded-full bg-[#1E2772] px-6 py-2.5 text-xs font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#00A8E8] hover:shadow-lg hover:shadow-[#00A8E8]/40 md:text-sm"
                                >
                                    <span>Get Started</span>
                                    <span className="transition-transform duration-300 group-hover/btn:translate-x-1">
                                        →
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </Reveal>

                    {/* Nested Steps Group */}
                    <div className="flex flex-col gap-5">
                        {/* Wide Card: Step 01 */}
                        <Reveal direction="down" delay={150} duration={900}>
                            <StepCard step={steps[0]} variant="wide" />
                        </Reveal>

                        {/* Bottom Row: Big Card (Step 02) + Stacked Column (Step 03 + 04) */}
                        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.2fr_1fr]">
                            {/* Big Card: Step 02 */}
                            <div className="flex flex-col">
                                <Reveal direction="up" delay={250} duration={900} className="h-full">
                                    <StepCard step={steps[1]} variant="featured" />
                                </Reveal>
                            </div>

                            {/* Right Column: Step 03 (Dashed need help container) + Step 04 */}
                            <div className="flex flex-col gap-5">
                                {/* Step 03: Review & Select in the dashed container */}
                                <Reveal direction="right" delay={300} duration={900}>
                                    <div className="group relative h-full overflow-hidden rounded-3xl border-2 border-dashed border-[#00A8E8]/50 bg-[#f3f8fc] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-solid hover:border-[#00A8E8] hover:bg-white hover:shadow-xl hover:shadow-[#00A8E8]/20">
                                        <div className="flex items-start gap-3.5">
                                            <div className="relative shrink-0">
                                                <div
                                                    className="flex h-12 w-12 items-center justify-center rounded-2xl text-base font-black text-white shadow-md transition-all duration-500 group-hover:rotate-6 group-hover:scale-110"
                                                    style={{
                                                        backgroundColor: steps[2].color,
                                                        boxShadow: `0 8px 20px -6px ${steps[2].glow}`,
                                                    }}
                                                >
                                                    {steps[2].icon}
                                                </div>
                                                <span
                                                    className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-white text-[9px] font-black shadow-sm transition-transform duration-500 group-hover:rotate-12 group-hover:scale-125"
                                                    style={{ color: steps[2].color }}
                                                >
                                                    {steps[2].num}
                                                </span>
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-base font-black leading-tight text-[#1E2772] md:text-lg">
                                                    {steps[2].title}
                                                </h4>
                                                <p className="mt-1.5 text-xs leading-relaxed text-slate-600 md:text-sm">
                                                    {steps[2].desc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>

                                {/* Step 04: Confirm & Start Learning */}
                                <Reveal direction="right" delay={450} duration={900}>
                                    <StepCard step={steps[3]} />
                                </Reveal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ================= Reusable Step Card ================= */
function StepCard({
    step,
    variant = "default",
}: {
    step: Step;
    variant?: "default" | "wide" | "featured";
}) {
    const isWide = variant === "wide";
    const isFeatured = variant === "featured";

    return (
        <div
            className={`group relative h-full overflow-hidden rounded-3xl border-2 bg-white/95 shadow-sm backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
                isWide
                    ? "p-6 md:p-7"
                    : isFeatured
                    ? "p-6 md:p-8 flex flex-col justify-between"
                    : "p-6"
            }`}
            style={{ borderColor: `${step.color}55` }}
        >
            {/* Colored corner accent */}
            <span
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-[0.08] transition-all duration-700 group-hover:scale-125 group-hover:opacity-[0.15]"
                style={{ backgroundColor: step.color }}
            />

            {/* Left accent bar */}
            <span
                className="absolute left-0 top-6 h-12 w-1 rounded-r-full transition-all duration-500 group-hover:h-20"
                style={{ backgroundColor: step.color }}
            />

            <div
                className={`relative flex ${
                    isWide
                        ? "flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6"
                        : isFeatured
                        ? "flex-col justify-between h-full gap-5"
                        : "flex-col gap-3"
                }`}
            >
                <div>
                    {/* Icon + Number */}
                    <div className="relative shrink-0 mb-4">
                        <div
                            className="flex h-14 w-14 items-center justify-center rounded-2xl text-base font-black text-white shadow-lg transition-all duration-500 group-hover:rotate-6 group-hover:scale-110"
                            style={{
                                backgroundColor: step.color,
                                boxShadow: `0 10px 24px -8px ${step.glow}`,
                            }}
                        >
                            {step.icon}
                        </div>
                        <span
                            className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-white text-[10px] font-black shadow-md transition-transform duration-500 group-hover:rotate-12 group-hover:scale-125"
                            style={{ color: step.color }}
                        >
                            {step.num}
                        </span>
                    </div>

                    {/* Text */}
                    <h4
                        className={`font-black leading-tight text-[#1E2772] ${
                            isWide || isFeatured ? "text-lg md:text-xl" : "text-base md:text-lg"
                        }`}
                    >
                        {step.title}
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600 md:text-sm">
                        {step.desc}
                    </p>
                </div>

                {isFeatured && (
                    <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#7CB342]/20 text-[10px] font-black text-[#7CB342]">
                            ✓
                        </span>
                        <span className="text-xs font-semibold text-slate-500">
                            Verified profiles &amp; tailored matches
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}