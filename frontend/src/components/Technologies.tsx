"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const technologies = [
    { title: "HTML5", desc: "It is the fifth and final major HTML version." },
    { title: "CSS3", desc: "CSS3 adds several new styling features." },
    { title: "Custom Google Font", desc: "Easily Change Fonts." },
    { title: "Bootstrap", desc: "Used for developing responsive websites." },
    { title: "AJAX", desc: "A set of web development techniques." },
    { title: "JavaScript", desc: "One of the core technologies of the web." },
    { title: "Fast Loading", desc: "Optimized for fast loading times." },
    { title: "Mega Menu", desc: "Powerful Mega Menu navigation." },
    { title: "Blog Section", desc: "Integrated robust Blog features." },
    { title: "Multicolor", desc: "Easy to change the main color." },
    { title: "PHP", desc: "Easier to add backend functionality." },
    { title: "Fully Responsive", desc: "Works perfectly on all devices." },
    { title: "Social Widgets", desc: "Simple display for social platforms." },
    { title: "Landing Pages", desc: "Pre-made converting Landing Pages." },
    { title: "Instagram Slider", desc: "Module For Displaying Photos." },
    { title: "Newsletter Popup", desc: "Allow To Display Pop-up Newsletter." },
    { title: "CodeIgniter", desc: "Low memory usage & very fast." },
    { title: "Bootstrap 4", desc: "Highest Bootstrap Framework version." },
    { title: "MERN Stack", desc: "MongoDB, Express, React, Node.js." },
    { title: "MEAN Stack", desc: "MongoDB, Express, Angular, Node.js." }
];

export default function Technologies() {
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
                        Technologies & <span className="italic font-serif text-gray-400">Features</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        We build our projects using the most robust, modern, and reliable tools available in the industry.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: (index % 4) * 0.1 }}
                            className="p-5 rounded-[14px] border border-[#202222] bg-[#0c0d0d] hover:bg-[#111] hover:border-blue-500/30 transition-all duration-300 group flex flex-col"
                        >
                            <h3 className="text-[16px] font-bold text-white mb-2 flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform" />
                                {tech.title}
                            </h3>
                            <p className="text-gray-400 text-[13px] leading-relaxed pl-6">
                                {tech.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
