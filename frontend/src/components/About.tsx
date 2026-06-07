"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TiltCard from "./TiltCard";
import { motion } from "framer-motion";
import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

const stats = [
    { label: "Projects Delivered", value: 100, suffix: "+" },
    { label: "Happy Clients", value: 50, suffix: "+" },
    { label: "Years Experience", value: 5, suffix: "+" },
    { label: "Support", value: 24, suffix: "/7" },
];

export default function About() {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);
    const visualRef = useRef(null);
    const statsRef = useRef<(HTMLSpanElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Content Animation
            gsap.fromTo(
                contentRef.current,
                { x: -50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                }
            );

            // Visual/Stats Animation
            gsap.fromTo(
                visualRef.current,
                { x: 50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                }
            );

            // Counting Animation
            statsRef.current.forEach((el, index) => {
                if (el) {
                    const value = stats[index].value;
                    gsap.fromTo(
                        el,
                        { innerText: 0 },
                        {
                            innerText: value,
                            duration: 2,
                            ease: "power2.out",
                            snap: { innerText: 1 },
                            scrollTrigger: {
                                trigger: sectionRef.current,
                                start: "top 70%",
                                toggleActions: "play none none reverse",
                            },
                            onUpdate: function () {
                                el.innerText = Math.ceil(Number(this.targets()[0].innerText)).toString();
                            },
                        }
                    );
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-20 md:py-32 px-4 max-w-7xl mx-auto overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Left Content */}
                <div ref={contentRef} className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 md:mb-8 leading-tight text-center lg:text-left">
                        Driven by <span className="italic font-serif text-muted-foreground">Innovation</span>, <br />
                        Defined by <span className="italic font-serif text-muted-foreground">Results</span>.
                    </h2>
                    <p className="text-muted-foreground text-base md:text-lg mb-6 md:mb-8 leading-relaxed max-w-2xl lg:max-w-none mx-auto lg:mx-0 text-justify lg:text-left">
                        At EscapeMob, we don't just follow trends; we set them. We are a team of creative strategists, digital natives, and data enthusiasts dedicated to transforming how brands connect with their audience.
                    </p>
                    <p className="text-muted-foreground text-base md:text-lg mb-8 md:mb-10 leading-relaxed max-w-2xl lg:max-w-none mx-auto lg:mx-0 text-justify lg:text-left">
                        Our mission is simple: to empower businesses with the tools, strategies, and creative assets they need to thrive in a digital-first world. From crafting compelling narratives to executing precision-targeted campaigns, we are your partners in growth.
                    </p>
                    <div className="w-full flex justify-center lg:justify-start">
                        <Button variant="primary" className="!px-8 !py-4 text-lg">
                            Our Story
                        </Button>
                    </div>
                </div>

                {/* Right Visual - Abstract Techy Grid */}
                <div ref={visualRef} className="relative w-full flex items-center justify-center mt-12 lg:mt-0">
                    {/* Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/20 rounded-full blur-[80px] md:blur-[120px] -z-10" />

                    <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 md:gap-6 w-full max-w-lg">
                        {stats.map((stat, index) => (
                            <TiltCard
                                key={index}
                                className={`group relative w-full ${index % 2 !== 0 ? "lg:translate-y-12" : ""}`}
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
                                        <div className="relative z-10 flex flex-col h-full items-center justify-center text-center p-8 min-h-[200px]">
                                            <div className="flex items-baseline gap-1 mb-2">
                                                <span
                                                    ref={(el) => { statsRef.current[index] = el; }}
                                                    className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-white to-gray-500 bg-clip-text text-transparent"
                                                >
                                                    0
                                                </span>
                                                <span className="text-2xl md:text-3xl font-bold text-muted-foreground">
                                                    {stat.suffix}
                                                </span>
                                            </div>
                                            <span className="text-gray-400 text-xs md:text-sm uppercase tracking-wider font-medium">
                                                {stat.label}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </TiltCard>
                        ))}
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="mt-20 lg:mt-32">
                <h3 className="text-3xl md:text-5xl font-bold text-center mb-16">
                    Meet Our <span className="italic font-serif text-muted-foreground">Team</span>
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { name: "Rounit Kumar", role: "Founder & CEO", image: "/assets/rounit-kumar.jpg" },
                        { name: "Vineet Raj", role: "Tech Head", image: "/assets/vineet-raj.png" },
                        { name: "Baibhav Aryan Raj", role: "Operation Manager", image: "" }
                    ].map((member, index) => (
                        <TiltCard key={index} className="group relative w-full aspect-square">
                            <div className="relative h-full w-full rounded-2xl p-[1px] bg-gradient-to-b from-white/20 to-transparent">
                                <div className="relative h-full w-full rounded-[15px] bg-[#0c0d0d] overflow-hidden flex flex-col items-center justify-center p-6 transition-all duration-500 group-hover:bg-[#111]">

                                    {/* Background Glow */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Image Container */}
                                    <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full mb-6 p-1 border border-[#202222] group-hover:border-primary/50 transition-colors duration-300">
                                        <div className="w-full h-full rounded-full overflow-hidden bg-white/5 relative">
                                            {member.image ? (
                                                <img
                                                    src={member.image}
                                                    alt={member.name}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-black">
                                                    <span className="text-3xl font-bold text-[#EBEBEB]/60">{member.name.charAt(0)}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Text Content */}
                                    <div className="relative z-10 text-center">
                                        <h4 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                                            {member.name}
                                        </h4>
                                        <p className="text-sm md:text-base text-muted-foreground font-medium tracking-wide uppercase">
                                            {member.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </TiltCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
