"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Button from "./Button";

export default function Hero() {
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.fromTo(
            subtitleRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8, delay: 0.2 }
        )
            .fromTo(
                titleRef.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1 },
                "-=0.6"
            )
            .fromTo(
                buttonRef.current,
                { opacity: 0, scale: 0.9 },
                { opacity: 1, scale: 1, duration: 0.6 },
                "-=0.4"
            );
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen grid lg:grid-cols-2 items-center gap-12 px-4 pt-20 overflow-hidden max-w-7xl mx-auto"
        >
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10" />

            {/* Left Content */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-10">
                <span
                    ref={subtitleRef}
                    className="text-muted-foreground text-sm md:text-base mb-6 tracking-wide"
                >
                    All projects here is designed to deliver impact, not just impressions.
                </span>

                <h1
                    ref={titleRef}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-10 leading-[1.1]"
                >
                    Marketing that <span className="italic font-serif">moves</span>  <br />
                    <span className="text-muted-foreground"><span className="italic font-serif">the</span> needle.</span>
                </h1>

                <div ref={buttonRef}>
                    <Button variant="primary" className="!px-8 !py-4 text-lg">
                        Get A Quote
                    </Button>
                </div>
            </div>

            {/* Right Content (Video Card) */}
            <div className="relative w-full flex justify-center lg:justify-end z-10">
                <div className="relative w-full max-w-2xl rounded-[20px] overflow-hidden border border-white/10 bg-black/20 backdrop-blur-sm shadow-2xl">
                    <video
                        src="/hero-video.mov"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>
        </section>
    );
}
