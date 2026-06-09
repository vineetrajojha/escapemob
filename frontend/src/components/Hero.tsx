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
    // Partner logos
    const partnerLogos = [
        "/assets/partners/1.png",
        "/assets/partners/2.png",
        "/assets/partners/3.png",
        "/assets/partners/4.png",
        "/assets/partners/5.png",
        "/assets/partners/6.png",
        "/assets/partners/7.png",
        "/assets/partners/8.png",
        "/assets/partners/9.png",
        "/assets/partners/10.png",
    ];

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
                    <div className="relative w-full max-w-2xl rounded-[20px] overflow-hidden border border-white/10 bg-white/10 backdrop-blur-sm shadow-2xl">
                        <video
                            src="/hero-video.mov"
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="auto"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
            </div>

            {/* Logo Ticker */}
            <div className="relative lg:absolute bottom-0 left-0 w-full py-8 lg:py-12 z-20 mt-12 lg:mt-0">
                <p className="text-center text-xl md:text-2xl font-serif italic text-muted-foreground/80 mb-8 lg:mb-12 tracking-wide">
                    Growth Partner
                </p>
                <div className="overflow-hidden w-full relative">
                    <div className="flex w-max animate-scroll">
                        <div className="flex items-center gap-12 md:gap-20 px-6 md:px-10">
                            {partnerLogos.map((logo, i) => (
                                <div key={i} className="flex-shrink-0 w-28 sm:w-36 md:w-44 lg:w-52 flex items-center justify-center opacity-60 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 transform hover:scale-110">
                                    <Image
                                        src={logo}
                                        alt={`Partner ${i + 1}`}
                                        width={400}
                                        height={160}
                                        className="object-contain h-16 sm:h-20 md:h-24 lg:h-28 w-full"
                                        priority
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center gap-12 md:gap-20 px-6 md:px-10">
                            {partnerLogos.map((logo, i) => (
                                <div key={`dup-${i}`} className="flex-shrink-0 w-28 sm:w-36 md:w-44 lg:w-52 flex items-center justify-center opacity-60 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 transform hover:scale-110">
                                    <Image
                                        src={logo}
                                        alt={`Partner ${i + 1}`}
                                        width={400}
                                        height={160}
                                        className="object-contain h-16 sm:h-20 md:h-24 lg:h-28 w-full"
                                        priority
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
