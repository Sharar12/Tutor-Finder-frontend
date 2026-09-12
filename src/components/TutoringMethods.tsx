"use client";

import { useState, type ReactNode } from "react";
import Reveal from "./Reveal";

type Method = {
    num: string;
    icon: ReactNode;
    title: string;
    desc: string;
    color: string;
    glow: string;
};

const methods: Method[] = [
    {
        num: "01",
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        ),
        title: "Home Tutoring",
        desc: "A dedicated tutor comes to your home for customized, face-to-face learning.",
        color: "#3FA9A5",
        glow: "rgba(63,169,165,0.65)",
    },
    {
        num: "02",
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        title: "Online Tutoring",
        desc: "Learn from anywhere via live classes led by expert tutors.",
        color: "#7CB342",
        glow: "rgba(124,179,66,0.65)",
    },
    {
        num: "03",
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        title: "Group Tutoring",
        desc: "Study with a small group of students in an interactive learning environment.",
        color: "#E53935",
        glow: "rgba(229,57,53,0.65)",
    },
    {
        num: "04",
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: "Exam Crash Program",
        desc: "Short-term, intensive preparation designed to boost exam performance quickly.",
        color: "#F0501E",
        glow: "rgba(240,80,30,0.65)",
    },
    {
        num: "05",
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
        ),
        title: "Shadow Tutoring",
        desc: "Personalized support alongside school or college learning to reinforce understanding.",
        color: "#E0A100",
        glow: "rgba(224,161,0,0.65)",
    },
    {
        num: "06",
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
        ),
        title: "Exam-Focused Tutoring",
        desc: "Targeted preparation to help you excel in specific exams with structured guidance.",
        color: "#2E5266",
        glow: "rgba(46,82,102,0.65)",
    },
    {
        num: "07",
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
        ),
        title: "Language Tutoring",
        desc: "Improve your speaking, writing, reading, and communication skills with expert support.",
        color: "#3F6B8A",
        glow: "rgba(63,107,138,0.65)",
    },
    {
        num: "08",
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        ),
        title: "Skill-Based Tutoring",
        desc: "Learn practical, job-ready, and professional skills for personal and career growth.",
        color: "#1E88C7",
        glow: "rgba(30,136,199,0.65)",
    },
];

// ===== Wheel geometry =====
const SIZE = 720;
const CX = SIZE / 2;
const CY = SIZE / 2;
const R_OUTER = 320;
const R_INNER = 108;
const DISC_SIZE = 200;
const SLICE_DEG = 45;
const HOVER_OFFSET = 22;

function polar(angleDeg: number, radius: number) {
    // 0° = 12 o'clock, increases clockwise
    const rad = ((angleDeg - 90) * Math.PI) / 180;
    return { x: CX + radius * Math.cos(rad), y: CY + radius * Math.sin(rad) };
}

function wedgePath(startDeg: number, endDeg: number) {
    const p1 = polar(startDeg, R_OUTER);
    const p2 = polar(endDeg, R_OUTER);
    const p3 = polar(endDeg, R_INNER);
    const p4 = polar(startDeg, R_INNER);
    const largeArc = endDeg - startDeg > 180 ? 1 : 0;
    return `M ${p1.x} ${p1.y} A ${R_OUTER} ${R_OUTER} 0 ${largeArc} 1 ${p2.x} ${p2.y} L ${p3.x} ${p3.y} A ${R_INNER} ${R_INNER} 0 ${largeArc} 0 ${p4.x} ${p4.y} Z`;
}

function popVector(index: number) {
    const bisector = index * SLICE_DEG + SLICE_DEG / 2;
    const rad = ((bisector - 90) * Math.PI) / 180;
    return {
        dx: Math.cos(rad) * HOVER_OFFSET,
        dy: Math.sin(rad) * HOVER_OFFSET,
    };
}

export default function TutoringMethods() {
    const [hovered, setHovered] = useState<number | null>(null);
    const [discHovered, setDiscHovered] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const activeIndex = hovered !== null ? hovered : selectedIndex;
    const active = methods[activeIndex];

    return (
        <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-[#f3f8fc] to-white py-16 md:py-24">
            {/* Elegant Hairline Animated Concentric Magnetic Shockwaves (Ultra Slow & Thin) */}
            <div className="pointer-events-none absolute left-1/2 lg:left-[28%] top-1/2 -translate-x-1/2 -translate-y-1/2 h-[560px] w-[560px] opacity-35">
                <div
                    className="absolute inset-0 rounded-full border border-[#00A8E8]/70 shadow-[0_0_8px_rgba(0,168,232,0.3)]"
                    style={{ animation: "magneticRipple 24s cubic-bezier(0.2, 0.8, 0.2, 1) infinite" }}
                />
                <div
                    className="absolute inset-0 rounded-full border border-[#7A5AF8]/70 shadow-[0_0_8px_rgba(122,90,248,0.3)]"
                    style={{ animation: "magneticRipple 24s cubic-bezier(0.2, 0.8, 0.2, 1) infinite 8s" }}
                />
                <div
                    className="absolute inset-0 rounded-full border border-[#10B981]/70 shadow-[0_0_8px_rgba(16,185,129,0.3)]"
                    style={{ animation: "magneticRipple 24s cubic-bezier(0.2, 0.8, 0.2, 1) infinite 16s" }}
                />
                {/* Thin Rotating Orbit with subtle satellite node */}
                <div
                    className="absolute inset-10 rounded-full border border-dashed border-[#00A8E8]/30"
                    style={{ animation: "orbitSatellite 40s linear infinite" }}
                >
                    <span className="absolute -top-1.5 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#00A8E8] shadow-[0_0_6px_#00A8E8]" />
                </div>
            </div>

            {/* Soft glows */}
            <div className="pointer-events-none absolute left-0 top-1/4 h-72 w-72 rounded-full bg-[#00A8E8]/10 blur-3xl" />
            <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-[#232C77]/10 blur-3xl" />

            {/* Faint doodles */}
            <div className="pointer-events-none absolute inset-0 select-none">
                <span className="absolute left-[6%] top-[8%] text-4xl font-black text-[#232C77]/[0.05]">∑</span>
                <span className="absolute right-[8%] top-[10%] text-3xl font-black text-[#232C77]/[0.05]">∞</span>
                <span className="absolute bottom-[10%] left-[10%] text-4xl font-black text-[#232C77]/[0.05]">π</span>
                <span className="absolute bottom-[8%] right-[6%] text-3xl font-black text-[#232C77]/[0.05]">√</span>
            </div>

            <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.1fr_auto] lg:gap-10">
                {/* ===== Left: Modern Interactive Showcase Panel ===== */}
                <Reveal direction="left" duration={900}>
                    <div className="relative flex flex-col justify-center gap-6">
                        {/* Header area */}
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full border border-[#00A8E8]/30 bg-white/80 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-[#00A8E8] shadow-sm backdrop-blur-md">
                                <span className="h-2 w-2 rounded-full bg-[#00A8E8] animate-ping" />
                                <span>Flexible Learning Modes</span>
                                <span className="text-slate-300">•</span>
                                <span className="text-slate-500 font-bold">8 Methods</span>
                            </div>

                            <h2 className="mt-4 text-3xl font-black leading-[1.15] tracking-tight text-[#232C77] sm:text-4xl xl:text-5xl">
                                Tutoring{" "}
                                <span className="bg-gradient-to-r from-[#00A8E8] to-[#232C77] bg-clip-text text-transparent">
                                    Methods
                                </span>
                                <br />
                                Tailored To You
                            </h2>
                            <p className="mt-3 max-w-lg text-sm leading-relaxed text-slate-600 sm:text-base">
                                Choose the tutoring format that best matches your learning style and routine. Hover or tap any slice on the interactive wheel to explore in detail.
                            </p>
                        </div>

                        {/* Dynamic Showcase Card */}
                        <div
                            className="group relative overflow-hidden rounded-[2rem] border bg-white/90 p-6 shadow-[0_20px_50px_-15px_rgba(35,44,119,0.12)] backdrop-blur-2xl transition-all duration-500 hover:shadow-[0_30px_70px_-15px_rgba(35,44,119,0.2)] sm:p-8"
                            style={{ borderColor: `${active.color}45` }}
                        >
                            {/* Animated corner glow wash */}
                            <div
                                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-20 blur-3xl transition-all duration-700"
                                style={{ backgroundColor: active.color }}
                            />

                            {/* Top Accent Strip */}
                            <div
                                className="absolute left-8 right-8 top-0 h-1.5 rounded-b-full transition-all duration-500"
                                style={{ backgroundColor: active.color }}
                            />

                            <div className="relative flex items-center justify-between gap-4">
                                {/* Method Icon & Number */}
                                <div className="flex items-center gap-4">
                                    <div
                                        className="flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg transition-transform duration-500 group-hover:scale-105"
                                        style={{
                                            backgroundColor: active.color,
                                            boxShadow: `0 10px 25px -6px ${active.glow}`,
                                        }}
                                    >
                                        {active.icon}
                                    </div>
                                    <div>
                                        <span
                                            className="text-xs font-black tracking-widest uppercase"
                                            style={{ color: active.color }}
                                        >
                                            Method {active.num}
                                        </span>
                                        <h3 className="text-xl font-black text-[#232C77] sm:text-2xl">
                                            {active.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Active badge */}
                                <span
                                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-wider text-white shadow-sm transition-all duration-300"
                                    style={{ backgroundColor: active.color }}
                                >
                                    ✓ Active
                                </span>
                            </div>

                            {/* Description */}
                            <p className="relative mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                                {active.desc}
                            </p>

                            {/* Feature highlights */}
                            <div className="relative mt-6 flex flex-wrap gap-2">
                                <span className="inline-flex items-center gap-1.5 rounded-xl bg-slate-100/90 px-3 py-1.5 text-xs font-bold text-slate-700">
                                    <span className="text-[#00A8E8]">✓</span> 1-on-1 Personalized
                                </span>
                                <span className="inline-flex items-center gap-1.5 rounded-xl bg-slate-100/90 px-3 py-1.5 text-xs font-bold text-slate-700">
                                    <span className="text-[#00A8E8]">✓</span> Background Checked
                                </span>
                                <span className="inline-flex items-center gap-1.5 rounded-xl bg-slate-100/90 px-3 py-1.5 text-xs font-bold text-slate-700">
                                    <span className="text-[#00A8E8]">✓</span> Free Demo Class
                                </span>
                            </div>

                            {/* Action Row */}
                            <div className="relative mt-7 flex flex-wrap items-center gap-4">
                                <a
                                    href="#find-tutor"
                                    className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-xs font-black text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:text-sm"
                                    style={{
                                        backgroundColor: active.color,
                                        boxShadow: `0 8px 20px -4px ${active.glow}`,
                                    }}
                                >
                                    <span>Request {active.title}</span>
                                    <span>→</span>
                                </a>
                                <span className="text-xs font-semibold text-slate-400">
                                    No advance payments required
                                </span>
                            </div>
                        </div>

                        {/* Quick Pills to switch/highlight on wheel */}
                        <div className="flex flex-wrap items-center gap-1.5 pt-1">
                            <span className="mr-1 text-xs font-bold text-slate-400">Quick Select:</span>
                            {methods.map((m, idx) => (
                                <button
                                    key={m.num}
                                    onClick={() => {
                                        setSelectedIndex(idx);
                                        setHovered(idx);
                                    }}
                                    onMouseEnter={() => setHovered(idx)}
                                    className={`rounded-xl px-2.5 py-1 text-[11px] font-bold transition-all duration-300 ${
                                        activeIndex === idx
                                            ? "scale-105 text-white shadow-sm"
                                            : "border border-slate-200/80 bg-white/80 text-slate-600 hover:border-[#00A8E8] hover:bg-white hover:text-[#232C77]"
                                    }`}
                                    style={{
                                        backgroundColor: activeIndex === idx ? m.color : undefined,
                                    }}
                                >
                                    {m.title}
                                </button>
                            ))}
                        </div>
                    </div>
                </Reveal>

                {/* ===== Right: Interactive Wheel (desktop only) ===== */}
                <Reveal direction="zoom" duration={1200} className="hidden lg:block">
                    <div
                        className="relative overflow-visible"
                        style={{ width: SIZE, height: SIZE }}
                        onMouseLeave={() => setHovered(null)}
                    >
                        {/* Ambient glow behind wheel */}
                        <div className="pointer-events-none absolute inset-8 rounded-full bg-[#00A8E8]/5 blur-2xl" />

                        {/* ===== SVG wheel (interactive wedges) ===== */}
                        <svg
                            viewBox={`0 0 ${SIZE} ${SIZE}`}
                            className="absolute inset-0 h-full w-full overflow-visible"
                        >
                            {/* Drop shadow under the whole wheel */}
                            <defs>
                                <filter id="wheelShadow" x="-20%" y="-20%" width="140%" height="140%">
                                    <feDropShadow
                                        dx="0"
                                        dy="14"
                                        stdDeviation="18"
                                        floodColor="#232C77"
                                        floodOpacity="0.28"
                                    />
                                </filter>
                            </defs>

                            <g filter="url(#wheelShadow)">
                                {methods.map((m, i) => {
                                    const isHovered = hovered === i || (hovered === null && selectedIndex === i);
                                    const { dx, dy } = popVector(i);

                                    return (
                                        <g
                                            key={m.num}
                                            onMouseEnter={() => setHovered(i)}
                                            onClick={() => setSelectedIndex(i)}
                                            style={{
                                                transform: isHovered
                                                    ? `translate(${dx}px, ${dy}px)`
                                                    : "translate(0px, 0px)",
                                                transition:
                                                    "transform 500ms cubic-bezier(0.22, 1, 0.36, 1), filter 400ms ease",
                                                cursor: "pointer",
                                                filter: isHovered
                                                    ? `brightness(1.08) drop-shadow(0 15px 28px ${m.glow})`
                                                    : "brightness(1)",
                                            }}
                                        >
                                            {/* Wedge fill */}
                                            <path
                                                d={wedgePath(i * SLICE_DEG, (i + 1) * SLICE_DEG)}
                                                fill={m.color}
                                                stroke="rgba(255,255,255,0.35)"
                                                strokeWidth={isHovered ? 2 : 1}
                                            />
                                        </g>
                                    );
                                })}
                            </g>
                        </svg>

                        {/* ===== HTML overlay: text + icons for each wedge ===== */}
                        {methods.map((m, i) => {
                            const bisector = i * SLICE_DEG + SLICE_DEG / 2;
                            const pos = polar(bisector, 214);
                            const { dx, dy } = popVector(i);
                            const isHovered = hovered === i || (hovered === null && selectedIndex === i);

                            return (
                                <div
                                    key={m.num}
                                    className="pointer-events-none absolute z-10 flex w-[150px] flex-col items-center text-center"
                                    style={{
                                        left: pos.x,
                                        top: pos.y,
                                        transform: `translate(-50%, -50%) translate(${isHovered ? dx : 0}px, ${isHovered ? dy : 0}px)`,
                                        transition:
                                            "transform 500ms cubic-bezier(0.22, 1, 0.36, 1)",
                                    }}
                                >
                                    {/* Number badge */}
                                    <span
                                        className="absolute -right-1 -top-2 z-20 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-white text-[10px] font-black shadow-md transition-all duration-500"
                                        style={{
                                            color: m.color,
                                            transform: isHovered
                                                ? "scale(1.25) rotate(12deg)"
                                                : "scale(1) rotate(0deg)",
                                        }}
                                    >
                                        {m.num}
                                    </span>

                                    {/* Icon tile */}
                                    <div
                                        className="mb-2 flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-white/70 text-base font-black text-white shadow-lg transition-all duration-500"
                                        style={{
                                            backgroundColor: m.color,
                                            boxShadow: `0 10px 24px -8px ${m.glow}`,
                                            transform: isHovered
                                                ? "translateY(-4px) rotate(8deg) scale(1.15)"
                                                : "translateY(0) rotate(0deg) scale(1)",
                                        }}
                                    >
                                        {m.icon}
                                    </div>

                                    {/* Title */}
                                    <h4 className="text-[13px] font-black leading-tight text-white drop-shadow-sm">
                                        {m.title}
                                    </h4>

                                    {/* Divider */}
                                    <span
                                        className="my-1 h-px rounded-full bg-white/60 transition-all duration-500"
                                        style={{ width: isHovered ? 48 : 24 }}
                                    />

                                    {/* Description */}
                                    <p
                                        className="font-medium leading-snug text-white/95 transition-all duration-500"
                                        style={{
                                            fontSize: isHovered ? "11.5px" : "10.5px",
                                        }}
                                    >
                                        {m.desc}
                                    </p>
                                </div>
                            );
                        })}

                        {/* Ambient Glow Halo Behind Disc */}
                        <div
                            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-500"
                            style={{
                                width: discHovered ? DISC_SIZE + 36 : DISC_SIZE + 8,
                                height: discHovered ? DISC_SIZE + 36 : DISC_SIZE + 8,
                                backgroundColor: discHovered
                                    ? "rgba(0, 168, 232, 0.35)"
                                    : hovered !== null
                                    ? `${methods[hovered].color}33`
                                    : "rgba(0, 168, 232, 0.12)",
                                filter: discHovered ? "blur(18px)" : "blur(10px)",
                            }}
                        />

                        {/* ===== Center Disc: "Tutoring Methods" with Animated Hover ===== */}
                        <div
                            onMouseEnter={() => {
                                setDiscHovered(true);
                                setHovered(null);
                            }}
                            onMouseLeave={() => setDiscHovered(false)}
                            className="group cursor-pointer absolute left-1/2 top-1/2 z-30 flex flex-col items-center justify-center rounded-full border-4 border-white bg-white select-none transition-all duration-500"
                            style={{
                                width: DISC_SIZE,
                                height: DISC_SIZE,
                                transform: discHovered
                                    ? "translate(-50%, -50%) scale(1.06)"
                                    : "translate(-50%, -50%) scale(1)",
                                boxShadow: discHovered
                                    ? "0 22px 55px -10px rgba(0, 168, 232, 0.42), 0 10px 25px -8px rgba(35, 44, 119, 0.32)"
                                    : "0 12px 45px -8px rgba(35,44,119,0.32)",
                                background: discHovered
                                    ? "radial-gradient(circle at 35% 30%, #ffffff 0%, #eef7fc 65%, #dceefa 100%)"
                                    : "radial-gradient(circle at 35% 30%, #ffffff 0%, #f3f8fc 65%, #e6f1f9 100%)",
                            }}
                        >
                            {/* Shimmer sweep animation */}
                            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
                                <span
                                    className={`absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-1000 ease-out ${
                                        discHovered ? "translate-x-full" : ""
                                    }`}
                                />
                            </div>

                            {/* Decorative inner circular ring */}
                            <div
                                className={`absolute inset-2.5 rounded-full border transition-all duration-500 ${
                                    discHovered
                                        ? "border-[#00A8E8] scale-95 rotate-45 border-dashed"
                                        : "border-[#00A8E8]/20 scale-100 rotate-0"
                                }`}
                            />

                            {/* Center Icon badge */}
                            <div
                                className={`relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#232C77] to-[#00A8E8] text-white shadow-md transition-all duration-500 ${
                                    discHovered
                                        ? "scale-110 -translate-y-1 shadow-lg shadow-[#00A8E8]/40 rotate-[-6deg]"
                                        : "scale-100 translate-y-0 shadow-[#00A8E8]/25 rotate-0"
                                }`}
                            >
                                <svg
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2.2}
                                >
                                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                </svg>
                            </div>

                            {/* Disc Text */}
                            <div className="relative mt-2 text-center leading-tight">
                                <span
                                    className={`block text-[11.5px] font-black transition-all duration-300 ${
                                        discHovered
                                            ? "tracking-[0.25em] text-[#1c2463]"
                                            : "tracking-[0.2em] text-[#232C77]"
                                    }`}
                                >
                                    TUTORING
                                </span>
                                <span
                                    className={`mt-0.5 block text-[13.5px] font-black transition-all duration-300 ${
                                        discHovered
                                            ? "tracking-[0.25em] text-[#0096d1] scale-105"
                                            : "tracking-[0.2em] text-[#00A8E8] scale-100"
                                    }`}
                                >
                                    METHODS
                                </span>
                            </div>

                            {/* Accent indicator line */}
                            <div
                                className={`relative mt-2 h-1 rounded-full bg-gradient-to-r from-[#232C77] via-[#00A8E8] to-[#232C77] transition-all duration-500 ${
                                    discHovered ? "w-12 shadow-sm shadow-[#00A8E8]/40" : "w-7"
                                }`}
                            />
                        </div>
                    </div>
                </Reveal>

                {/* ===== Mobile / Tablet: Card grid ===== */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
                    {methods.map((m, i) => (
                        <Reveal
                            key={m.num}
                            direction={i % 2 === 0 ? "left" : "right"}
                            delay={i * 100}
                            duration={800}
                        >
                            <div
                                className="group relative overflow-hidden rounded-2xl border-2 bg-white p-4 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                                style={{ borderColor: `${m.color}55` }}
                            >
                                <span
                                    className="absolute left-0 top-0 h-full w-1.5 transition-all duration-300 group-hover:w-2"
                                    style={{ backgroundColor: m.color }}
                                />
                                <div className="flex items-start gap-3 pl-2">
                                    <div
                                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm font-black text-white shadow-md transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
                                        style={{
                                            backgroundColor: m.color,
                                            boxShadow: `0 8px 20px -6px ${m.glow}`,
                                        }}
                                    >
                                        {m.icon}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2">
                                            <span
                                                className="text-[10px] font-black tracking-widest"
                                                style={{ color: m.color }}
                                            >
                                                {m.num}
                                            </span>
                                            <h4 className="text-sm font-black text-[#232C77]">
                                                {m.title}
                                            </h4>
                                        </div>
                                        <p className="mt-1 text-xs leading-relaxed text-slate-600">
                                            {m.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}