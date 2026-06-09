"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { motion } from "framer-motion";
import { Users, Target, Zap, ShieldCheck } from "lucide-react";

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
        icon: Zap,
        color: "text-yellow-500"
    },
    {
        title: "Client Centric",
        description: "Your success is our success. We build partnerships, not just projects.",
        icon: Users,
        color: "text-blue-500"
    },
    {
        title: "Result Driven",
        description: "Everything we do is focused on delivering measurable business impact.",
        icon: Target,
        color: "text-green-500"
    },
    {
        title: "Uncompromising Quality",
        description: "We maintain the highest standards of code and design excellence.",
        icon: ShieldCheck,
        color: "text-purple-500"
    }
];

export default function About() {
    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden relative w-full transition-colors duration-300">
            <Navbar />

            <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
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
                <div className="mb-32">
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
                                className="bg-white dark:bg-[#0c0d0d] border border-slate-200 dark:border-white/10 p-10 rounded-3xl flex gap-6 hover:shadow-xl transition-all duration-300 group"
                            >
                                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-center border border-slate-100 dark:border-white/10 group-hover:scale-110 transition-transform">
                                    <value.icon className={`w-8 h-8 ${value.color}`} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{value.title}</h3>
                                    <p className="text-slate-600 dark:text-gray-400 leading-relaxed">{value.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
