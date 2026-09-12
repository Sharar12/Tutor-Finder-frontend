import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

export default function Hero() {
    return (
        <section className="relative w-full">
            {/* Animated Wavy Background Lines with Flowing Dashes and Undulating Waves */}
            <svg
                className="pointer-events-none absolute inset-0 h-full w-full opacity-35"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                viewBox="0 0 1440 600"
            >
                <defs>
                    <linearGradient id="waveGrad" x1="0" x2="1" y1="0" y2="0">
                        <stop offset="0%" stopColor="#00A8E8" stopOpacity="0.7" />
                        <stop offset="50%" stopColor="#00D4FF" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#232C77" stopOpacity="0.3" />
                    </linearGradient>
                </defs>
                {Array.from({ length: 12 }).map((_, i) => (
                    <path
                        key={i}
                        d={`M0,${80 + i * 42} C 400,${30 + i * 42} 900,${170 + i * 42} 1440,${60 + i * 42}`}
                        fill="none"
                        stroke="url(#waveGrad)"
                        strokeWidth="1.1"
                        strokeDasharray="20 14"
                        style={{
                            animation: `heroWaveDash ${16 + i * 1.5}s linear infinite, ${i % 2 === 0 ? "heroLineWave" : "heroLineWaveAlt"} ${10 + (i % 4) * 2}s ease-in-out infinite alternate ${i * 0.5}s`,
                        }}
                    />
                ))}
            </svg>

            {/* Gently Drifting Ambient Plasma Orbs */}
            <div
                className="pointer-events-none absolute -left-12 top-1/4 h-96 w-96 rounded-full bg-gradient-to-tr from-[#00A8E8]/20 via-[#00D4FF]/15 to-transparent blur-3xl"
                style={{ animation: "heroOrb1 16s ease-in-out infinite" }}
            />
            <div
                className="pointer-events-none absolute right-4 top-10 h-[420px] w-[420px] rounded-full bg-gradient-to-bl from-[#232C77]/20 via-[#7A5AF8]/15 to-[#00A8E8]/10 blur-3xl"
                style={{ animation: "heroOrb2 20s ease-in-out infinite" }}
            />

            <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-10 lg:py-24">
                {/* ===== Illustration ===== */}
                <Reveal
                    direction="rotate-left"
                    duration={1100}
                    className="order-2 flex justify-center lg:order-1"
                >
                    <div className="group relative w-full max-w-xl">
                        <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[#00A8E8]/20 via-transparent to-[#232C77]/20 opacity-60 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />

                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 shadow-[0_20px_60px_-15px_rgba(35,44,119,0.25)] backdrop-blur-xl transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_30px_80px_-15px_rgba(35,44,119,0.35)]">
                            <Image
                                src="/hero_tutor_student.jpg"
                                alt="Expert tutor teaching student"
                                fill
                                sizes="(max-width: 768px) 100vw, 600px"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                priority
                            />

                            {/* Floating Rating Chip */}
                            <div className="absolute right-4 top-5 flex items-center gap-2 rounded-2xl border border-white/80 bg-white/95 px-3.5 py-2 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-105">
                                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#FBBF24]/20 text-[#F59E0B]">
                                    <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-xs font-black text-[#232C77]">5.0 Rating</div>
                                    <div className="text-[10px] font-semibold text-slate-500">Verified Reviews</div>
                                </div>
                            </div>

                            {/* Floating Verified Badge Chip */}
                            <div className="absolute bottom-5 left-4 flex items-center gap-2.5 rounded-2xl border border-white/80 bg-white/95 px-3.5 py-2 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-105">
                                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#00A8E8]/15 text-[#00A8E8]">
                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-xs font-black text-[#232C77]">100% Verified</div>
                                    <div className="text-[10px] font-semibold text-slate-500">Certified Tutors</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>

                {/* ===== Text ===== */}
                <div className="order-1 flex flex-col items-center text-center lg:order-2 lg:items-start lg:text-left">
                    <Reveal direction="down" delay={100}>
                        <div className="group mb-5 inline-flex items-center gap-2 rounded-full border border-[#00A8E8]/40 bg-white/70 px-4 py-1.5 text-xs font-semibold text-[#232C77] shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00A8E8] hover:shadow-md md:text-sm">
                            <span className="relative flex h-2 w-2 items-center justify-center">
                                <span className="absolute h-2 w-2 animate-ping rounded-full bg-[#00A8E8] opacity-75" />
                                <span className="h-2 w-2 rounded-full bg-[#00A8E8]" />
                            </span>
                            #1 Trusted Tutoring Platform in Bangladesh
                        </div>
                    </Reveal>

                    <Reveal direction="right" delay={250} duration={1000}>
                        <h1 className="text-4xl font-black leading-[1.1] tracking-tight text-[#232C77] md:text-5xl lg:text-[3.4rem] xl:text-6xl">
                            Hire the Right{" "}
                            <span className="relative inline-block">
                                <span className="relative z-10 bg-gradient-to-r from-[#00A8E8] to-[#232C77] bg-clip-text text-transparent">
                                    Tutor
                                </span>
                                <span className="absolute -bottom-1 left-0 h-3 w-full rounded-full bg-[#00A8E8]/20" />
                            </span>{" "}
                            <br className="hidden sm:block" />
                            with{" "}
                            <span className="bg-gradient-to-r from-[#00A8E8] to-[#0090d0] bg-clip-text text-transparent">
                                Confidences
                            </span>
                        </h1>
                    </Reveal>

                    <Reveal direction="up" delay={400}>
                        <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
                            Quickly match with competent tutors tailored to your child&apos;s
                            need to succeed.
                        </p>
                    </Reveal>

                    <div className="mt-8 flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
                        <Reveal direction="zoom" delay={550}>
                            <Link
                                href="#find-tutor"
                                className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#00A8E8] to-[#0088c7] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#00A8E8]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#00A8E8]/50 md:text-base"
                            >
                                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                                <span className="relative flex items-center gap-2">
                                    Find a Tutor
                                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                                        →
                                    </span>
                                </span>
                            </Link>
                        </Reveal>

                        <Reveal direction="zoom" delay={700}>
                            <Link
                                href="#post-requirement"
                                className="group inline-flex w-full items-center justify-center rounded-full border-2 border-[#232C77] bg-white/70 px-7 py-3.5 text-sm font-bold text-[#232C77] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#232C77] hover:text-white hover:shadow-xl hover:shadow-[#232C77]/30 md:text-base"
                            >
                                Post Tutor Requirement
                            </Link>
                        </Reveal>
                    </div>

                    <Reveal direction="fade" delay={900}>
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-500 lg:justify-start">
                            <span className="flex items-center gap-1.5">
                                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#00A8E8]/15 text-[9px] font-bold text-[#00A8E8]">
                                    ✓
                                </span>
                                Verified tutors
                            </span>
                            <span className="flex items-center gap-1.5">
                                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#00A8E8]/15 text-[9px] font-bold text-[#00A8E8]">
                                    ✓
                                </span>
                                Free trial class
                            </span>
                            <span className="flex items-center gap-1.5">
                                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#00A8E8]/15 text-[9px] font-bold text-[#00A8E8]">
                                    ✓
                                </span>
                                10k+ happy parents
                            </span>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}