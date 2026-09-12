"use client";

import { useState, ReactNode } from "react";
import Link from "next/link";
import Reveal from "./Reveal";

const parentLinks = [
    { label: "Find a Home Tutor", href: "#find-tutor" },
    { label: "Online Live Tutoring", href: "#tutoring-methods" },
    { label: "Bangla Medium (SSC & HSC)", href: "#categories" },
    { label: "English Medium (O/A Level)", href: "#categories" },
    { label: "University Admission Prep", href: "#categories" },
    { label: "Free Demo Class Policy", href: "#how-it-works" },
];

const tutorLinks = [
    { label: "Browse 1,200+ Live Jobs", href: "#job-board", badge: "Live" },
    { label: "Become a Tutor (Free)", href: "#how-it-works-tutors" },
    { label: "How It Works for Tutors", href: "#how-it-works-tutors" },
    { label: "Tutor Success Stories", href: "#reviews" },
    { label: "Payment & Honorarium Policy", href: "#terms" },
    { label: "Tutor Code of Conduct", href: "#faq" },
];

const locations = [
    { label: "Tutors in Dhanmondi & Mohammadpur", href: "#job-board" },
    { label: "Tutors in Mirpur & Pallabi", href: "#job-board" },
    { label: "Tutors in Uttara & Airport Area", href: "#job-board" },
    { label: "Tutors in Gulshan, Banani & Baridhara", href: "#job-board" },
    { label: "Tutors in Bashundhara R/A", href: "#job-board" },
    { label: "Tutors in Chattogram & Sylhet", href: "#job-board" },
];

const socials: { name: string; href: string; color: string; icon: ReactNode }[] = [
    {
        name: "Facebook",
        href: "https://facebook.com",
        color: "hover:bg-[#1877F2]",
        icon: (
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
        ),
    },
    {
        name: "WhatsApp",
        href: "https://wa.me/8801947368456",
        color: "hover:bg-[#25D366]",
        icon: (
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.586 1.761.88 2.79.88 3.18 0 5.767-2.587 5.767-5.766.001-3.18-2.585-5.766-5.766-5.766zm9.969 5.828c0 5.518-4.482 10-10 10-1.748 0-3.385-.45-4.819-1.239l-5.181 1.355 1.378-5.034c-.881-1.488-1.378-3.228-1.378-5.082 0-5.518 4.482-10 10-10s10 4.482 10 10z" />
            </svg>
        ),
    },
    {
        name: "Instagram",
        href: "https://instagram.com",
        color: "hover:bg-[#E4405F]",
        icon: (
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
        ),
    },
    {
        name: "YouTube",
        href: "https://youtube.com",
        color: "hover:bg-[#FF0000]",
        icon: (
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
        ),
    },
];

export default function Footer() {
    const [subscriberEmail, setSubscriberEmail] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (subscriberEmail) {
            setIsSubscribed(true);
            setTimeout(() => {
                setSubscriberEmail("");
            }, 2000);
        }
    };

    return (
        <footer className="relative w-full overflow-hidden bg-gradient-to-b from-[#0F1438] via-[#151C4D] to-[#0A0D26] pt-16 text-white md:pt-20">
            {/* High-Visibility Dual Rolling Ocean Waves */}
            <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-56 opacity-40"
                style={{ animation: "oceanWaveRoll1 6s ease-in-out infinite alternate" }}
            >
                <svg viewBox="0 0 1440 220" className="h-full w-full" preserveAspectRatio="none">
                    <path
                        d="M0,80 C 320,160 640,20 960,120 C 1200,180 1380,60 1440,100 L 1440,220 L 0,220 Z"
                        fill="url(#footerWave1)"
                    />
                    <defs>
                        <linearGradient id="footerWave1" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#00A8E8" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="#0F1438" stopOpacity="0.1" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-48 opacity-30"
                style={{ animation: "oceanWaveRoll2 8s ease-in-out infinite alternate 1s" }}
            >
                <svg viewBox="0 0 1440 200" className="h-full w-full" preserveAspectRatio="none">
                    <path
                        d="M0,120 C 380,50 700,180 1020,90 C 1220,40 1360,130 1440,80 L 1440,200 L 0,200 Z"
                        fill="url(#footerWave2)"
                    />
                    <defs>
                        <linearGradient id="footerWave2" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#7A5AF8" stopOpacity="0.45" />
                            <stop offset="100%" stopColor="#0F1438" stopOpacity="0.05" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* High-Speed Shooting Digital Streams */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
                <div
                    className="absolute top-14 h-[2px] w-64 rounded-full bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent shadow-[0_0_12px_#00D4FF]"
                    style={{ animation: "digitalStream 4.5s linear infinite" }}
                />
                <div
                    className="absolute top-28 h-[2px] w-80 rounded-full bg-gradient-to-r from-transparent via-[#7A5AF8] to-transparent shadow-[0_0_12px_#7A5AF8]"
                    style={{ animation: "digitalStream 6s linear infinite 1.8s" }}
                />
                <div
                    className="absolute top-44 h-[2px] w-56 rounded-full bg-gradient-to-r from-transparent via-[#10B981] to-transparent shadow-[0_0_12px_#10B981]"
                    style={{ animation: "digitalStream 5.2s linear infinite 3.2s" }}
                />
            </div>

            {/* Top Glowing Gradient Divider Line */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00A8E8]/70 to-transparent" />

            {/* Ambient Background Glows */}
            <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#00A8E8]/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-[#7A5AF8]/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* ===== Newsletter / Job Alert Subscription Strip ===== */}
                <Reveal direction="up" duration={900}>
                    <div className="mb-14 rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
                        <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:text-left text-center">
                            <div className="max-w-xl">
                                <div className="inline-flex items-center gap-2 rounded-full bg-[#00A8E8]/20 px-3 py-0.5 text-xs font-bold text-[#00D4FF]">
                                    <span className="h-1.5 w-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
                                    <span>Stay Updated</span>
                                </div>
                                <h3 className="mt-2 text-xl font-black text-white sm:text-2xl">
                                    Get Daily Tuition Alerts &amp; Study Tips
                                </h3>
                                <p className="mt-1 text-xs text-slate-300 sm:text-sm">
                                    Receive instant alerts for new tuition jobs and academic counseling in your neighborhood.
                                </p>
                            </div>

                            <form onSubmit={handleSubscribe} className="flex w-full max-w-md flex-col gap-2.5 sm:flex-row">
                                <input
                                    type="email"
                                    required
                                    placeholder="Enter your email address"
                                    value={subscriberEmail}
                                    onChange={(e) => setSubscriberEmail(e.target.value)}
                                    className="flex-1 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-xs text-white placeholder-slate-400 outline-none transition-all focus:border-[#00A8E8] focus:bg-white/15 focus:ring-2 focus:ring-[#00A8E8]/30 sm:text-sm"
                                />
                                <button
                                    type="submit"
                                    className="shrink-0 rounded-xl bg-gradient-to-r from-[#00A8E8] to-[#0284C7] px-6 py-3 text-xs font-black text-white shadow-md shadow-[#00A8E8]/30 transition-all hover:scale-105 hover:shadow-lg sm:text-sm"
                                >
                                    {isSubscribed ? "Subscribed! ✓" : "Subscribe Free"}
                                </button>
                            </form>
                        </div>
                    </div>
                </Reveal>

                {/* ===== Main Footer Grid ===== */}
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-8">
                    {/* Brand & Mission (Spans 2 cols on lg) */}
                    <div className="lg:col-span-2 flex flex-col gap-4">
                        {/* Logo */}
                        <Link href="/" className="group flex items-center gap-3">
                            <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#1E2772] via-[#0284C7] to-[#00D4FF] p-0.5 shadow-lg shadow-[#00A8E8]/25 transition-transform duration-500 group-hover:scale-105">
                                <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-[#121842] text-white">
                                    <span className="font-black text-lg tracking-wider bg-gradient-to-br from-white to-[#00D4FF] bg-clip-text text-transparent">
                                        TF
                                    </span>
                                </div>
                                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-[9px] font-black text-white ring-2 ring-[#0F1438]">
                                    ✓
                                </span>
                            </div>

                            <div className="flex flex-col leading-none">
                                <span className="text-xl font-black tracking-tight text-white md:text-2xl">
                                    Tutor<span className="bg-gradient-to-r from-[#00A8E8] to-[#00D4FF] bg-clip-text text-transparent">Finder</span>
                                </span>
                                <span className="mt-1 text-[8px] font-extrabold tracking-[0.24em] text-slate-400">
                                    EXPLORE FOR EXCELLENCE
                                </span>
                            </div>
                        </Link>

                        <p className="max-w-sm text-xs leading-relaxed text-slate-300 sm:text-sm">
                            Bangladesh&apos;s premier verified tuition network. Connecting ambitious students with background-checked tutors from BUET, DU, DMC, and leading universities.
                        </p>

                        {/* Direct Contact Details */}
                        <div className="mt-2 flex flex-col gap-2.5 text-xs text-slate-300">
                            <div className="flex items-start gap-2.5">
                                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-white/10 text-[#00D4FF]">
                                    📍
                                </span>
                                <span>Bepari Goli Wireless, Moghbazar, Dhaka-1217, Bangladesh</span>
                            </div>

                            <div className="flex items-center gap-2.5">
                                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-white/10 text-emerald-400">
                                    📞
                                </span>
                                <a href="tel:+8801947368456" className="font-bold text-white hover:text-[#00D4FF] transition-colors">
                                    +880 1947-368456 (24/7 Hotline)
                                </a>
                            </div>

                            <div className="flex items-center gap-2.5">
                                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-white/10 text-[#00D4FF]">
                                    ✉️
                                </span>
                                <a href="mailto:tutorfinder14@gmail.com" className="hover:text-[#00D4FF] transition-colors">
                                    tutorfinder14@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="mt-3 flex items-center gap-2">
                            {socials.map((s) => (
                                <a
                                    key={s.name}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={s.name}
                                    className={`flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:scale-110 ${s.color}`}
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: For Students & Parents */}
                    <div>
                        <h4 className="relative mb-5 inline-block text-sm font-black uppercase tracking-wider text-white">
                            For Guardians
                            <span className="absolute -bottom-1.5 left-0 h-0.5 w-6 rounded-full bg-[#00A8E8]" />
                        </h4>

                        <ul className="flex flex-col gap-2.5">
                            {parentLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="group inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 transition-colors duration-200 hover:text-[#00D4FF]"
                                    >
                                        <span className="h-1 w-1 rounded-full bg-[#00A8E8] opacity-60 transition-all group-hover:w-2 group-hover:opacity-100" />
                                        <span>{link.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: For Tutors & Educators */}
                    <div>
                        <h4 className="relative mb-5 inline-block text-sm font-black uppercase tracking-wider text-white">
                            For Tutors
                            <span className="absolute -bottom-1.5 left-0 h-0.5 w-6 rounded-full bg-[#00A8E8]" />
                        </h4>

                        <ul className="flex flex-col gap-2.5">
                            {tutorLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="group inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 transition-colors duration-200 hover:text-[#00D4FF]"
                                    >
                                        <span className="h-1 w-1 rounded-full bg-[#00A8E8] opacity-60 transition-all group-hover:w-2 group-hover:opacity-100" />
                                        <span>{link.label}</span>
                                        {link.badge && (
                                            <span className="rounded-full bg-emerald-500/20 px-1.5 py-0.2 text-[9px] font-bold text-emerald-400">
                                                {link.badge}
                                            </span>
                                        )}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Top Locations */}
                    <div>
                        <h4 className="relative mb-5 inline-block text-sm font-black uppercase tracking-wider text-white">
                            Top Areas
                            <span className="absolute -bottom-1.5 left-0 h-0.5 w-6 rounded-full bg-[#00A8E8]" />
                        </h4>

                        <ul className="flex flex-col gap-2.5">
                            {locations.map((loc) => (
                                <li key={loc.label}>
                                    <Link
                                        href={loc.href}
                                        className="group inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 transition-colors duration-200 hover:text-[#00D4FF]"
                                    >
                                        <span className="h-1 w-1 rounded-full bg-[#00A8E8] opacity-60 transition-all group-hover:w-2 group-hover:opacity-100" />
                                        <span className="line-clamp-1">{loc.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* ===== Trust & Payment Security Strip ===== */}
                <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center sm:flex-row sm:text-left">
                    <div className="flex items-center gap-3 text-xs text-slate-300">
                        <span className="flex items-center gap-1">
                            <span className="text-emerald-400 font-black">✓</span> Trade License Verified
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                            <span className="text-emerald-400 font-black">✓</span> 100% NID Authenticated
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                            <span className="text-emerald-400 font-black">✓</span> Free Demo Trial
                        </span>
                    </div>

                    {/* Supported Payment Channels */}
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                        <span>Secured Payment Options:</span>
                        <div className="flex items-center gap-1.5 font-black text-white text-[11px]">
                            <span className="rounded bg-pink-600/30 border border-pink-500/40 px-2 py-0.5 text-pink-300">bKash</span>
                            <span className="rounded bg-orange-600/30 border border-orange-500/40 px-2 py-0.5 text-orange-300">Nagad</span>
                            <span className="rounded bg-purple-600/30 border border-purple-500/40 px-2 py-0.5 text-purple-300">Rocket</span>
                        </div>
                    </div>
                </div>

                {/* ===== Legal & Copyright Bar ===== */}
                <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-center text-xs text-slate-400 md:flex-row md:text-left">
                    <p>
                        © {new Date().getFullYear()} Tutor Finder Bangladesh. All rights reserved.
                    </p>

                    <div className="flex items-center gap-4">
                        <Link href="#terms" className="hover:text-white transition-colors">
                            Terms &amp; Conditions
                        </Link>
                        <span>•</span>
                        <Link href="#privacy" className="hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <span>•</span>
                        <Link href="#faq" className="hover:text-white transition-colors">
                            FAQ
                        </Link>
                        <span>•</span>
                        <Link href="#contact" className="hover:text-white transition-colors">
                            Contact Support
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}