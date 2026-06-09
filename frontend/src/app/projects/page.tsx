"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import TiltCard from "@/components/TiltCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        id: 1,
        title: "Trap Fashion",
        description: "Premium trap-inspired streetwear brand. A complete e-commerce solution with dynamic interactions.",
        asset: "/assets/projects/trapfashion.mov",
        type: "video" as const,
        link: "https://trapforyou.com",
        tech: ["Next.js", "Express.js", "GSAP", "Razorpay", "Supabase"]
    },
    {
        id: 2,
        title: "SKB Realtech",
        description: "Comprehensive real estate platform for property search, legal guidance, and housing solutions in Greater Noida.",
        asset: "/assets/projects/skbrealtech.mov",
        type: "video" as const,
        link: "https://skbrealtech.in",
        tech: ["React", "Node.js", "Tailwind"]
    },
    {
        id: 3,
        title: "Navaana Store",
        description: "Youth-driven clothing brand specializing in streetwear, custom merchandise, and limited drops.",
        asset: "/assets/projects/navaanastore.mov",
        type: "video" as const,
        link: "https://navaanastore.com",
        tech: ["Next.js", "E-commerce", "Razorpay", "Supabase"]
    },
    {
        id: 4,
        title: "Vijay Real Estate",
        description: "Real Estate.",
        asset: "/assets/projects/8.png",
        type: "image" as const,
        link: "https://vijayrealestate.co.in",
        tech: ["React", "TypeScript", "Tailwind", "Stripe"]
    },
    {
        id: 5,
        title: "Shree Kb Group",
        description: "Real Estate with projects like KB Complex and KB Mart.",
        asset: "/assets/projects/9.png",
        type: "image" as const,
        link: "https://shreekbgroup.com",
        tech: ["PHP", "Tailwind", "GSAP"]
    }
];

export default function Projects() {
    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden relative w-full transition-colors duration-300">
            <div className="relative z-10">
                <Navbar />

                <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
                    {/* Header / Tech Head Section */}
                    <div className="text-center mb-20">
                        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-slate-900 dark:text-white">
                            Our <span className="italic font-serif text-slate-500 dark:text-muted-foreground">Projects</span>
                        </h1>
                        <div className="flex flex-col items-center justify-center">
                            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg border-4 border-background overflow-hidden relative">
                                <img src="/assets/vineet-raj.png" alt="Vineet Raj" className="w-full h-full object-cover" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-2 text-slate-900 dark:text-white">Vineet Raj</h2>
                            <p className="text-slate-500 dark:text-muted-foreground uppercase tracking-widest text-lg md:text-xl font-semibold">Tech Head</p>
                            <p className="text-slate-600 dark:text-muted-foreground max-w-3xl mt-8 text-xl md:text-2xl leading-relaxed">
                                Leading the technological vision and execution at EscapeMob. Delivering high-impact digital solutions for modern businesses.
                            </p>
                        </div>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                        {projects.map((project, i) => (
                            <Link
                                href={project.link}
                                key={project.id}
                                target={project.link.startsWith("http") ? "_blank" : "_self"}
                                rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
                                className="block w-full h-full"
                            >
                                <TiltCard className="group relative w-full h-full min-h-[400px]">
                                    <div className="relative h-full w-full rounded-[10px] p-[1px] bg-slate-200 dark:bg-[radial-gradient(circle_at_0%_0%,#ffffff,#0c0d0d)]">
                                        <div className="relative h-full w-full rounded-[9px] border border-slate-100 dark:border-[#202222] bg-white dark:bg-[#0c0d0d] dark:bg-[radial-gradient(circle_280px_at_50%_0%,#2a2a2a,#0c0d0d)] overflow-hidden flex flex-col p-6 transition-colors duration-300">
                                            <div className="w-full h-56 bg-gray-800/50 rounded-lg mb-6 overflow-hidden relative">
                                                {project.type === "video" ? (
                                                    <video
                                                        src={project.asset}
                                                        autoPlay
                                                        loop
                                                        muted
                                                        playsInline
                                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                                    />
                                                ) : (
                                                    <img
                                                        src={project.asset}
                                                        alt={project.title}
                                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                                    />
                                                )}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                                                    <span className="text-white text-sm font-medium flex items-center gap-2">
                                                        Visit Website <span className="text-primary">→</span>
                                                    </span>
                                                </div>
                                            </div>

                                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 transition-colors duration-300">{project.title}</h3>
                                            <p className="text-slate-600 dark:text-gray-400 text-sm mb-4 line-clamp-3 transition-colors duration-300">
                                                {project.description}
                                            </p>

                                            <div className="mt-auto flex flex-wrap gap-2">
                                                {project.tech.map((tech, idx) => (
                                                    <span key={idx} className="text-xs border border-slate-200 dark:border-gray-700 rounded-full px-2 py-1 text-slate-500 dark:text-gray-400 transition-colors duration-300">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </TiltCard>
                            </Link>
                        ))}
                    </div>




                </div>

                <Footer />
            </div>
            <ThemeToggle />
        </main>
    );
}
