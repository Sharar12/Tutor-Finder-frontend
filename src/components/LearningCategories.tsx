"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import Reveal from "./Reveal";

type Pathway = {
    name: string;
    sub: string;
    badge?: string;
};

type Category = {
    id: string;
    filterKey: string;
    tag: string;
    tagBg: string;
    accent: string;
    glow: string;
    gradient: string;
    title: string;
    desc: string;
    stat: string;
    icon: ReactNode;
    items: Pathway[];
};

const categories: Category[] = [
    {
        id: "academic",
        filterKey: "academic",
        tag: "MOST POPULAR",
        tagBg: "bg-[#00A8E8]",
        accent: "#00A8E8",
        glow: "rgba(0,168,232,0.35)",
        gradient: "from-[#00A8E8] to-[#232C77]",
        title: "Academic Curriculums",
        desc: "Structured schooling and board syllabus support for every standard in Bangladesh.",
        stat: "8,500+ Active Tutors",
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        ),
        items: [
            { name: "Bangla Medium", sub: "NCTB Curriculum • Class 1-12", badge: "Popular" },
            { name: "English Version", sub: "National Curriculum in English", badge: "High Demand" },
            { name: "English Medium", sub: "Cambridge & Edexcel O/A Levels" },
            { name: "Madrasah Medium", sub: "Dakhil & Alim Specialized Stream" },
        ],
    },
    {
        id: "study-support",
        filterKey: "exam",
        tag: "HIGH SUCCESS RATE",
        tagBg: "bg-[#10B981]",
        accent: "#10B981",
        glow: "rgba(16,185,129,0.35)",
        gradient: "from-[#10B981] to-[#059669]",
        title: "Study & Exam Support",
        desc: "Intensive coaching and mentorship for critical competitive exams and test prep.",
        stat: "98% Target Score Rate",
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        items: [
            { name: "Admission Preparation", sub: "BUET, Medical, DU & IBA", badge: "Hot" },
            { name: "University Course Help", sub: "Engineering, BBA & Science Majors" },
            { name: "Job Exam Prep", sub: "BCS, Bank & Government Jobs" },
            { name: "Int'l Test Preparation", sub: "IELTS, TOEFL, SAT, GRE", badge: "Trending" },
        ],
    },
    {
        id: "skills-dev",
        filterKey: "skills",
        tag: "FUTURE READY",
        tagBg: "bg-[#7A5AF8]",
        accent: "#7A5AF8",
        glow: "rgba(122,90,248,0.35)",
        gradient: "from-[#7A5AF8] to-[#4F46E5]",
        title: "Skills & Development",
        desc: "Practical career skills, special-needs education, and personal capability growth.",
        stat: "100% Practical Sessions",
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
        items: [
            { name: "Professional Tech Skills", sub: "Python, Web Dev, Excel & AI Tools", badge: "Career" },
            { name: "Special Skills Coaching", sub: "Public Speaking, Mental Math, Debate" },
            { name: "Special Child Mentoring", sub: "Autism, ADHD & Inclusive Learning", badge: "Dedicated" },
            { name: "Creative & Design", sub: "UI/UX, Video Editing & 3D Art" },
        ],
    },
    {
        id: "arts-craft",
        filterKey: "arts",
        tag: "CREATIVE & FAITH",
        tagBg: "bg-[#F59E0B]",
        accent: "#F59E0B",
        glow: "rgba(245,158,11,0.35)",
        gradient: "from-[#F59E0B] to-[#F0501E]",
        title: "Arts, Language & Faith",
        desc: "Master foreign languages, Islamic learning, and cultural artistic expressions.",
        stat: "Flexible 1-on-1 Sessions",
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4 5 5 0 014-5h2.5a2.5 2.5 0 002.5-2.5V7a5 5 0 015-4 4 4 0 014 4v1a7 7 0 01-7 7H9a4 4 0 01-2 1z" />
            </svg>
        ),
        items: [
            { name: "Language Mastery", sub: "Spoken English, German, French", badge: "Global" },
            { name: "Quran & Arabic", sub: "Tajweed, Hifz & Islamic Studies", badge: "Faith" },
            { name: "Drawing & Fine Arts", sub: "Sketching, Watercolor & Acrylic" },
            { name: "Music & Instruments", sub: "Guitar, Keyboard & Vocal Practice" },
        ],
    },
];

export default function LearningCategories() {
    return (
        <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-[#f4f9fd] to-white py-16 md:py-24">
            {/* Highly Visible Animated Floating 3D Prisms & Diamonds */}
            <div
                className="pointer-events-none absolute left-[4%] top-24 flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-[#00A8E8] bg-white/80 text-xl shadow-xl shadow-[#00A8E8]/25 backdrop-blur-md"
                style={{ animation: "prismBob1 6s ease-in-out infinite" }}
            >
                📐
            </div>
            <div
                className="pointer-events-none absolute right-[5%] top-36 flex h-18 w-18 items-center justify-center rounded-3xl border-2 border-[#7A5AF8] bg-white/80 text-2xl shadow-xl shadow-[#7A5AF8]/25 backdrop-blur-md"
                style={{ animation: "prismBob2 7s ease-in-out infinite" }}
            >
                ⚡
            </div>
            <div
                className="pointer-events-none absolute left-[8%] bottom-28 flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-[#10B981] bg-white/80 text-lg shadow-xl shadow-[#10B981]/25 backdrop-blur-md"
                style={{ animation: "prismBob3 5.5s ease-in-out infinite" }}
            >
                🔬
            </div>
            <div
                className="pointer-events-none absolute right-[8%] bottom-36 flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-[#F59E0B] bg-white/80 text-xl shadow-xl shadow-[#F59E0B]/25 backdrop-blur-md"
                style={{ animation: "prismBob1 8s ease-in-out infinite reverse" }}
            >
                🎨
            </div>
            <div
                className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-10 flex h-12 w-12 items-center justify-center rounded-xl border-2 border-[#F0501E] bg-white/80 text-base shadow-lg shadow-[#F0501E]/20 backdrop-blur-md"
                style={{ animation: "prismBob2 6.5s ease-in-out infinite 1s" }}
            >
                💡
            </div>

            {/* Ambient Background Glows */}
            <div className="pointer-events-none absolute -left-40 top-1/4 h-80 w-80 rounded-full bg-[#00A8E8]/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-[#7A5AF8]/10 blur-3xl" />

            {/* Subtle Grid Accent */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, #232C77 1.5px, transparent 1.5px)",
                    backgroundSize: "24px 24px",
                }}
            />

            <div className="relative mx-auto max-w-7xl px-6">
                {/* ===== Heading & Header ===== */}
                <div className="flex flex-col items-center text-center">
                    <Reveal direction="down" duration={900}>
                        <div className="inline-flex items-center gap-2 rounded-full border border-[#00A8E8]/30 bg-white/80 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-[#00A8E8] shadow-sm backdrop-blur-md">
                            <span className="h-2 w-2 rounded-full bg-[#00A8E8] animate-ping" />
                            <span>Curated Pathways</span>
                            <span className="text-slate-300">•</span>
                            <span className="text-slate-500 font-bold">16+ Subjects</span>
                        </div>
                    </Reveal>

                    <Reveal direction="down" delay={150} duration={900}>
                        <h2 className="mt-4 text-3xl font-black tracking-tight text-[#232C77] md:text-5xl lg:text-[2.75rem]">
                            Our Learning{" "}
                            <span className="bg-gradient-to-r from-[#00A8E8] to-[#232C77] bg-clip-text text-transparent">
                                Categories
                            </span>
                        </h2>
                    </Reveal>

                    <Reveal direction="up" delay={250} duration={800}>
                        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
                            Explore comprehensive tuition options tailored to your curriculum, competitive exams, and personal passions.
                        </p>
                    </Reveal>
                </div>

                {/* ===== 4-Pillar Elevated Bento Grid ===== */}
                <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {categories.map((cat, idx) => (
                        <Reveal
                            key={cat.id}
                            direction="up"
                            delay={idx * 120}
                            duration={900}
                        >
                            <div
                                className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border bg-white/95 p-6 shadow-[0_15px_40px_-15px_rgba(35,44,119,0.12)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_-15px_rgba(35,44,119,0.22)]"
                                style={{ borderColor: `${cat.accent}35` }}
                            >
                                {/* Radial Glow Wash on Hover */}
                                <span
                                    className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25"
                                    style={{ backgroundColor: cat.accent }}
                                />

                                {/* Top Accent Bar */}
                                <span
                                    className="absolute left-6 right-6 top-0 h-1 rounded-b-full opacity-80 transition-all duration-500 group-hover:left-3 group-hover:right-3 group-hover:opacity-100"
                                    style={{ backgroundColor: cat.accent }}
                                />

                                {/* Card Header */}
                                <div className="flex items-start justify-between gap-3">
                                    <div
                                        className="flex h-13 w-13 items-center justify-center rounded-2xl text-white shadow-md transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
                                        style={{
                                            backgroundColor: cat.accent,
                                            boxShadow: `0 8px 20px -6px ${cat.glow}`,
                                        }}
                                    >
                                        {cat.icon}
                                    </div>
                                    <span
                                        className="rounded-full px-2.5 py-1 text-[9px] font-black uppercase tracking-wider text-white shadow-sm"
                                        style={{ backgroundColor: cat.accent }}
                                    >
                                        {cat.tag}
                                    </span>
                                </div>

                                {/* Title & Stat */}
                                <div className="mt-5">
                                    <h3 className="text-xl font-black text-[#232C77]">
                                        {cat.title}
                                    </h3>
                                    <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                                        {cat.desc}
                                    </p>
                                </div>

                                {/* Divider */}
                                <div className="my-5 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

                                {/* Pathway Items List */}
                                <ul className="flex flex-1 flex-col gap-2.5">
                                    {cat.items.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={`#find-tutor?category=${cat.id}`}
                                                className="group/item flex items-center justify-between rounded-xl border border-transparent bg-slate-50/80 p-2.5 transition-all duration-300 hover:border-slate-200 hover:bg-white hover:shadow-md hover:shadow-slate-100"
                                            >
                                                <div className="min-w-0 flex-1">
                                                    <div className="flex items-center gap-1.5">
                                                        <span
                                                            className="h-1.5 w-1.5 shrink-0 rounded-full transition-all duration-300 group-hover/item:scale-125"
                                                            style={{ backgroundColor: cat.accent }}
                                                        />
                                                        <span className="truncate text-xs font-black text-[#232C77] group-hover/item:text-[#00A8E8]">
                                                            {item.name}
                                                        </span>
                                                        {item.badge && (
                                                            <span className="rounded-full bg-slate-200/70 px-1.5 py-0.2 text-[8px] font-bold text-slate-600">
                                                                {item.badge}
                                                            </span>
                                                        )}
                                                    </div>
                                                    <span className="mt-0.5 block truncate pl-3 text-[10.5px] font-medium text-slate-500">
                                                        {item.sub}
                                                    </span>
                                                </div>
                                                <span className="text-xs text-slate-400 opacity-0 transition-all duration-300 group-hover/item:translate-x-0.5 group-hover/item:opacity-100">
                                                    →
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>

                                {/* Card Footer CTA */}
                                <div className="mt-6 border-t border-slate-100 pt-4">
                                    <Link
                                        href={`#category-${cat.id}`}
                                        className="group/link flex items-center justify-between text-xs font-black transition-colors duration-300"
                                        style={{ color: cat.accent }}
                                    >
                                        <span>Explore Tutors</span>
                                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 transition-all duration-300 group-hover/link:translate-x-1 group-hover/link:bg-[#232C77] group-hover/link:text-white">
                                            →
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* Popular Keywords Bar */}
                <div className="mt-12 flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-slate-200/70 bg-white/70 px-6 py-4 shadow-sm backdrop-blur-md">
                    <span className="text-xs font-black uppercase tracking-wider text-slate-400">
                        Popular Searches:
                    </span>
                    {[
                        "Class 9-10 Math",
                        "IELTS 7.5+ Band",
                        "Cambridge A-Level",
                        "Spoken English",
                        "Quran with Tajweed",
                        "Python & Web Dev",
                        "BUET Admission",
                    ].map((keyword) => (
                        <Link
                            key={keyword}
                            href="#find-tutor"
                            className="rounded-lg bg-slate-100/80 px-2.5 py-1 text-xs font-semibold text-slate-700 transition-all duration-200 hover:bg-[#00A8E8] hover:text-white"
                        >
                            {keyword}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}