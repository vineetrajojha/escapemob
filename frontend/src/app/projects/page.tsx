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

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden relative w-full transition-colors duration-300">
            <div className="relative z-10">
                <Navbar />

                <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
                    {/* Header / Tech Head Section */}
                    <div className="text-center mb-20">
                        <h1 className="text-5xl md:text-7xl font-bold mb-8">
                            Our <span className="italic font-serif text-muted-foreground">Projects</span>
                        </h1>
                        <div className="flex flex-col items-center justify-center">
                            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg border-4 border-background overflow-hidden relative">
                                <img src="/assets/vineet-raj.png" alt="Vineet Raj" className="w-full h-full object-cover" />
                            </div>
                            <h2 className="text-2xl font-bold mb-1">Vineet Raj</h2>
                            <p className="text-muted-foreground uppercase tracking-widest text-sm font-semibold">Tech Head</p>
                            <p className="text-muted-foreground max-w-2xl mt-6 text-lg">
                                Leading the technological vision and execution at EscapeMob. Delivering high-impact digital solutions for modern businesses.
                            </p>
                        </div>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <TiltCard key={i} className="group relative w-full h-full min-h-[300px]">
                                <div className="relative h-full w-full rounded-[10px] p-[1px] bg-[radial-gradient(circle_at_0%_0%,#ffffff,#0c0d0d)]">
                                    <div className="relative h-full w-full rounded-[9px] border border-[#202222] bg-[#0c0d0d] bg-[radial-gradient(circle_280px_at_50%_0%,#2a2a2a,#0c0d0d)] overflow-hidden flex flex-col p-6">
                                        <div className="w-full h-40 bg-gray-800/50 rounded-lg mb-6 flex items-center justify-center">
                                            <span className="text-gray-600 font-mono text-sm">Project Preview {i}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2">Project Name {i}</h3>
                                        <p className="text-gray-400 text-sm mb-4">
                                            A sophisticated digital solution built with cutting-edge technologies.
                                        </p>
                                        <div className="mt-auto flex gap-2">
                                            <span className="text-xs border border-gray-700 rounded-full px-2 py-1 text-gray-400">React</span>
                                            <span className="text-xs border border-gray-700 rounded-full px-2 py-1 text-gray-400">Next.js</span>
                                            <span className="text-xs border border-gray-700 rounded-full px-2 py-1 text-gray-400">GSAP</span>
                                        </div>
                                    </div>
                                </div>
                            </TiltCard>
                        ))}
                    </div>

                    {/* Contact Section */}
                    <div className="bg-card/50 backdrop-blur-md border border-white/10 rounded-2xl p-12 text-center md:text-left">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                    Ready to <span className="italic font-serif text-muted-foreground">Build?</span>
                                </h2>
                                <p className="text-muted-foreground text-lg mb-8">
                                    Get in touch with our tech team directly. Let's discuss your next big project.
                                </p>
                            </div>
                            <div className="flex flex-col gap-6 md:items-end">
                                <div className="flex items-center gap-4 bg-background/50 p-4 rounded-xl border border-white/5 w-full md:w-auto min-w-[300px]">
                                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                    </div>
                                    <div className="text-left">
                                        <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Call Us</p>
                                        <p className="text-lg font-bold">+91 97175 04789</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 bg-background/50 p-4 rounded-xl border border-white/5 w-full md:w-auto min-w-[300px]">
                                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                                    </div>
                                    <div className="text-left">
                                        <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Email Us</p>
                                        <p className="text-lg font-bold">teamescapemob@gmail.com</p>
                                    </div>
                                </div>
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
