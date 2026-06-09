"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Briefcase, ArrowRight, CheckCircle2 } from "lucide-react";
import Button from "@/components/Button";

const benefits = [
    "Competitive Salary & Bonuses",
    "Flexible Working Hours",
    "Remote Work Options",
    "Health & Wellness Programs",
    "Continuous Learning & Development",
    "Modern Tech Stack",
    "Collaborative Team Environment",
    "Paid Time Off & Holidays"
];

const positions = [
    {
        id: 1,
        title: "Senior Full Stack Engineer",
        department: "Engineering",
        location: "Remote / Greater Noida",
        type: "Full-Time",
        tags: ["React", "Node.js", "AWS"]
    },
    {
        id: 2,
        title: "UI/UX Designer",
        department: "Design",
        location: "Remote",
        type: "Full-Time",
        tags: ["Figma", "Prototyping", "User Research"]
    },
    {
        id: 3,
        title: "Digital Marketing Specialist",
        department: "Marketing",
        location: "Greater Noida",
        type: "Full-Time",
        tags: ["SEO", "Performance Marketing", "Social Media"]
    }
];

export default function Career() {
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
                        Join Our <span className="italic font-serif text-slate-500 dark:text-muted-foreground">Team</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-xl md:text-2xl text-slate-600 dark:text-muted-foreground leading-relaxed mb-10"
                    >
                        Build the future of digital experiences with a team of passionate creators, engineers, and strategists.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <a href="#openings">
                            <Button variant="primary" className="!px-8 !py-4 text-lg">View Open Positions</Button>
                        </a>
                    </motion.div>
                </div>

                {/* Benefits Section */}
                <div className="mb-32">
                    <div className="bg-slate-50 dark:bg-[#0c0d0d] border border-slate-200 dark:border-white/10 rounded-[40px] p-10 md:p-16">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Why Work With Us?</h2>
                            <p className="text-slate-600 dark:text-gray-400 text-lg">We invest in our people so they can do their best work.</p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {benefits.map((benefit, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="flex items-start gap-3"
                                >
                                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-700 dark:text-gray-300 font-medium">{benefit}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Open Positions */}
                <div id="openings" className="mb-20">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                            <Briefcase size={24} />
                        </div>
                        <h2 className="text-4xl font-bold text-slate-900 dark:text-white">Open Positions</h2>
                    </div>

                    <div className="space-y-6">
                        {positions.map((pos, i) => (
                            <motion.div 
                                key={pos.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group bg-white dark:bg-[#0c0d0d] border border-slate-200 dark:border-white/10 rounded-3xl p-8 hover:shadow-xl hover:border-blue-500/50 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6"
                            >
                                <div>
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="px-3 py-1 bg-slate-100 dark:bg-white/10 rounded-full text-xs font-semibold text-slate-600 dark:text-gray-300 uppercase tracking-wider">
                                            {pos.department}
                                        </span>
                                        <span className="px-3 py-1 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-xs font-semibold uppercase tracking-wider">
                                            {pos.type}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {pos.title}
                                    </h3>
                                    <p className="text-slate-500 dark:text-gray-400">{pos.location}</p>
                                    
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {pos.tags.map((tag, idx) => (
                                            <span key={idx} className="text-xs text-slate-500 dark:text-gray-400 bg-slate-50 dark:bg-[#121314] px-3 py-1.5 rounded-lg border border-slate-100 dark:border-white/5">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex-shrink-0">
                                    <a href="mailto:teamescapemob@gmail.com">
                                        <Button variant="outline" className="group/btn flex items-center gap-2 w-full md:w-auto justify-center">
                                            Apply Now
                                            <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                        </Button>
                                    </a>
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
