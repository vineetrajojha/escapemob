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
import { FaTwitter, FaLinkedin, FaGlobe } from "react-icons/fa";

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
            {/* Fixed Background Elements (Grid & Glow) */}
            <div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10" />
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)`,
                        backgroundSize: "20px 20px",
                        backgroundPosition: "0 0, 0 0",
                        opacity: 0.05,
                        maskImage: `repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px), radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)`,
                        WebkitMaskImage: `repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px), repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px), radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)`,
                        maskComposite: "intersect",
                        WebkitMaskComposite: "source-in",
                    }}
                />
            </div>

            <div className="relative z-10">
                <Navbar />

                <div className="pt-32 pb-16 lg:pt-40 lg:pb-20 px-4 max-w-7xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-20">
                        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white">
                            Our <span className="italic font-serif text-slate-500 dark:text-muted-foreground">Projects</span>
                        </h1>
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

                    {/* Tech Lead Section */}
                    <div className="mb-20 mt-32 max-w-4xl mx-auto text-center relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 opacity-10 dark:opacity-5 pointer-events-none">
                            <span className="text-[12rem] font-serif leading-none">"</span>
                        </div>
                        <p className="text-3xl md:text-4xl lg:text-5xl font-medium leading-relaxed text-slate-900 dark:text-white mb-12 relative z-10">
                            Leading the technological vision and execution at EscapeMob. Delivering high-impact digital solutions for modern businesses.
                        </p>
                        
                        <div className="flex flex-col items-center justify-center relative z-10">
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">— Vineet Raj Ojha</h3>
                            <p className="text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-widest text-sm mt-2 mb-8">Tech Head</p>
                            
                            <div className="flex items-center gap-6">
                                <a href="https://twitter.com/vineetcres" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-600 dark:text-gray-400 hover:bg-blue-50 hover:text-blue-500 dark:hover:bg-blue-500/10 dark:hover:text-blue-400 transition-all duration-300">
                                    <FaTwitter className="w-5 h-5" />
                                </a>
                                <a href="https://linkedin.com/in/vineetrajojha" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-600 dark:text-gray-400 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-600/10 dark:hover:text-blue-500 transition-all duration-300">
                                    <FaLinkedin className="w-5 h-5" />
                                </a>
                                <a href="https://vineetraj.tech" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-600 dark:text-gray-400 hover:bg-green-50 hover:text-green-500 dark:hover:bg-green-500/10 dark:hover:text-green-400 transition-all duration-300">
                                    <FaGlobe className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
            <ThemeToggle />
        </main>
    );
}
