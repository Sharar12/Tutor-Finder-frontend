"use client";

import { useRef, useEffect } from "react";
import Reveal from "./Reveal";

export default function CTABanner() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.8;
        }
    }, []);

    return (
        <section className="relative w-full px-4 pb-14 pt-12 md:px-6 md:pb-20 md:pt-16">
            <div className="mx-auto max-w-6xl">
                <Reveal direction="scale" duration={950}>
                    <div className="group relative overflow-hidden rounded-[2.8rem] border border-white/30 bg-gradient-to-br from-[#121842] via-[#1E2772] to-[#0284C7] px-6 py-14 shadow-[0_30px_90px_-20px_rgba(20,27,77,0.45)] md:px-14 md:py-20">
                        {/* Background Looping Video with 10% Opacity and 0.8x Speed */}
                        <video
                            ref={videoRef}
                            autoPlay
                            loop
                            muted
                            playsInline
                            onLoadedMetadata={(e) => {
                                e.currentTarget.playbackRate = 0.8;
                            }}
                            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-10"
                        >
                            <source src="/cta_bg_video.mp4" type="video/mp4" />
                            <source src="/create_a_loop_bg_video_with_th.mp4" type="video/mp4" />
                        </video>

                        <div className="relative text-center">
                            {/* Live Badge */}
                            <Reveal direction="down" delay={150}>
                                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold text-white shadow-sm backdrop-blur-md">
                                    <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                                    <span className="tracking-wide">TAKE THE FIRST STEP TODAY</span>
                                    <span className="text-white/40">•</span>
                                    <span className="text-[#00D4FF] font-extrabold">100% FREE MATCHING</span>
                                </div>
                            </Reveal>

                            {/* Main Headline */}
                            <Reveal direction="down" delay={250}>
                                <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-white drop-shadow-md sm:text-4xl md:text-5xl lg:text-[3.2rem]">
                                    Start Your Learning Journey{" "}
                                    <span className="relative inline-block">
                                        <span className="bg-gradient-to-r from-[#00D4FF] via-white to-[#00A8E8] bg-clip-text text-transparent">
                                            Today
                                        </span>
                                        <span className="absolute -bottom-1 left-0 h-3 w-full rounded-full bg-[#00D4FF]/25" />
                                    </span>
                                </h2>
                            </Reveal>

                            {/* Subtitle */}
                            <Reveal direction="up" delay={380}>
                                <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base md:text-lg">
                                    Whether you need an expert tutor to achieve GPA 5.00 in Board Exams, conquer O/A Levels, or crack BUET/Medical Admissions — or you&apos;re an educator ready to earn up to ৳ 45,000+/month — your success begins right here.
                                </p>
                            </Reveal>



                            {/* Trust Proof Ribbon */}
                            <Reveal direction="fade" delay={650}>
                                <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-white/15 pt-6 text-xs font-semibold text-slate-200">
                                    <span className="flex items-center gap-1.5">
                                        <span className="text-amber-400">★</span>
                                        <span>4.9/5 Rating (8,500+ Reviews)</span>
                                    </span>
                                    <span className="hidden sm:inline text-white/30">•</span>
                                    <span className="flex items-center gap-1.5">
                                        <span className="text-emerald-400">✓</span>
                                        <span>12,500+ Screened Tutors</span>
                                    </span>
                                    <span className="hidden sm:inline text-white/30">•</span>
                                    <span className="flex items-center gap-1.5">
                                        <span className="text-[#00D4FF]">⚡</span>
                                        <span>15-Min Fast Matching</span>
                                    </span>
                                    <span className="hidden sm:inline text-white/30">•</span>
                                    <span className="flex items-center gap-1.5">
                                        <span className="text-emerald-400">✓</span>
                                        <span>Free Demo Class Guarantee</span>
                                    </span>
                                </div>
                            </Reveal>

                            {/* 24/7 Hotline Support Pill */}
                            <Reveal direction="fade" delay={750}>
                                <div className="mt-5 flex items-center justify-center">
                                    <a
                                        href="tel:+8801947368456"
                                        className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-[11px] font-bold text-white/90 transition-colors hover:bg-white/20 hover:text-white"
                                    >
                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                        <span>Need Immediate Assistance? 24/7 Helpline: +880 1947-368456</span>
                                    </a>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}