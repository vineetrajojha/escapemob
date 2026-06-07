"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "E-Commerce Re-platforming",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        link: "#"
    },
    {
        title: "FinTech Mobile App",
        category: "App Development",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        link: "#"
    },
    {
        title: "Healthcare Portal",
        category: "UI/UX Design",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        link: "#"
    },
    {
        title: "Real Estate SaaS",
        category: "Custom Software",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        link: "#"
    }
];

export default function ProjectShowcase() {
    return (
        <section className="py-20 bg-transparent relative z-10" id="projects">
            <div className="container mx-auto px-4 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
                >
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Featured <span className="italic font-serif text-gray-400">Projects</span>
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Take a look at some of our recent digital transformations and custom solutions built for businesses worldwide.
                        </p>
                    </div>
                    <Link href="/projects" className="inline-flex items-center gap-2 text-white bg-white/5 border border-white/10 px-6 py-3 rounded-full hover:bg-white/10 transition-colors">
                        View All Projects <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c0d0d] aspect-[4/3] flex flex-col justify-end"
                        >
                            {/* Project Image */}
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80"
                            />
                            
                            {/* Dark Gradient Overlay for text readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                            <div className="relative z-10 p-8 transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                                <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase mb-2 block">
                                    {project.category}
                                </span>
                                <div className="flex justify-between items-center">
                                    <h3 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h3>
                                    <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform scale-50 group-hover:scale-100">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                            <Link href={project.link} className="absolute inset-0 z-20"><span className="sr-only">View {project.title}</span></Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
