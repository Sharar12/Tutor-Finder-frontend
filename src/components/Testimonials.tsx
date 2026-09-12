"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

type Testimonial = {
    quote: string;
    headline: string;
    name: string;
    role: "Guardian" | "Student";
    subject: string;
    location: string;
    rating: number;
    initial: string;
    accent: string;
    glow: string;
    image?: string;
};

const testimonials: Testimonial[] = [
    {
        headline: "Math grades jumped from C to A+",
        quote:
            "Our son was struggling with Higher Math in Class 10. The BUET tutor from Tutor Finder was extremely patient, broke down complex concepts, and brought his confidence back. The verification process gave us total peace of mind.",
        name: "Anas Mahmud",
        role: "Guardian",
        subject: "Class 10 • Higher Math",
        location: "Moghbazar, Dhaka",
        rating: 5,
        initial: "A",
        accent: "#00A8E8",
        glow: "rgba(0,168,232,0.35)",
        image: "/avatar_anas.jpg",
    },
    {
        headline: "Free demo class sealed the deal",
        quote:
            "The demo class option is brilliant. We could assess the tutor's teaching style before committing. She was punctual, thorough with English Version syllabus, and our daughter loves her sessions.",
        name: "Farhana Akter",
        role: "Guardian",
        subject: "Class 8 (EV) • Science",
        location: "Sector 4, Uttara, Dhaka",
        rating: 5,
        initial: "F",
        accent: "#10B981",
        glow: "rgba(16,185,129,0.35)",
        image: "/avatar_farhana.jpg",
    },
    {
        headline: "Achieved GPA 5.00 in SSC Exam",
        quote:
            "I found a physics tutor within 24 hours. The chapter-by-chapter problem solving and weekly model tests made all the difference. Tutor Finder is the most reliable academic platform in Bangladesh.",
        name: "Rakib Hasan",
        role: "Student",
        subject: "SSC 2025 • Physics & Chem",
        location: "Nasirabad, Chattogram",
        rating: 5,
        initial: "R",
        accent: "#F0501E",
        glow: "rgba(240,80,30,0.35)",
        image: "/avatar_rakib.jpg",
    },
    {
        headline: "Professional, secure & fast matching",
        quote:
            "From submitting our requirement to having shortlisted tutor CVs took less than 20 minutes. Both tutor credentials and varsity ID were authenticated by the team. Truly exemplary service!",
        name: "Nusrat Jahan",
        role: "Guardian",
        subject: "O-Level Edexcel • Chemistry",
        location: "Kumarpara, Sylhet",
        rating: 5,
        initial: "N",
        accent: "#7A5AF8",
        glow: "rgba(122,90,248,0.35)",
        image: "/avatar_nusrat.jpg",
    },
    {
        headline: "Exceptional Medical Prep guidance",
        quote:
            "We were looking for a Dhaka Medical College student to mentor our son for medical admission. The matched tutor was inspiring, structured, and provided invaluable past paper insights.",
        name: "Mahinur Rahman",
        role: "Guardian",
        subject: "Medical Admission • Biology",
        location: "Dhanmondi, Dhaka",
        rating: 5,
        initial: "M",
        accent: "#00A8E8",
        glow: "rgba(0,168,232,0.35)",
        image: "/avatar_tanvir.jpg",
    },
    {
        headline: "Personalized attention made learning fun",
        quote:
            "My tutor customized every lesson according to my weak areas in ICT and General Math. I never felt pressured, and my term test scores improved drastically in just 2 months.",
        name: "Sadia Afreen",
        role: "Student",
        subject: "Class 9 • ICT & General Math",
        location: "Mirpur DOHS, Dhaka",
        rating: 5,
        initial: "S",
        accent: "#10B981",
        glow: "rgba(16,185,129,0.35)",
        image: "/avatar_farhana.jpg",
    },
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(1);
    const [isPaused, setIsPaused] = useState(false);
    const touchStartX = useRef<number | null>(null);

    // Responsive visible cards count (1 on mobile, 2 on tablet, 3 on desktop)
    useEffect(() => {
        const updateVisible = () => {
            if (window.innerWidth >= 1024) {
                setVisibleCount(3);
            } else if (window.innerWidth >= 640) {
                setVisibleCount(2);
            } else {
                setVisibleCount(1);
            }
        };
        updateVisible();
        window.addEventListener("resize", updateVisible);
        return () => window.removeEventListener("resize", updateVisible);
    }, []);

    const maxIndex = Math.max(0, testimonials.length - visibleCount);

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

    // Auto-slide every 5 seconds
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
        <section id="reviews" className="relative w-full overflow-hidden bg-gradient-to-b from-white via-[#f4f9fd] to-white py-16 md:py-24">
            {/* Background Looping Video with 25% Opacity & Smooth Faded Bottom Edge */}
            <div
                className="pointer-events-none absolute inset-0 overflow-hidden"
                style={{
                    maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 72%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 72%, transparent 100%)",
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

            {/* Smooth Top & Deep Bottom Edge Gradient Fades */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white via-white/70 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-white via-white/85 to-transparent" />

            {/* Background Ambient Glows & Dot Patterns */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-[#00A8E8]/10 blur-3xl" />
                <div className="absolute -right-32 top-1/2 h-80 w-80 rounded-full bg-[#7A5AF8]/10 blur-3xl" />
            </div>

            <div
                className="pointer-events-none absolute left-6 top-10 h-24 w-32 opacity-35 md:left-10 md:top-16 md:h-32 md:w-40"
                style={{
                    backgroundImage: "radial-gradient(circle, #94a3b8 1.5px, transparent 1.5px)",
                    backgroundSize: "14px 14px",
                }}
            />
            <div
                className="pointer-events-none absolute right-6 top-10 h-24 w-32 opacity-35 md:right-10 md:top-16 md:h-32 md:w-40"
                style={{
                    backgroundImage: "radial-gradient(circle, #00A8E8 1.5px, transparent 1.5px)",
                    backgroundSize: "14px 14px",
                }}
            />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* ===== Heading ===== */}
                <div className="flex flex-col items-center text-center">
                    <Reveal direction="down" duration={900}>
                        <div className="inline-flex items-center gap-2 rounded-full border border-[#00A8E8]/30 bg-white/90 px-4 py-1.5 text-xs font-bold text-[#1E2772] shadow-sm backdrop-blur-md">
                            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span>VERIFIED GUARDIAN &amp; STUDENT FEEDBACK</span>
                            <span className="text-slate-300">•</span>
                            <span className="text-amber-500 font-extrabold">★ 4.9/5 RATING</span>
                        </div>
                    </Reveal>

                    <Reveal direction="down" delay={150}>
                        <h2 className="mt-4 text-3xl font-black tracking-tight text-[#141B4D] md:text-4xl lg:text-[2.6rem]">
                            Appreciation From{" "}
                            <span className="bg-gradient-to-r from-[#00A8E8] via-[#0284C7] to-[#1E2772] bg-clip-text text-transparent">
                                Guardians &amp; Students
                            </span>
                        </h2>
                    </Reveal>

                    <Reveal direction="up" delay={250}>
                        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
                            Real stories from families across Bangladesh who experienced remarkable grade improvements and seamless tutor matching with Tutor Finder.
                        </p>
                    </Reveal>

                    {/* Trust Micro-Metrics */}
                    <Reveal direction="fade" delay={350}>
                        <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-500">
                            <span className="flex items-center gap-1.5">
                                <span className="text-emerald-500 font-bold">✓</span>
                                <span>8,500+ Verified Reviews</span>
                            </span>
                            <span className="text-slate-300">•</span>
                            <span className="flex items-center gap-1.5">
                                <span className="text-emerald-500 font-bold">✓</span>
                                <span>98% Grade Improvement Rate</span>
                            </span>
                            <span className="text-slate-300">•</span>
                            <span className="flex items-center gap-1.5">
                                <span className="text-emerald-500 font-bold">✓</span>
                                <span>100% Free Demo Class</span>
                            </span>
                        </div>
                    </Reveal>
                </div>

                {/* ===== Single Row Auto-Sliding Carousel ===== */}
                <Reveal direction="up" delay={400} duration={900}>
                    <div
                        className="relative mt-12 md:mt-16"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                    >
                        {/* Slide Viewport */}
                        <div className="overflow-hidden px-1 py-4">
                            <div
                                className="flex items-stretch transition-transform duration-700 ease-out"
                                style={{
                                    transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
                                }}
                            >
                                {testimonials.map((t) => (
                                    <div
                                        key={t.name + t.subject}
                                        className="flex-shrink-0 px-3"
                                        style={{ width: `${100 / visibleCount}%` }}
                                    >
                                        <TestimonialCard t={t} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            onClick={prevSlide}
                            aria-label="Previous testimonial"
                            className="absolute -left-3.5 top-1/2 -translate-y-1/2 z-20 hidden md:flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/80 bg-white/95 text-[#1E2772] shadow-lg shadow-[#1E2772]/10 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-[#00A8E8] hover:bg-[#00A8E8] hover:text-white"
                        >
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button
                            onClick={nextSlide}
                            aria-label="Next testimonial"
                            className="absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 hidden md:flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/80 bg-white/95 text-[#1E2772] shadow-lg shadow-[#1E2772]/10 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-[#00A8E8] hover:bg-[#00A8E8] hover:text-white"
                        >
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Pagination & Status Bar */}
                    <div className="mt-8 flex flex-col items-center justify-center gap-3">
                        <div className="flex items-center gap-2">
                            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentIndex(i)}
                                    aria-label={`Go to slide ${i + 1}`}
                                    className={`h-2 rounded-full transition-all duration-500 ${
                                        currentIndex === i
                                            ? "w-8 bg-gradient-to-r from-[#00A8E8] to-[#1E2772]"
                                            : "w-2 bg-slate-300 hover:bg-slate-400"
                                    }`}
                                />
                            ))}
                        </div>

                        <div className="flex items-center gap-3 text-[11px] font-medium text-slate-400">
                            <span>Auto-sliding every 5s</span>
                            <span>•</span>
                            <button
                                onClick={() => setIsPaused(!isPaused)}
                                className="text-slate-500 underline hover:text-[#00A8E8]"
                            >
                                {isPaused ? "▶ Resume" : "⏸ Pause on Hover"}
                            </button>
                        </div>
                    </div>

                    {/* Section Bottom Action */}
                    <div className="mt-10 flex justify-center">
                        <Link
                            href="#find-tutor"
                            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-[#00A8E8] via-[#0284C7] to-[#1E2772] px-8 py-3.5 text-sm font-black text-white shadow-lg shadow-[#00A8E8]/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#00A8E8]/40 md:text-base"
                        >
                            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                            <span className="relative">Hire a Verified Tutor Today</span>
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

/* ================= Testimonial Card ================= */
function TestimonialCard({ t }: { t: Testimonial }) {
    return (
        <div
            className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/80 bg-white/80 p-6 shadow-[0_12px_35px_-12px_rgba(20,27,77,0.12)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_25px_50px_-12px_rgba(20,27,77,0.22)]"
        >
            {/* Top Accent Strip */}
            <span
                className="absolute left-6 right-6 top-0 h-1 rounded-b-full opacity-70 transition-all duration-500 group-hover:left-3 group-hover:right-3 group-hover:opacity-100"
                style={{ backgroundColor: t.accent }}
            />

            {/* Header: Rating & Subject Pill */}
            <div className="mb-4 flex items-center justify-between gap-2">
                <div className="flex gap-0.5 text-sm text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className="drop-shadow-sm">★</span>
                    ))}
                </div>

                <span
                    className="rounded-full px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider"
                    style={{
                        backgroundColor: `${t.accent}15`,
                        color: t.accent,
                    }}
                >
                    {t.subject}
                </span>
            </div>

            {/* Headline */}
            <h3 className="text-[15px] font-black text-[#1E2772] transition-colors group-hover:text-[#00A8E8]">
                &ldquo;{t.headline}&rdquo;
            </h3>

            {/* Quote Body */}
            <p className="mt-2.5 flex-1 text-xs leading-relaxed text-slate-600 sm:text-[13px]">
                {t.quote}
            </p>

            {/* Divider */}
            <div className="my-4 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            {/* Author Footer */}
            <div className="flex items-center gap-3">
                <div className="relative shrink-0">
                    <div
                        className="absolute -inset-0.5 rounded-full opacity-60 blur-[2px] transition-opacity duration-500 group-hover:opacity-100"
                        style={{
                            background: `conic-gradient(from 0deg, ${t.accent}, #1E2772, ${t.accent})`,
                        }}
                    />
                    <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-gradient-to-br from-[#1E2772] to-[#00A8E8] text-sm font-black text-white shadow-sm">
                        {t.image ? (
                            <Image
                                src={t.image}
                                alt={t.name}
                                fill
                                className="object-cover"
                                sizes="44px"
                            />
                        ) : (
                            t.initial
                        )}
                    </div>
                </div>

                <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5">
                        <span className="truncate text-xs font-black text-[#1E2772] sm:text-sm">
                            {t.name}
                        </span>
                        <span
                            className="shrink-0 rounded-full px-1.5 py-0.2 text-[9px] font-extrabold"
                            style={{
                                backgroundColor: `${t.accent}20`,
                                color: t.accent,
                            }}
                        >
                            ✓ {t.role}
                        </span>
                    </div>
                    <div className="mt-0.5 flex items-center gap-1 text-[11px] font-medium text-slate-500">
                        <svg className="h-3 w-3 shrink-0 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="truncate">{t.location}</span>
                    </div>
                </div>
            </div>

            {/* Ambient hover glow */}
            <span
                className="pointer-events-none absolute -bottom-16 -right-16 h-36 w-36 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-60"
                style={{ backgroundColor: t.glow }}
            />
        </div>
    );
}