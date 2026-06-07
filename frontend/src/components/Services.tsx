"use client";
import React, { useEffect, useRef } from "react";
import TiltCard from "./TiltCard";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        title: "Marketing",
        description: "We use strategic marketing tactics that have been proven to work.",
        colSpan: "md:col-span-2",
    },
    {
        title: "Development",
        description: "Custom programming for most complex functions you can think.",
        colSpan: "md:col-span-2",
    },
    {
        title: "Web Design",
        description: "Go online and acquire online customers with your business website. An appealing website can get you more customers.",
        colSpan: "md:col-span-2",
    },
    {
        title: "SEO Optimization",
        description: "Optimizing your website to rank on the first page of google is our specialty.",
        colSpan: "md:col-span-2",
    },
    {
        title: "Ecommerce",
        description: "We build your online store using a flexible, modular platform that allows you to sell your products online.",
        colSpan: "md:col-span-2",
    },
    {
        title: "Branding",
        description: "A solid brand strategy, logo and guidelines help you to get You recognized.",
        colSpan: "md:col-span-2",
    },
];

export default function Services() {
    const sectionRef = useRef(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = cardsRef.current.filter((card) => card !== null);

            gsap.fromTo(
                cards,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 px-4 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                    We have <span className="italic font-serif text-muted-foreground">build </span><br /><span className="italic font-serif text-muted-foreground">more </span> projects.
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                    Hire us for all your online marketing needs.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                {services.map((service, index) => (
                    <TiltCard
                        key={index}
                        ref={(el: HTMLDivElement | null) => {
                            if (el) cardsRef.current[index] = el;
                        }}
                        className={`group relative ${service.colSpan}`}
                    >
                        {/* Outer Wrapper (Border Gradient & Dot) */}
                        <div className="relative h-full w-full rounded-[10px] p-[1px] bg-[radial-gradient(circle_at_0%_0%,#ffffff,#0c0d0d)]">
                            {/* Animated Dot */}
                            <motion.div
                                className="absolute w-[5px] h-[5px] bg-white rounded-full shadow-[0_0_10px_#ffffff] z-20"
                                animate={{
                                    top: ["10%", "10%", "calc(100% - 30px)", "calc(100% - 30px)", "10%"],
                                    right: ["10%", "calc(100% - 35px)", "calc(100% - 35px)", "10%", "10%"],
                                }}
                                transition={{
                                    duration: 6,
                                    ease: "linear",
                                    repeat: Infinity,
                                }}
                            />

                            {/* Inner Card */}
                            <div className="relative h-full w-full rounded-[9px] border border-[#202222] bg-[#0c0d0d] bg-[#0c0d0d] overflow-hidden flex flex-col">
                                {/* Ray */}
                                <div className="absolute top-0 left-0 w-[220px] h-[45px] bg-[#c7c7c7] opacity-40 blur-[10px] rounded-[100px] rotate-[40deg] origin-[10%_0%] shadow-[0_0_50px_#fff]" />

                                {/* Lines */}
                                <div className="absolute top-[10%] left-0 w-full h-[1px] bg-gradient-to-r from-[#888888] via-[#1d1f1f] to-[#1d1f1f] opacity-50" />
                                <div className="absolute bottom-[10%] left-0 w-full h-[1px] bg-[#2c2c2c] opacity-50" />
                                <div className="absolute left-[10%] top-0 w-[1px] h-full bg-gradient-to-b from-[#747474] via-[#222424] to-[#222424] opacity-50" />
                                <div className="absolute right-[10%] top-0 w-[1px] h-full bg-[#2c2c2c] opacity-50" />

                                {/* Content Container */}
                                <div className="relative z-10 flex flex-col h-full items-center justify-center text-center p-8 min-h-[300px]">
                                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white via-white to-gray-500 bg-clip-text text-transparent">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-400 text-[14px] leading-relaxed max-w-sm">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </TiltCard>
                ))}
            </div>
        </section>
    );
}
