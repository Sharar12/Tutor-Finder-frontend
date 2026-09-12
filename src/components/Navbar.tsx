"use client";

import { useState, ReactNode } from "react";
import Link from "next/link";

const navLinks = [
    { href: "#find-tutor", label: "Find Tutor" },
    { href: "#job-board", label: "Live Jobs" },
    { href: "#categories", label: "Categories" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#reviews", label: "Reviews" },
    { href: "#contact", label: "Contact" },
];

const socialLinks: { href: string; icon: ReactNode; name: string; hoverBg: string }[] = [
    {
        href: "#",
        icon: (
            <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
        ),
        name: "Facebook",
        hoverBg: "hover:bg-[#1877F2]",
    },
    {
        href: "https://wa.me/8801947368456",
        icon: (
            <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.586 1.761.88 2.79.88 3.18 0 5.767-2.587 5.767-5.766.001-3.18-2.585-5.766-5.766-5.766zm9.969 5.828c0 5.518-4.482 10-10 10-1.748 0-3.385-.45-4.819-1.239l-5.181 1.355 1.378-5.034c-.881-1.488-1.378-3.228-1.378-5.082 0-5.518 4.482-10 10-10s10 4.482 10 10z" />
            </svg>
        ),
        name: "WhatsApp",
        hoverBg: "hover:bg-[#25D366]",
    },
    {
        href: "#",
        icon: (
            <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
        ),
        name: "Instagram",
        hoverBg: "hover:bg-[#E4405F]",
    },
    {
        href: "#",
        icon: (
            <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
        ),
        name: "YouTube",
        hoverBg: "hover:bg-[#FF0000]",
    },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [lang, setLang] = useState<"BN" | "EN">("EN");

    return (
        <header className="fixed inset-x-0 top-0 z-50 px-3 pt-2.5 md:px-6 md:pt-4">
            <div className="mx-auto max-w-7xl">
                <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/75 shadow-[0_12px_40px_-10px_rgba(35,44,119,0.12)] backdrop-blur-2xl">
                    {/* ===== Ultra-Slim Top Contact & Broadcast Bar ===== */}
                    <div className="flex items-center justify-between gap-4 border-b border-white/25 bg-gradient-to-r from-[#1c2463] via-[#232C77] to-[#1a2b70] px-4 py-1.5 text-white md:px-7">
                        {/* Live Direct Contact */}
                        <div className="flex items-center gap-4 text-[11px] font-medium md:gap-6">
                            <a
                                href="tel:+8801947368456"
                                className="group flex items-center gap-1.5 text-white/90 transition-colors duration-200 hover:text-[#00D4FF]"
                            >
                                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/15 text-white transition-transform duration-300 group-hover:scale-110">
                                    <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.4}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </span>
                                <span className="font-semibold">+880 1947-368456</span>
                            </a>

                            <a
                                href="mailto:tutorfinder14@gmail.com"
                                className="group hidden items-center gap-1.5 text-white/80 transition-colors duration-200 hover:text-[#00D4FF] sm:flex"
                            >
                                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/15 text-white transition-transform duration-300 group-hover:scale-110">
                                    <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.4}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </span>
                                <span>tutorfinder14@gmail.com</span>
                            </a>
                        </div>

                        {/* Middle Ticker Callout */}
                        <div className="hidden lg:flex items-center gap-2 text-[11px] font-semibold text-white/85">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#10B981] animate-ping" />
                            <span>Over 12,500+ pre-screened tutors across Bangladesh</span>
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center gap-1.5">
                            {socialLinks.map((s) => (
                                <a
                                    key={s.name}
                                    href={s.href}
                                    aria-label={s.name}
                                    className={`flex h-5 w-5 items-center justify-center rounded-full bg-white/15 text-white transition-all duration-300 hover:scale-110 hover:text-white ${s.hoverBg}`}
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* ===== Main Navigation Bar ===== */}
                    <nav className="flex items-center justify-between px-4 py-2.5 md:px-7 md:py-3.5">
                        {/* Logo */}
                        <Link href="/" className="group flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00A8E8] via-[#232C77] to-[#1c2463] text-sm font-black text-white shadow-md shadow-[#00A8E8]/30 transition-all duration-500 group-hover:rotate-6 group-hover:scale-105 md:h-11 md:w-11">
                                TF
                            </div>
                            <div className="flex flex-col leading-tight">
                                <span className="text-lg font-black tracking-tight text-[#232C77] transition-all duration-300 md:text-xl">
                                    Tutor <span className="text-[#00A8E8]">Finder</span>
                                </span>
                                <span className="text-[8px] font-extrabold tracking-[0.2em] text-slate-500 md:text-[9px]">
                                    EXPLORE FOR EXCELLENCE
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Navigation Links */}
                        <ul className="hidden items-center gap-1 lg:flex xl:gap-2">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="relative inline-flex items-center rounded-full border border-transparent px-3.5 py-1.5 text-xs font-bold text-[#1E2772] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-slate-200/80 hover:bg-white hover:shadow-[0_10px_22px_-4px_rgba(20,27,77,0.18),0_4px_8px_-2px_rgba(20,27,77,0.08)] active:translate-y-0 active:shadow-sm xl:px-4 xl:py-2 xl:text-sm"
                                    >
                                        <span>{link.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Right Actions */}
                        <div className="hidden items-center gap-3 md:flex">
                            {/* Modern Segmented Language Switcher */}
                            <div className="flex items-center rounded-full border border-slate-200/80 bg-slate-100/90 p-0.5 text-xs font-black shadow-inner">
                                <button
                                    onClick={() => setLang("BN")}
                                    className={`rounded-full px-2.5 py-1 transition-all duration-300 ${
                                        lang === "BN"
                                            ? "bg-[#232C77] text-white shadow-sm"
                                            : "text-slate-600 hover:text-slate-900"
                                    }`}
                                >
                                    বাং
                                </button>
                                <button
                                    onClick={() => setLang("EN")}
                                    className={`rounded-full px-2.5 py-1 transition-all duration-300 ${
                                        lang === "EN"
                                            ? "bg-[#00A8E8] text-white shadow-sm"
                                            : "text-slate-600 hover:text-slate-900"
                                    }`}
                                >
                                    EN
                                </button>
                            </div>

                            {/* Login */}
                            <Link
                                href="#login"
                                className="rounded-full border border-slate-200 bg-white/90 px-4 py-1.5 text-xs font-bold text-[#232C77] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#232C77] hover:shadow-md xl:px-5 xl:py-2 xl:text-sm"
                            >
                                Sign In
                            </Link>

                            {/* Post Requirement CTA */}
                            <Link
                                href="#post-requirement"
                                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#00A8E8] to-[#232C77] px-4 py-1.5 text-xs font-black text-white shadow-md shadow-[#00A8E8]/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#00A8E8]/40 xl:px-5 xl:py-2 xl:text-sm"
                            >
                                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                                <span className="relative">Hire a Tutor</span>
                                <span className="relative transition-transform duration-300 group-hover:translate-x-0.5">
                                    →
                                </span>
                            </Link>
                        </div>

                        {/* Hamburger Button for Mobile */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle Navigation Menu"
                            aria-expanded={isOpen}
                            className="flex flex-col gap-1.5 rounded-xl border border-slate-200/80 bg-white/80 p-2.5 text-[#232C77] transition-all duration-300 hover:bg-[#00A8E8]/10 lg:hidden"
                        >
                            <span
                                className={`h-0.5 w-6 rounded-full bg-[#232C77] transition-all duration-300 ${
                                    isOpen ? "translate-y-2 rotate-45" : ""
                                }`}
                            />
                            <span
                                className={`h-0.5 w-6 rounded-full bg-[#232C77] transition-all duration-300 ${
                                    isOpen ? "opacity-0" : ""
                                }`}
                            />
                            <span
                                className={`h-0.5 w-6 rounded-full bg-[#232C77] transition-all duration-300 ${
                                    isOpen ? "-translate-y-2 -rotate-45" : ""
                                }`}
                            />
                        </button>
                    </nav>

                    {/* ===== Mobile Menu Drawer ===== */}
                    <div
                        className={`overflow-hidden transition-all duration-500 lg:hidden ${
                            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                    >
                        <div className="border-t border-slate-100 bg-white/95 px-5 py-5 backdrop-blur-2xl">
                            <ul className="flex flex-col gap-2">
                                {navLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="block rounded-xl border border-slate-200/60 bg-white px-4 py-2.5 text-center text-sm font-bold text-[#1E2772] shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md active:translate-y-0 active:shadow-xs"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-4 flex flex-col items-center gap-3 border-t border-slate-100 pt-4">
                                <div className="flex w-full gap-2.5">
                                    <Link
                                        href="#login"
                                        onClick={() => setIsOpen(false)}
                                        className="flex-1 rounded-xl border border-slate-200 py-2.5 text-center text-sm font-bold text-[#232C77] transition-all hover:bg-slate-50"
                                    >
                                        Sign In
                                    </Link>
                                    <Link
                                        href="#post-requirement"
                                        onClick={() => setIsOpen(false)}
                                        className="flex-1 rounded-xl bg-gradient-to-r from-[#00A8E8] to-[#232C77] py-2.5 text-center text-sm font-bold text-white shadow-md shadow-[#00A8E8]/30"
                                    >
                                        Hire a Tutor
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}