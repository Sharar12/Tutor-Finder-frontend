"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Direction =
    | "up"
    | "down"
    | "left"
    | "right"
    | "scale"
    | "zoom"
    | "rotate-left"
    | "rotate-right"
    | "flip-x"
    | "flip-y"
    | "fade";

const hiddenTransform: Record<Direction, string> = {
    up: "translate3d(0, 60px, 0)",
    down: "translate3d(0, -60px, 0)",
    left: "translate3d(-80px, 0, 0)",
    right: "translate3d(80px, 0, 0)",
    scale: "scale(0.85)",
    zoom: "scale(0.4)",
    "rotate-left": "translate3d(-50px, 40px, 0) rotate(-14deg)",
    "rotate-right": "translate3d(50px, 40px, 0) rotate(14deg)",
    "flip-x": "perspective(900px) rotateX(75deg)",
    "flip-y": "perspective(900px) rotateY(75deg)",
    fade: "none",
};

interface RevealProps {
    children: ReactNode;
    direction?: Direction;
    delay?: number;
    duration?: number;
    threshold?: number;
    once?: boolean;
    className?: string;
}

export default function Reveal({
    children,
    direction = "up",
    delay = 0,
    duration = 800,
    threshold = 0.15,
    once = true,
    className = "",
}: RevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    if (once) observer.disconnect();
                } else if (!once) {
                    setVisible(false);
                }
            },
            { threshold }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold, once]);

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : hiddenTransform[direction],
                transition: `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
                willChange: "opacity, transform",
            }}
        >
            {children}
        </div>
    );
}