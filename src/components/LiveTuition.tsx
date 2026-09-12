"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "./Reveal";

type TuitionJob = {
    id: string;
    city: string;
    title: string;
    location: string;
    schedule: string;
    salary: string;
    details: string;
    badge: string;
    badgeBg: string;
    timeAgo: string;
};

const tuitionJobs: TuitionJob[] = [
    {
        id: "job-1",
        city: "Dhaka",
        title: "Class 10 (Bangla Medium) - Physics & Higher Math",
        location: "Mirpur DOHS, Dhaka",
        schedule: "3 Days / Week (Evening)",
        salary: "৳8,500 / month",
        details: "Student preparing for upcoming SSC board exams. Focus on mechanics and geometry.",
        badge: "⚡ Urgent Match",
        badgeBg: "bg-[#ef4444]",
        timeAgo: "12 mins ago",
    },
    {
        id: "job-2",
        city: "Chottogram",
        title: "Class 8 (English Version) - All Core Subjects",
        location: "GEC Circle, Chottogram",
        schedule: "4 Days / Week",
        salary: "৳10,000 / month",
        details: "Female tutor preferred from CU or CMC. Emphasis on mathematics and science concepts.",
        badge: "🆕 Just Posted",
        badgeBg: "bg-[#10B981]",
        timeAgo: "35 mins ago",
    },
    {
        id: "job-3",
        city: "Dhaka",
        title: "A-Level (Edexcel) - Pure Math & Chemistry",
        location: "Uttara Sector 7, Dhaka",
        schedule: "3 Days / Week (Online or Home)",
        salary: "৳15,000 / month",
        details: "Experienced mentor familiar with recent Cambridge/Edexcel past paper solving techniques.",
        badge: "💎 Premium Job",
        badgeBg: "bg-[#7A5AF8]",
        timeAgo: "1 hour ago",
    },
    {
        id: "job-4",
        city: "Sylhet",
        title: "HSC 1st Year - ICT & Biology",
        location: "Zindabazar, Sylhet",
        schedule: "3 Days / Week",
        salary: "৳7,000 / month",
        details: "College student aiming for medical entrance. Patient tutor needed for board prep.",
        badge: "⚡ Quick Apply",
        badgeBg: "bg-[#00A8E8]",
        timeAgo: "2 hours ago",
    },
];

const cities = [
    { name: "All Cities", count: 85 },
    { name: "Dhaka", count: 38 },
    { name: "Chottogram", count: 16 },
    { name: "Sylhet", count: 11 },
    { name: "Rajshahi", count: 8 },
    { name: "Khulna", count: 7 },
    { name: "Barishal", count: 5 },
];

export default function LiveTuition() {
    const [selectedCity, setSelectedCity] = useState("All Cities");

    const filteredJobs =
        selectedCity === "All Cities"
            ? tuitionJobs
            : tuitionJobs.filter((j) => j.city.toLowerCase() === selectedCity.toLowerCase());

    return (
        <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-[#edf6fd] to-white py-16 md:py-24">
            {/* Elegant Slim Rotating Radar Sonar Screen (Slow & Hairline Thin) */}
            <div className="pointer-events-none absolute right-4 top-1/3 h-[420px] w-[420px] -translate-y-1/2 opacity-30 md:right-16">
                <div
                    className="relative h-full w-full rounded-full border border-[#00A8E8]/35 shadow-[0_0_15px_rgba(0,168,232,0.15)]"
                    style={{ animation: "sonarRotate 18s linear infinite" }}
                >
                    {/* Concentric rings */}
                    <div className="absolute inset-10 rounded-full border border-dashed border-[#00A8E8]/25" />
                    <div className="absolute inset-24 rounded-full border border-[#00A8E8]/20" />
                    <div className="absolute inset-36 rounded-full border border-[#00A8E8]/15" />

                    {/* Subtle Sonar Sweep Cone */}
                    <div
                        className="absolute inset-0 rounded-full"
                        style={{
                            background: "conic-gradient(from 0deg, rgba(16, 185, 129, 0.25) 0deg, rgba(0, 168, 232, 0.12) 40deg, transparent 70deg, transparent 360deg)",
                        }}
                    />
                </div>

                {/* Blinking Live Radar Targets */}
                <div className="absolute left-[30%] top-[40%] flex h-2.5 w-2.5 items-center justify-center">
                    <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-sm" />
                </div>
                <div className="absolute right-[35%] top-[25%] flex h-2.5 w-2.5 items-center justify-center">
                    <span className="absolute h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 shadow-sm" />
                </div>
            </div>



            {/* Ambient Background Glows */}
            <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#00A8E8]/12 blur-3xl" />
            <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#10B981]/12 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-6">
                {/* ===== Header Bar ===== */}
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-end">
                    <div>
                        <Reveal direction="down">
                            <div className="inline-flex items-center gap-2 rounded-full border border-[#ef4444]/30 bg-[#ef4444]/10 px-4 py-1 text-xs font-black uppercase tracking-wider text-[#ef4444]">
                                <span className="relative flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ef4444] opacity-75" />
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ef4444]" />
                                </span>
                                <span>Live Tuition Radar</span>
                                <span className="text-slate-300">•</span>
                                <span className="text-slate-600 font-bold">85+ Active Openings</span>
                            </div>
                        </Reveal>

                        <Reveal direction="left" delay={150}>
                            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#232C77] sm:text-4xl lg:text-[2.6rem]">
                                Urgent Tuition{" "}
                                <span className="bg-gradient-to-r from-[#00A8E8] to-[#232C77] bg-clip-text text-transparent">
                                    Requirements
                                </span>
                            </h2>
                        </Reveal>

                        <Reveal direction="up" delay={250}>
                            <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
                                Guardians are actively seeking verified tutors right now. Filter by city or post your own custom tutoring requirement.
                            </p>
                        </Reveal>
                    </div>

                    {/* Post Requirement CTA for Parents */}
                    <Reveal direction="right" delay={300}>
                        <div className="flex items-center gap-3">
                            <Link
                                href="#post-requirement"
                                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-[#232C77] to-[#1c2463] px-6 py-3.5 text-xs sm:text-sm font-black text-white shadow-lg shadow-[#232C77]/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#232C77]/40"
                            >
                                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                                <span>Post Your Tuition Need</span>
                                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                            </Link>
                        </div>
                    </Reveal>
                </div>

                {/* ===== Interactive City Filter Pills ===== */}
                <Reveal direction="up" delay={350}>
                    <div className="mt-8 flex flex-wrap items-center gap-2.5">
                        {cities.map((city) => {
                            const isSelected = selectedCity === city.name;
                            return (
                                <button
                                    key={city.name}
                                    onClick={() => setSelectedCity(city.name)}
                                    className={`group inline-flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs sm:text-sm font-bold transition-all duration-300 ${
                                        isSelected
                                            ? "bg-gradient-to-r from-[#00A8E8] to-[#0090d0] text-white shadow-md shadow-[#00A8E8]/30 scale-105"
                                            : "border border-slate-200/80 bg-white/90 text-slate-700 hover:border-[#00A8E8] hover:bg-white hover:text-[#232C77]"
                                    }`}
                                >
                                    <span>{city.name}</span>
                                    <span
                                        className={`rounded-full px-2 py-0.5 text-[10px] font-black tabular-nums transition-colors duration-300 ${
                                            isSelected
                                                ? "bg-white/25 text-white"
                                                : "bg-slate-100 text-slate-500 group-hover:bg-[#00A8E8]/15 group-hover:text-[#00A8E8]"
                                        }`}
                                    >
                                        {city.count}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </Reveal>

                {/* ===== Live Tuition Job Cards Grid ===== */}
                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {filteredJobs.slice(0, 3).map((job, idx) => (
                        <Reveal
                            key={job.id}
                            direction="up"
                            delay={idx * 120 + 400}
                            duration={800}
                        >
                            <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] border border-white/80 bg-white/90 p-6 shadow-[0_15px_40px_-15px_rgba(35,44,119,0.12)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-[#00A8E8]/40 hover:shadow-[0_25px_60px_-15px_rgba(35,44,119,0.22)]">
                                {/* Top Badge & Time */}
                                <div>
                                    <div className="flex items-center justify-between gap-3">
                                        <span
                                            className={`rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-wider text-white shadow-sm ${job.badgeBg}`}
                                        >
                                            {job.badge}
                                        </span>
                                        <span className="text-[11px] font-semibold text-slate-400">
                                            {job.timeAgo}
                                        </span>
                                    </div>

                                    {/* Job Title */}
                                    <h3 className="mt-4 text-base font-black leading-snug text-[#232C77] group-hover:text-[#00A8E8] transition-colors duration-300 sm:text-lg">
                                        {job.title}
                                    </h3>

                                    {/* Job Meta Specs */}
                                    <div className="mt-3 flex flex-col gap-1.5 text-xs text-slate-600">
                                        <div className="flex items-center gap-2">
                                            <svg className="h-4 w-4 shrink-0 text-[#00A8E8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <span className="font-semibold text-slate-700">{job.location}</span>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <svg className="h-4 w-4 shrink-0 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            <span>{job.schedule}</span>
                                        </div>
                                    </div>

                                    {/* Details snippet */}
                                    <p className="mt-3.5 text-xs leading-relaxed text-slate-500 line-clamp-2">
                                        {job.details}
                                    </p>
                                </div>

                                {/* Salary & Apply Row */}
                                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                                    <div>
                                        <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                            Offered Salary
                                        </span>
                                        <span className="text-sm sm:text-base font-black text-[#232C77]">
                                            {job.salary}
                                        </span>
                                    </div>

                                    <Link
                                        href="#apply-job"
                                        className="inline-flex items-center gap-1.5 rounded-xl bg-[#00A8E8]/10 px-4 py-2 text-xs font-black text-[#00A8E8] transition-all duration-300 group-hover:bg-[#00A8E8] group-hover:text-white"
                                    >
                                        <span>Apply Now</span>
                                        <span>→</span>
                                    </Link>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* ===== Bottom Full Directory Callout ===== */}
                <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-slate-200/80 bg-white/80 p-5 text-center shadow-sm backdrop-blur-md sm:flex-row sm:text-left">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#00A8E8]/15 text-[#00A8E8]">
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="text-sm font-black text-[#232C77]">
                                Are you a qualified teacher looking for tuition jobs?
                            </h4>
                            <p className="text-xs text-slate-500">
                                Over 85+ active tuition openings waiting for competent tutors right now.
                            </p>
                        </div>
                    </div>

                    <Link
                        href="#all-jobs"
                        className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-[#232C77] bg-white px-5 py-2.5 text-xs sm:text-sm font-bold text-[#232C77] transition-all duration-300 hover:bg-[#232C77] hover:text-white hover:shadow-md"
                    >
                        <span>Browse All 85+ Jobs</span>
                        <span>→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}