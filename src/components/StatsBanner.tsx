"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Reveal from "./Reveal";

type Stat = {
    icon: ReactNode;
    label: string;
    sublabel: string;
    value: number;
    suffix: string;
    decimals?: number;
    badge: string;
    accent: string;
    glow: string;
};

const stats: Stat[] = [
    {
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        label: "Live Tuitions",
        sublabel: "Active requirements across BD",
        value: 1850,
        suffix: "+",
        badge: "⚡ Urgent Matches",
        accent: "#00D4FF",
        glow: "rgba(0,212,255,0.45)",
    },
    {
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
        ),
        label: "Verified Tutors",
        sublabel: "From BUET, Medical & Top Unis",
        value: 12500,
        suffix: "+",
        badge: "✓ 100% Verified",
        accent: "#10B981",
        glow: "rgba(16,185,129,0.45)",
    },
    {
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        label: "Guardians & Students",
        sublabel: "Benefiting from our network",
        value: 28400,
        suffix: "+",
        badge: "★ 98% Success",
        accent: "#7A5AF8",
        glow: "rgba(122,90,248,0.45)",
    },
    {
        icon: (
            <svg className="h-6 w-6 fill-[#FBBF24]" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ),
        label: "Tutor Rating",
        sublabel: "From 15,000+ reviews",
        value: 4.9,
        suffix: " / 5",
        decimals: 1,
        badge: "5-Star Excellence",
        accent: "#FBBF24",
        glow: "rgba(251,191,36,0.45)",
    },
];

function useCountUp(target: number, duration = 1600, decimals = 0) {
    const [value, setValue] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const started = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    const start = performance.now();
                    const tick = (now: number) => {
                        const p = Math.min((now - start) / duration, 1);
                        const eased = 1 - Math.pow(1 - p, 3);
                        setValue(Number((target * eased).toFixed(decimals)));
                        if (p < 1) requestAnimationFrame(tick);
                    };
                    requestAnimationFrame(tick);
                }
            },
            { threshold: 0.2 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [target, duration, decimals]);

    return { value, ref };
}

function StatCard({ stat }: { stat: Stat }) {
    const { value, ref } = useCountUp(stat.value, 1600, stat.decimals ?? 0);

    const formattedValue = stat.decimals
        ? value.toFixed(stat.decimals)
        : Math.round(value).toLocaleString();

    return (
        <div
            ref={ref}
            className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-white/[0.08] p-6 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-white/30 hover:bg-white/[0.14] hover:shadow-[0_20px_50px_-10px_rgba(0,168,232,0.35)]"
        >
            {/* Ambient inner glow on hover */}
            <span
                className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40"
                style={{ backgroundColor: stat.accent }}
            />

            {/* Top row: Icon tile & Mini-badge */}
            <div className="relative flex items-center justify-between gap-3">
                <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-lg transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
                    style={{
                        backgroundColor: stat.accent,
                        boxShadow: `0 8px 20px -4px ${stat.glow}`,
                    }}
                >
                    {stat.icon}
                </div>

                <span
                    className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-white backdrop-blur-md transition-all duration-300 group-hover:bg-white/20"
                >
                    {stat.badge}
                </span>
            </div>

            {/* Middle row: Large Metric */}
            <div className="relative mt-6">
                <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black tracking-tight text-white tabular-nums sm:text-4xl lg:text-[2.6rem]">
                        {formattedValue}
                    </span>
                    <span
                        className="text-xl font-extrabold"
                        style={{ color: stat.accent }}
                    >
                        {stat.suffix}
                    </span>
                </div>

                <h3 className="mt-1 text-base font-extrabold text-white">
                    {stat.label}
                </h3>
            </div>

            {/* Bottom row: Sublabel & Accent bar */}
            <div className="relative mt-4 border-t border-white/10 pt-3">
                <p className="text-xs font-medium leading-relaxed text-white/75">
                    {stat.sublabel}
                </p>
            </div>
        </div>
    );
}

export default function StatsBanner() {
    return (
        <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#090f33] via-[#101e5e] to-[#005282] py-14 md:py-20">
            {/* Background Looping Video with 10% Opacity */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-10"
            >
                <source src="/cta_bg_video.mp4" type="video/mp4" />
                <source src="/create_a_loop_bg_video_with_th.mp4" type="video/mp4" />
            </video>

            {/* Diagonal background accent streaks */}
            <div className="pointer-events-none absolute inset-0 opacity-20">
                <div className="absolute -left-20 top-4 h-px w-64 rotate-[35deg] bg-white/60" />
                <div className="absolute -left-10 top-16 h-px w-96 rotate-[35deg] bg-white/40" />
                <div className="absolute -right-16 bottom-6 h-px w-64 -rotate-[35deg] bg-white/60" />
            </div>

            {/* Soft Ambient Glows */}
            <div className="pointer-events-none absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#00A8E8]/25 blur-3xl" />
            <div className="pointer-events-none absolute -right-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#00D4FF]/20 blur-3xl" />

            {/* Subtle Dot Grid */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.06]"
                style={{
                    backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                    backgroundSize: "22px 22px",
                }}
            />

            <div className="relative mx-auto max-w-7xl px-6">
                {/* Header Sub-bar */}
                <div className="mb-10 flex flex-col items-center justify-between gap-4 border-b border-white/10 pb-6 text-center sm:flex-row sm:text-left">
                    <div>
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-[#00D4FF]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#00D4FF] animate-ping" />
                            Platform Impact &amp; Reach
                        </span>
                        <h2 className="mt-2 text-xl font-black text-white sm:text-2xl">
                            Empowering Learning Nationwide
                        </h2>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-white/70">
                        <span className="flex h-2 w-2 rounded-full bg-[#10B981]" />
                        <span>Real-time platform statistics</span>
                    </div>
                </div>

                {/* 4 Executive Stat Cards */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((s, i) => (
                        <Reveal
                            key={s.label}
                            direction="up"
                            delay={i * 120}
                            duration={800}
                        >
                            <StatCard stat={s} />
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}