"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Briefcase, ArrowRight, CheckCircle2, X } from "lucide-react";
import Button from "@/components/Button";
import TiltCard from "@/components/TiltCard";
import { useState } from "react";

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
        title: "Web Development Intern",
        department: "Engineering",
        location: "Remote / Hybrid",
        type: "Internship",
        tags: ["React", "HTML/CSS", "JavaScript"]
    },
    {
        id: 2,
        title: "Graphic Designer Intern",
        department: "Design",
        location: "Remote",
        type: "Internship",
        tags: ["Figma", "Adobe CC", "Creative"]
    },
    {
        id: 3,
        title: "Junior Web Developer",
        department: "Engineering",
        location: "Remote / Greater Noida",
        type: "Full-Time",
        tags: ["Next.js", "Tailwind", "Frontend"]
    },
    {
        id: 4,
        title: "Junior Software Developer",
        department: "Engineering",
        location: "Remote / Greater Noida",
        type: "Full-Time",
        tags: ["Node.js", "Databases", "Backend"]
    }
];

export default function Career() {
    const [selectedJob, setSelectedJob] = useState<string | null>(null);

    const handleApply = (jobTitle: string) => {
        setSelectedJob(jobTitle);
    };

    const closeModal = () => {
        setSelectedJob(null);
    };

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
                        Join Our <span className="italic font-serif text-slate-500 dark:text-muted-foreground">Team</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-xl md:text-2xl text-slate-600 dark:text-muted-foreground leading-relaxed"
                    >
                        Build the future of digital experiences with a team of passionate creators, engineers, and strategists.
                    </motion.p>
                </div>

                {/* Benefits Section */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Why Work With Us?</h2>
                        <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">We invest in our people so they can do their best work.</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((benefit, i) => (
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
                                        <div className="relative h-full w-full rounded-[9px] border border-slate-100 dark:border-[#202222] bg-white dark:bg-[#0c0d0d] dark:bg-[radial-gradient(circle_280px_at_50%_0%,#2a2a2a,#0c0d0d)] overflow-hidden flex flex-col p-6 transition-colors duration-300 items-center text-center justify-center min-h-[160px]">
                                            <CheckCircle2 className="w-8 h-8 text-slate-900 dark:text-white mb-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                            <span className="text-slate-700 dark:text-gray-300 font-medium">{benefit}</span>
                                        </div>
                                    </div>
                                </TiltCard>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Open Positions */}
                <div id="openings" className="mb-10">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                            <Briefcase size={24} />
                        </div>
                        <h2 className="text-4xl font-bold text-slate-900 dark:text-white">Open Positions</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {positions.map((pos, i) => (
                            <motion.div 
                                key={pos.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative h-full"
                            >
                                {/* Glowing background on hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 rounded-[30px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                
                                <div className="relative h-full bg-white dark:bg-[#0c0d0d] dark:bg-[radial-gradient(ellipse_at_top,#1a1a1a,#0c0d0d)] border border-slate-200 dark:border-white/10 rounded-3xl p-8 hover:border-blue-500/30 transition-colors duration-300 flex flex-col shadow-sm">
                                    <div className="flex flex-wrap items-center gap-3 mb-6">
                                        <span className="px-3 py-1 bg-slate-100 dark:bg-white/5 rounded-full text-xs font-semibold text-slate-600 dark:text-gray-300 uppercase tracking-wider">
                                            {pos.department}
                                        </span>
                                        <span className="px-3 py-1 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-xs font-semibold uppercase tracking-wider">
                                            {pos.type}
                                        </span>
                                    </div>
                                    
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {pos.title}
                                    </h3>
                                    <p className="text-slate-500 dark:text-gray-400 mb-8 flex-grow">{pos.location}</p>
                                    
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {pos.tags.map((tag, idx) => (
                                            <span key={idx} className="text-xs text-slate-500 dark:text-gray-400 bg-slate-50 dark:bg-white/5 px-3 py-1.5 rounded-lg border border-slate-100 dark:border-white/5">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <Button onClick={() => handleApply(pos.title)} variant="outline" className="w-full justify-center group/btn flex items-center gap-2 mt-auto">
                                        Apply Now
                                        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-12 mb-20 text-slate-600 dark:text-gray-400 text-lg">
                    Have any queries? Email us at <a href="mailto:career@escapemob.com" className="text-primary hover:underline font-semibold">career@escapemob.com</a>
                </div>

                {/* Application Modal */}
                {selectedJob && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white dark:bg-[#0c0d0d] border border-slate-200 dark:border-white/10 rounded-3xl p-8 max-w-lg w-full relative shadow-2xl max-h-[90vh] overflow-y-auto"
                        >
                            <button onClick={closeModal} className="absolute top-6 right-6 text-slate-500 hover:text-slate-700 dark:text-gray-400 dark:hover:text-white transition-colors">
                                <X size={24} />
                            </button>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 pr-8">Apply for {selectedJob}</h3>
                            <p className="text-slate-600 dark:text-gray-400 mb-6">Please fill out the form below to submit your application.</p>
                            
                            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Application submitted!"); closeModal(); }}>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-1">Full Name</label>
                                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-1">Email Address</label>
                                    <input required type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all" placeholder="john@example.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-1">Portfolio / LinkedIn URL</label>
                                    <input type="url" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all" placeholder="https://" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-1">Resume (PDF, DOCX)</label>
                                    <input required type="file" accept=".pdf,.doc,.docx" className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-slate-900 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-1">Why are you a good fit?</label>
                                    <textarea required rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all" placeholder="Tell us about yourself..."></textarea>
                                </div>
                                <Button variant="primary" className="w-full justify-center !py-3">Submit Application</Button>
                            </form>

                            <div className="mt-6 text-center text-sm text-slate-500 dark:text-gray-400">
                                For any queries, email <a href="mailto:career@escapemob.com" className="text-primary hover:underline">career@escapemob.com</a>
                            </div>
                        </motion.div>
                    </div>
                )}
            </div>

            <Footer />
            </div>
        </main>
    );
}
