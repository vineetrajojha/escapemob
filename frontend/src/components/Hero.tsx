"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import Button from "./Button";
import Image from "next/image";
import logoImg from "../app/assets/logo/logo.png";

export default function Hero() {
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const buttonRef = useRef(null);

    // Create an array of logos (repeating the single logo for the ticker)
    const logos = Array(7).fill({ name: "EscapeMob", icon: logoImg });

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
            className="relative min-h-screen flex flex-col justify-center pt-32 pb-24 lg:pt-20 lg:pb-40 overflow-hidden"
        >
            <div className="grid lg:grid-cols-2 items-center gap-8 lg:gap-12 px-4 max-w-7xl mx-auto w-full z-10">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10" />

                {/* Left Content */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <span
                        ref={subtitleRef}
                        className="text-muted-foreground text-sm md:text-base mb-6 tracking-wide"
                    >
                        All projects here is designed to deliver impact, not just impressions.
                    </span>

                    <h1
                        ref={titleRef}
                        className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-foreground mb-10 leading-[1.1]"
                    >
                        Marketing that <span className="italic font-serif">moves</span>  <br />
                        <span className="text-muted-foreground"><span className="italic font-serif">the</span> needle.</span>
                    </h1>

                    <div ref={buttonRef}>
                        <Link href="#contact">
                            <Button variant="primary" className="!px-8 !py-4 text-lg">
                                Get a Quote
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Right Content (Video Card) */}
                <div className="relative w-full flex justify-center lg:justify-end">
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
            </div>

            {/* Logo Ticker */}
            <div className="relative lg:absolute bottom-0 left-0 w-full py-6 lg:py-10 bg-background/50 backdrop-blur-sm z-20 mt-12 lg:mt-0">
                <p className="text-center text-sm text-muted-foreground mb-4 lg:mb-8">
                    Be part of the 100+ businesses transforming their digital presence.
                </p>
                <div className="overflow-hidden w-full">
                    <div className="flex w-[200%] animate-scroll">
                        <div className="flex w-1/2 justify-around items-center gap-4 lg:gap-8 px-8">
                            {logos.map((logo, i) => (
                                <div key={i} className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                                    <Image
                                        src={logo.icon}
                                        alt={logo.name}
                                        width={180}
                                        height={60}
                                        className="object-contain h-8 md:h-12 lg:h-16 w-auto"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex w-1/2 justify-around items-center gap-4 lg:gap-8 px-8">
                            {logos.map((logo, i) => (
                                <div key={`dup-${i}`} className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                                    <Image
                                        src={logo.icon}
                                        alt={logo.name}
                                        width={180}
                                        height={60}
                                        className="object-contain h-8 md:h-12 lg:h-16 w-auto"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
