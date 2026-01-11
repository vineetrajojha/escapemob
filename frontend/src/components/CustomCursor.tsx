"use client"

import gsap from "gsap"
import { useEffect } from "react"

const CustomCursor = () => {
    useEffect(() => {
        const cursorCustom = document.querySelector('.cursorCustom') as HTMLDivElement | null;
        const cursorFollower = document.querySelector('.follower') as HTMLDivElement | null;

        if (!cursorCustom || !cursorFollower) return;

        const moveCursor = (e: MouseEvent): void => {
            gsap.to(cursorFollower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.3,
                ease: "power2.out"
            });

            gsap.to(cursorCustom, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1
            });
        };

        gsap.set(cursorFollower, {
            xPercent: -50,
            yPercent: -50
        });

        gsap.set(cursorCustom, {
            xPercent: -50,
            yPercent: -50
        });

        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    return (
        <div className="max-lg:hidden z-[9999] pointer-events-none fixed inset-0 overflow-hidden">
            <div
                className="follower w-[50px] h-[50px] rounded-full bg-transparent border-2 border-solid fixed z-50 pointer-events-none top-0 left-0 transition-colors duration-200"
                style={{ borderColor: 'var(--cursor-color)' }}
            ></div>
            <div
                className="cursorCustom w-[10px] h-[10px] rounded-full fixed z-50 pointer-events-none top-0 left-0 transition-colors duration-200"
                style={{ backgroundColor: 'var(--cursor-color)' }}
            ></div>
        </div>
    );
}

export default CustomCursor;
