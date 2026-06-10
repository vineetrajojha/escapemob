"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { motion } from "framer-motion";
import { Users, Target, Zap, ShieldCheck } from "lucide-react";
import TiltCard from "@/components/TiltCard";

const stats = [
    { label: "Happy Clients", value: "200+" },
    { label: "Projects Delivered", value: "450+" },
    { label: "Years Experience", value: "5+" },
    { label: "Team Members", value: "30+" }
];

const values = [
    {
        title: "Innovation First",
        description: "We constantly push boundaries to deliver cutting-edge digital solutions.",
        icon: Zap
    },
    {
        title: "Client Centric",
        description: "Your success is our success. We build partnerships, not just projects.",
        icon: Users
    },
    {
        title: "Result Driven",
        description: "Everything we do is focused on delivering measurable business impact.",
        icon: Target
    },
    {
        title: "Uncompromising Quality",
        description: "We maintain the highest standards of code and design excellence.",
        icon: ShieldCheck
    }
];

export default function About() {
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
                {/* Hero Section */}
                <div className="text-center mb-24 max-w-4xl mx-auto">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-7xl font-bold mb-8 text-slate-900 dark:text-white"
                    >
                        About <span className="italic font-serif text-slate-500 dark:text-muted-foreground">EscapeMob</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-xl md:text-2xl text-slate-600 dark:text-muted-foreground leading-relaxed"
                    >
                        We are a digital product agency that transforms bold ideas into exceptional digital experiences. We combine strategy, design, and technology to help businesses thrive in the modern world.
                    </motion.p>
                </div>

                {/* Stats Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32"
                >
                    {stats.map((stat, i) => (
                        <div key={i} className="text-center p-8 bg-slate-50 dark:bg-white/5 rounded-3xl border border-slate-100 dark:border-white/10">
                            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2">{stat.value}</h3>
                            <p className="text-slate-500 dark:text-gray-400 font-medium tracking-wide uppercase text-sm">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>

                {/* Core Values Section */}
                <div className="mb-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Our Core Values</h2>
                        <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">The principles that guide our work and define our culture.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {values.map((value, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="h-full"
                            >
                                <TiltCard className="group relative w-full h-full">
                                    <div className="relative h-full w-full rounded-[10px] p-[1px] bg-slate-200 dark:bg-[radial-gradient(circle_at_0%_0%,#ffffff,#0c0d0d)]">
                                        <div className="relative h-full w-full rounded-[9px] border border-slate-100 dark:border-[#202222] bg-white dark:bg-[#0c0d0d] dark:bg-[radial-gradient(circle_280px_at_50%_0%,#2a2a2a,#0c0d0d)] overflow-hidden flex flex-col items-center text-center p-10 transition-colors duration-300">
                                            <div className="flex-shrink-0 w-20 h-20 rounded-full bg-slate-50 dark:bg-white/5 flex items-center justify-center border border-slate-100 dark:border-white/10 group-hover:scale-110 group-hover:bg-slate-100 dark:group-hover:bg-white/10 transition-all duration-300 mb-8">
                                                <value.icon className="w-8 h-8 text-slate-900 dark:text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-300">{value.title}</h3>
                                                <p className="text-slate-600 dark:text-gray-400 leading-relaxed transition-colors duration-300">{value.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </TiltCard>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>

            <Footer />
            </div>
        </main>
    );
}
