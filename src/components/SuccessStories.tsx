"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

type Story = {
    name: string;
    institution: string;
    uniShort: string;
    quote: string;
    earnings: string;
    rating: string;
    students: string;
    initial: string;
    accent: string;
    glow: string;
    tag: string;
    image?: string;
};

const stories: Story[] = [
    {
        name: "Anas Mahmud",
        institution: "ECE, Hajee Mohammad Danesh Science & Technology University (HSTU)",
        uniShort: "HSTU",
        quote:
            "Tutor Finder completely changed how I find tuitions. The verification process gives guardians instant trust, and I've maintained 4 steady batches with guaranteed on-time honorarium every month.",
        earnings: "৳ 28,000 / mo",
        rating: "4.98 ★",
        students: "18+ Guided",
        initial: "A",
        accent: "#00A8E8",
        glow: "rgba(0,168,232,0.4)",
        tag: "Science & Higher Math",
        image: "/avatar_anas.jpg",
    },
    {
        name: "Rakib Hasan",
        institution: "CSE, Bangladesh University of Engineering & Technology (BUET)",
        uniShort: "BUET",
        quote:
            "As an engineering student, flexible timing was my top priority. The platform matches me with students nearby in Dhanmondi & Mirpur. It lets me fund my education while helping HSC candidates crack university admissions.",
        earnings: "৳ 35,000 / mo",
        rating: "5.0 ★",
        students: "24+ Guided",
        initial: "R",
        accent: "#7A5AF8",
        glow: "rgba(122,90,248,0.4)",
        tag: "Engineering & Physics",
        image: "/avatar_rakib.jpg",
    },
    {
        name: "Nusrat Jahan",
        institution: "Department of English, University of Dhaka (DU)",
        uniShort: "Dhaka University",
        quote:
            "The professionalism of Tutor Finder is unparalleled in Bangladesh. Guardians value quality teaching, communication is transparent, and I was able to grow from a novice tutor into a trusted mentor.",
        earnings: "৳ 26,000 / mo",
        rating: "4.95 ★",
        students: "15+ Guided",
        initial: "N",
        accent: "#10B981",
        glow: "rgba(16,185,129,0.4)",
        tag: "English & Literature",
        image: "/avatar_nusrat.jpg",
    },
    {
        name: "Tanvir Ahmed",
        institution: "Department of Physics, University of Chittagong (CU)",
        uniShort: "Chittagong Univ.",
        quote:
            "From day one, the support team ensured my safety and timely payments. Within my first 2 weeks, I was matched with 3 students who matched my exact subject specialty in Chittagong city.",
        earnings: "৳ 24,500 / mo",
        rating: "4.92 ★",
        students: "12+ Guided",
        initial: "T",
        accent: "#F0501E",
        glow: "rgba(240,80,30,0.4)",
        tag: "Physics & General Science",
        image: "/avatar_tanvir.jpg",
    },
    {
        name: "Farhana Akter",
        institution: "Applied Mathematics, Jahangirnagar University (JU)",
        uniShort: "Jahangirnagar Univ.",
        quote:
            "Teaching students who are eager to learn is deeply fulfilling. The automated SMS alerts whenever a new job opens in Uttara save hours of searching. Highly recommended for every university student!",
        earnings: "৳ 31,000 / mo",
        rating: "4.97 ★",
        students: "20+ Guided",
        initial: "F",
        accent: "#00A8E8",
        glow: "rgba(0,168,232,0.4)",
        tag: "Mathematics & ICT",
        image: "/avatar_farhana.jpg",
    },
];

export default function SuccessStories() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(1);
    const [isPaused, setIsPaused] = useState(false);
    const touchStartX = useRef<number | null>(null);

    // Responsive visible stories count (1 on mobile, 2 on tablet & desktop in a single row)
    useEffect(() => {
        const updateVisible = () => {
            if (window.innerWidth >= 768) {
                setVisibleCount(2);
            } else {
                setVisibleCount(1);
            }
        };
        updateVisible();
        window.addEventListener("resize", updateVisible);
        return () => window.removeEventListener("resize", updateVisible);
    }, []);

    const maxIndex = Math.max(0, stories.length - visibleCount);

    // Keep currentIndex within valid bounds if window resized
    useEffect(() => {
        if (currentIndex > maxIndex) {
            setCurrentIndex(maxIndex);
        }
    }, [maxIndex, currentIndex]);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, [maxIndex]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    }, [maxIndex]);

    // Auto-slide every 5 seconds (5000ms)
    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [isPaused, nextSlide]);

    // Touch swipe handlers
    const handleTouchStart = (e: React.TouchEvent) => {
        setIsPaused(true);
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        setIsPaused(false);
        if (touchStartX.current === null) return;
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX.current - touchEndX;
        if (diff > 45) {
            nextSlide();
        } else if (diff < -45) {
            prevSlide();
        }
        touchStartX.current = null;
    };

    return (
        <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#ebf5fe] via-[#dfedf9] to-[#ebf5fe] py-16 md:py-24">
            {/* High-Visibility Twinkling Constellation Starfield & Shooting Star */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
                {/* Shooting Star Streak */}
                <div
                    className="absolute -top-10 left-[15%] flex items-center"
                    style={{ animation: "shootingStarStreak 4.5s cubic-bezier(0.25, 1, 0.5, 1) infinite 1.2s" }}
                >
                    <div className="h-[2px] w-40 -rotate-[24deg] bg-gradient-to-r from-transparent via-[#00D4FF] to-white shadow-[0_0_12px_#00D4FF]" />
                    <div className="h-2 w-2 rounded-full bg-white shadow-[0_0_10px_#fff]" />
                </div>

                {/* Star 1: Amber Gem Star */}
                <div
                    className="absolute left-[8%] top-16 text-2xl text-amber-400 drop-shadow-[0_0_10px_rgba(245,158,11,0.8)]"
                    style={{ animation: "starGlowFlash 2.2s ease-in-out infinite" }}
                >
                    ✦
                </div>

                {/* Star 2: Cyan Gem Star */}
                <div
                    className="absolute left-[26%] top-44 text-xl text-[#00A8E8] drop-shadow-[0_0_10px_rgba(0,168,232,0.8)]"
                    style={{ animation: "starGlowFlash 3s ease-in-out infinite 0.7s" }}
                >
                    ✦
                </div>

                {/* Star 3: Violet Gem Star */}
                <div
                    className="absolute left-[48%] top-14 text-2xl text-[#7A5AF8] drop-shadow-[0_0_10px_rgba(122,90,248,0.8)]"
                    style={{ animation: "starGlowFlash 2.6s ease-in-out infinite 1.4s" }}
                >
                    ✦
                </div>

                {/* Star 4: Emerald Gem Star */}
                <div
                    className="absolute right-[28%] top-28 text-xl text-emerald-500 drop-shadow-[0_0_10px_rgba(16,185,129,0.8)]"
                    style={{ animation: "starGlowFlash 2.4s ease-in-out infinite 0.4s" }}
                >
                    ✦
                </div>

                {/* Star 5: Brilliant White/Gold Star */}
                <div
                    className="absolute right-[10%] top-20 text-3xl text-amber-300 drop-shadow-[0_0_14px_rgba(251,191,36,0.9)]"
                    style={{ animation: "starGlowFlash 3.2s ease-in-out infinite 1.8s" }}
                >
                    ★
                </div>

                {/* Star 6: Bottom Left Violet Star */}
                <div
                    className="absolute left-[14%] bottom-24 text-xl text-[#7A5AF8] drop-shadow-[0_0_10px_rgba(122,90,248,0.7)]"
                    style={{ animation: "starGlowFlash 2.8s ease-in-out infinite 1.1s" }}
                >
                    ✦
                </div>

                {/* Star 7: Bottom Right Cyan Star */}
                <div
                    className="absolute right-[15%] bottom-28 text-2xl text-[#00D4FF] drop-shadow-[0_0_12px_rgba(0,212,255,0.8)]"
                    style={{ animation: "starGlowFlash 2.5s ease-in-out infinite 2s" }}
                >
                    ✦
                </div>

                {/* Constellation Connecting Vector Lines */}
                <svg className="absolute inset-0 h-full w-full opacity-35" xmlns="http://www.w3.org/2000/svg">
                    <line x1="8%" y1="70px" x2="26%" y2="180px" stroke="#00A8E8" strokeWidth="1.5" strokeDasharray="6 6" />
                    <line x1="48%" y1="60px" x2="72%" y2="115px" stroke="#7A5AF8" strokeWidth="1.5" strokeDasharray="6 6" />
                    <line x1="72%" y1="115px" x2="90%" y2="85px" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="6 6" />
                </svg>
            </div>

            {/* Background Accents */}
            <div className="pointer-events-none absolute right-12 top-20 h-px w-40 rotate-[35deg] bg-[#1E2772]/30 md:w-56" />

            <div
                className="pointer-events-none absolute left-6 top-8 h-20 w-28 opacity-25"
                style={{
                    backgroundImage: "radial-gradient(circle, #1E2772 1.5px, transparent 1.5px)",
                    backgroundSize: "14px 14px",
                }}
            />
            <div
                className="pointer-events-none absolute bottom-8 right-6 h-20 w-28 opacity-25"
                style={{
                    backgroundImage: "radial-gradient(circle, #00A8E8 1.5px, transparent 1.5px)",
                    backgroundSize: "14px 14px",
                }}
            />

            <div className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-[#00A8E8]/15 blur-3xl" />
            <div className="pointer-events-none absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-[#7A5AF8]/15 blur-3xl" />

            <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* ===== Heading ===== */}
                <div className="flex flex-col items-center text-center">
                    <Reveal direction="down" duration={900}>
                        <div className="inline-flex items-center gap-2 rounded-full border border-[#00A8E8]/30 bg-white/90 px-4 py-1.5 text-xs font-bold text-[#1E2772] shadow-sm backdrop-blur-md">
                            <span className="text-amber-500">★</span>
                            <span>TUTOR ACHIEVEMENTS &amp; TESTIMONIALS</span>
                            <span className="text-slate-300">•</span>
                            <span className="text-emerald-600 font-extrabold">12,500+ ACTIVE TUTORS</span>
                        </div>
                    </Reveal>

                    <Reveal direction="down" delay={150}>
                        <h2 className="mt-4 text-3xl font-black tracking-tight text-[#141B4D] md:text-4xl lg:text-[2.6rem]">
                            Success Stories From{" "}
                            <span className="bg-gradient-to-r from-[#00A8E8] via-[#0284C7] to-[#1E2772] bg-clip-text text-transparent">
                                Tutors
                            </span>
                        </h2>
                    </Reveal>

                    <Reveal direction="up" delay={250}>
                        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-700 md:text-base">
                            Be an Expert Tutor, Begin to Earn. Hear how top university students &amp; experienced educators build rewarding, flexible tutoring careers.
                        </p>
                    </Reveal>
                </div>

                {/* ===== Single Row Auto-Sliding Carousel ===== */}
                <Reveal direction="up" delay={350} duration={900}>
                    <div
                        className="relative mt-16"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                    >
                        {/* Slide Viewport with top padding for avatar overlay */}
                        <div className="overflow-hidden px-1 pt-12 pb-6">
                            <div
                                className="flex items-stretch transition-transform duration-700 ease-out"
                                style={{
                                    transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
                                }}
                            >
                                {stories.map((story) => (
                                    <div
                                        key={story.name + story.uniShort}
                                        className="flex-shrink-0 px-3 md:px-4"
                                        style={{ width: `${100 / visibleCount}%` }}
                                    >
                                        <StoryCard story={story} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            onClick={prevSlide}
                            aria-label="Previous story"
                            className="absolute -left-3.5 top-1/2 -translate-y-1/2 z-20 hidden sm:flex h-11 w-11 items-center justify-center rounded-full border border-white/90 bg-white/95 text-[#1E2772] shadow-lg shadow-[#1E2772]/15 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-[#00A8E8] hover:bg-[#00A8E8] hover:text-white"
                        >
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button
                            onClick={nextSlide}
                            aria-label="Next story"
                            className="absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 hidden sm:flex h-11 w-11 items-center justify-center rounded-full border border-white/90 bg-white/95 text-[#1E2772] shadow-lg shadow-[#1E2772]/15 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-[#00A8E8] hover:bg-[#00A8E8] hover:text-white"
                        >
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Pagination Indicator & Controls */}
                    <div className="mt-6 flex flex-col items-center justify-center gap-3">
                        <div className="flex items-center gap-2">
                            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentIndex(i)}
                                    aria-label={`Go to slide ${i + 1}`}
                                    className={`h-2 rounded-full transition-all duration-500 ${
                                        currentIndex === i
                                            ? "w-8 bg-gradient-to-r from-[#00A8E8] to-[#1E2772]"
                                            : "w-2 bg-[#1E2772]/20 hover:bg-[#1E2772]/40"
                                    }`}
                                />
                            ))}
                        </div>

                        <div className="flex items-center gap-2 text-[11px] font-medium text-slate-500">
                            <span>Auto-sliding every 5s • Hover to pause</span>
                        </div>
                    </div>

                    {/* Section Bottom CTA Button */}
                    <div className="mt-10 flex justify-center">
                        <Link
                            href="#how-it-works-tutors"
                            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#00A8E8] via-[#0284C7] to-[#1E2772] px-8 py-3.5 text-sm font-black text-white shadow-lg shadow-[#00A8E8]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#00A8E8]/50 md:px-10 md:py-4 md:text-base"
                        >
                            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                            <span className="relative">Become a Tutor Today</span>
                            <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-xs transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </Link>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

/* ================= Story Card ================= */
function StoryCard({ story }: { story: Story }) {
    return (
        <div className="group relative flex h-full flex-col">
            {/* Overlapping Avatar Container */}
            <div className="relative z-20 flex justify-center">
                <div className="relative -mb-10">
                    {/* Glowing Back Halo */}
                    <div
                        className="absolute -inset-2 rounded-full opacity-40 blur-lg transition-opacity duration-500 group-hover:opacity-80"
                        style={{ backgroundColor: story.glow }}
                    />

                    {/* Gradient Conic Ring */}
                    <div
                        className="absolute -inset-1 rounded-full"
                        style={{
                            background: `conic-gradient(from 0deg, ${story.accent}, #1E2772, ${story.accent})`,
                        }}
                    />

                    {/* Avatar Image */}
                    <div className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-gradient-to-br from-[#1E2772] to-[#00A8E8] text-xl font-black text-white shadow-[0_12px_30px_-8px_rgba(20,27,77,0.35)] transition-transform duration-500 group-hover:scale-105 md:h-24 md:w-24 md:text-2xl">
                        {story.image ? (
                            <Image
                                src={story.image}
                                alt={story.name}
                                fill
                                className="object-cover"
                                sizes="96px"
                            />
                        ) : (
                            story.initial
                        )}
                    </div>

                    {/* Subject Specialty Tag */}
                    <span
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3 py-0.5 text-[9px] font-black uppercase tracking-wider text-white shadow-md transition-transform duration-500 group-hover:-translate-y-0.5 md:text-[10px]"
                        style={{ backgroundColor: story.accent }}
                    >
                        {story.tag}
                    </span>
                </div>
            </div>

            {/* Main Card Content */}
            <div
                className="relative flex flex-1 flex-col overflow-hidden rounded-3xl border border-white/80 bg-white/90 px-6 pb-6 pt-14 shadow-[0_12px_35px_-12px_rgba(20,27,77,0.15)] backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-[0_25px_50px_-12px_rgba(20,27,77,0.25)] md:px-7 md:pb-7 md:pt-16"
            >
                {/* Top Accent Strip */}
                <span
                    className="absolute left-8 right-8 top-0 h-1 rounded-b-full opacity-70 transition-all duration-500 group-hover:left-4 group-hover:right-4 group-hover:opacity-100"
                    style={{ backgroundColor: story.accent }}
                />

                {/* Name and University */}
                <div className="text-center">
                    <h3 className="text-lg font-black text-[#1E2772] md:text-xl">
                        {story.name}
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-slate-500">
                        {story.institution}
                    </p>
                </div>

                {/* Tutor Performance Metrics Ribbon */}
                <div className="mt-4 grid grid-cols-3 gap-2 rounded-2xl border border-slate-100 bg-slate-50/90 p-2.5 text-center">
                    <div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                            Earnings
                        </div>
                        <div className="text-xs font-black text-emerald-600 sm:text-sm">
                            {story.earnings}
                        </div>
                    </div>
                    <div className="border-x border-slate-200">
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                            Rating
                        </div>
                        <div className="text-xs font-black text-amber-500 sm:text-sm">
                            {story.rating}
                        </div>
                    </div>
                    <div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                            Students
                        </div>
                        <div className="text-xs font-black text-[#1E2772] sm:text-sm">
                            {story.students}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-4 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

                {/* Quote */}
                <div className="relative flex-1 text-center">
                    <span
                        className="mr-1 text-2xl font-black leading-none align-top"
                        style={{ color: `${story.accent}66` }}
                    >
                        &ldquo;
                    </span>
                    <p className="inline text-xs leading-relaxed text-slate-600 sm:text-[13px] md:text-sm">
                        {story.quote}
                    </p>
                    <span
                        className="ml-1 text-2xl font-black leading-none align-bottom"
                        style={{ color: `${story.accent}66` }}
                    >
                        &rdquo;
                    </span>
                </div>

                {/* Hover Corner Glow */}
                <span
                    className="pointer-events-none absolute -bottom-16 -right-16 h-36 w-36 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-50"
                    style={{ backgroundColor: story.glow }}
                />
            </div>
        </div>
    );
}