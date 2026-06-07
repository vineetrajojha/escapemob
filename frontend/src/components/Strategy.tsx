"use client";
import React from "react";
import { motion } from "framer-motion";

const steps = [
    {
        num: "01",
        title: "Strategy",
        desc: "We define your competition and target audience. Discover what is working in your online industry, then design your website accordingly."
    },
    {
        num: "02",
        title: "Design",
        desc: "Color scheme, layout, sitemap, and style. We will bring your brand to life with a one of a kind masterpiece, built just for you."
    },
    {
        num: "03",
        title: "Develop",
        desc: "We turn your ideas into a reality. Your website is placed on a \"development server\" where you get to watch the whole process, live."
    },
    {
        num: "04",
        title: "Support",
        desc: "This is where you go live, to the world. Design, marketing, and maintenance; we'll be at your side for the life of your site."
    }
];

export default function Strategy() {
    return (
        <section className="py-20 bg-transparent relative z-10">
            <div className="container mx-auto px-4 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Our <span className="italic font-serif text-gray-400">Process</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        A clear, structured approach to turning your vision into an incredible digital experience.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative group p-[1px] rounded-[15px] bg-[#0c0d0d] shadow-xl overflow-hidden"
                        >
                            <div className="relative h-full w-full rounded-[14px] border border-[#202222] bg-[#0c0d0d] p-8 flex flex-col items-start transition-colors duration-500 hover:bg-[#111]">
                                {/* Active State Background Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-transparent group-hover:from-blue-500/10 transition-colors duration-500 pointer-events-none" />

                                <div className="text-5xl font-black text-white/5 group-hover:text-blue-400/20 transition-colors duration-500 absolute top-4 right-4">
                                    {step.num}
                                </div>
                                
                                <div className="relative z-10 mt-8">
                                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                        <span className="text-blue-400 text-sm font-mono bg-blue-500/10 px-2 py-1 rounded-md">{step.num}</span>
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed text-[15px]">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
