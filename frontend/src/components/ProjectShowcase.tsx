"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        id: 1,
        title: "Trap Fashion",
        description: "Premium trap-inspired streetwear brand. A complete e-commerce solution with dynamic interactions.",
        asset: "/assets/projects/trapfashion.mov",
        type: "video" as const,
        link: "https://trapforyou.com",
    },
    {
        id: 2,
        title: "SKB Realtech",
        description: "Comprehensive real estate platform for property search, legal guidance, and housing solutions in Greater Noida.",
        asset: "/assets/projects/skbrealtech.mov",
        type: "video" as const,
        link: "https://skbrealtech.in",
    },
    {
        id: 3,
        title: "Navaana Store",
        description: "Youth-driven clothing brand specializing in streetwear, custom merchandise, and limited drops.",
        asset: "/assets/projects/navaanastore.mov",
        type: "video" as const,
        link: "https://navaanastore.com",
    },
    {
        id: 4,
        title: "Vijay Real Estate",
        description: "Real Estate website built for performance and high conversion rates.",
        asset: "/assets/projects/8.png",
        type: "image" as const,
        link: "https://vijayrealestate.co.in",
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
                        <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                            Featured <span className="italic font-serif text-muted-foreground">Projects</span>
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Take a look at some of our recent digital transformations and custom solutions built for businesses worldwide.
                        </p>
                    </div>
                    <Link href="/projects" className="inline-flex items-center gap-2 text-foreground bg-foreground/5 border border-border px-6 py-3 rounded-full hover:bg-foreground/10 transition-colors">
                        View All Projects <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </motion.div>

                <div className="relative w-full overflow-hidden mt-12">
                    {/* Gradient Masks for smooth fade effect at edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

                    <div className="flex animate-scroll hover:[animation-play-state:paused] w-max gap-6 pb-12 pt-4 px-4">
                        {[...projects, ...projects, ...projects].map((project, index) => (
                            <div
                                key={`${project.id}-${index}`}
                                className="relative w-[320px] md:w-[420px] flex-shrink-0 group"
                            >
                                <Link href={project.link} target="_blank" className="block relative aspect-video w-full overflow-hidden rounded-2xl bg-card border border-border shadow-sm hover:shadow-lg transition-all duration-300">
                                    {project.type === "video" ? (
                                        <video src={project.asset} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                    ) : (
                                        <img src={project.asset} alt={project.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                    )}
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                                    
                                    <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                                        <ArrowUpRight className="w-5 h-5 text-primary" />
                                    </div>
                                </Link>
                                
                                <div className="mt-5 px-1">
                                    <h3 className="text-[19px] font-bold text-foreground mb-1">{project.title}</h3>
                                    <p className="text-[15px] text-muted-foreground line-clamp-2 leading-relaxed">{project.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
