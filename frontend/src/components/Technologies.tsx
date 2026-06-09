"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
    Code2, Palette, Type, Layout, RefreshCw, Code, 
    Zap, Menu, BookOpen, Paintbrush, Server, Smartphone, 
    Share2, FileText, Image, Mail, Flame, Box, Layers, Hexagon 
} from "lucide-react";

const technologies = [
    { title: "HTML5", desc: "It is the fifth and final major HTML version.", Icon: Code2 },
    { title: "CSS3", desc: "CSS3 adds several new styling features.", Icon: Palette },
    { title: "Custom Google Font", desc: "Easily Change Fonts.", Icon: Type },
    { title: "Bootstrap", desc: "Used for developing responsive websites.", Icon: Layout },
    { title: "AJAX", desc: "A set of web development techniques.", Icon: RefreshCw },
    { title: "JavaScript", desc: "One of the core technologies of the web.", Icon: Code },
    { title: "Fast Loading", desc: "Optimized for fast loading times.", Icon: Zap },
    { title: "Mega Menu", desc: "Powerful Mega Menu navigation.", Icon: Menu },
    { title: "Blog Section", desc: "Integrated robust Blog features.", Icon: BookOpen },
    { title: "Multicolor", desc: "Easy to change the main color.", Icon: Paintbrush },
    { title: "PHP", desc: "Easier to add backend functionality.", Icon: Server },
    { title: "Fully Responsive", desc: "Works perfectly on all devices.", Icon: Smartphone },
    { title: "Social Widgets", desc: "Simple display for social platforms.", Icon: Share2 },
    { title: "Landing Pages", desc: "Pre-made converting Landing Pages.", Icon: FileText },
    { title: "Instagram Slider", desc: "Module For Displaying Photos.", Icon: Image },
    { title: "Newsletter Popup", desc: "Allow To Display Pop-up Newsletter.", Icon: Mail },
    { title: "CodeIgniter", desc: "Low memory usage & very fast.", Icon: Flame },
    { title: "Bootstrap 4", desc: "Highest Bootstrap Framework version.", Icon: Box },
    { title: "MERN Stack", desc: "MongoDB, Express, React, Node.js.", Icon: Layers },
    { title: "MEAN Stack", desc: "MongoDB, Express, Angular, Node.js.", Icon: Hexagon }
];

export default function Technologies() {
    return (
        <section className="py-20 bg-transparent relative z-10">
            <style dangerouslySetInnerHTML={{ __html: `
                .tech-parent {
                    width: 100%;
                    height: 250px;
                    perspective: 1000px;
                }

                .tech-card {
                    height: 100%;
                    border-radius: 30px;
                    background: #1c1c26;
                    border: 1px solid #27272a;
                    transition: all 0.5s ease-in-out;
                    transform-style: preserve-3d;
                    box-shadow: 0px 10px 20px -5px rgba(0,0,0,0.1);
                    position: relative;
                }

                .tech-glass {
                    transform-style: preserve-3d;
                    position: absolute;
                    inset: 8px;
                    border-radius: 25px;
                    border-top-right-radius: 100%;
                    background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%);
                    transform: translate3d(0px, 0px, 25px);
                    border-left: 1px solid rgba(255, 255, 255, 0.1);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    transition: all 0.5s ease-in-out;
                    pointer-events: none;
                }

                .tech-content {
                    padding: 60px 30px 0px 30px;
                    transform: translate3d(0, 0, 26px);
                }

                .tech-title {
                    display: block;
                    color: #ffffff;
                    font-weight: 900;
                    font-size: 20px;
                }

                .tech-text {
                    display: block;
                    color: #9ca3af;
                    font-size: 14px;
                    margin-top: 15px;
                    line-height: 1.5;
                }

                .tech-logo {
                    position: absolute;
                    right: 0;
                    top: 0;
                    transform-style: preserve-3d;
                }

                .tech-logo .tech-circle {
                    display: block;
                    position: absolute;
                    aspect-ratio: 1;
                    border-radius: 50%;
                    top: 0;
                    right: 0;
                    box-shadow: -5px 5px 15px 0px rgba(0,0,0,0.1);
                    background: rgba(99, 102, 241, 0.15); /* Hardcoded to match dark mode appearance perfectly in light mode */
                    transition: all 0.5s ease-in-out;
                    will-change: transform;
                }

                .tech-logo .tech-circle1 { width: 140px; transform: translate3d(0, 0, 20px); top: 8px; right: 8px; }
                .tech-logo .tech-circle2 { width: 110px; transform: translate3d(0, 0, 40px); top: 10px; right: 10px; transition-delay: 0.1s; }
                .tech-logo .tech-circle3 { width: 80px; transform: translate3d(0, 0, 60px); top: 15px; right: 15px; transition-delay: 0.2s; }
                .tech-logo .tech-circle4 { width: 50px; transform: translate3d(0, 0, 80px); top: 20px; right: 20px; transition-delay: 0.3s; }
                .tech-logo .tech-circle5 { 
                    width: 34px; 
                    transform: translate3d(0, 0, 100px); 
                    top: 25px; 
                    right: 25px; 
                    display: grid; 
                    place-content: center; 
                    transition-delay: 0.4s; 
                    background: #6366f1; /* Hardcoded solid primary color */
                    color: #ffffff; /* Hardcoded white icon color */
                }

                .tech-parent:hover .tech-card {
                    transform: rotate3d(1, 1, 0, 15deg);
                    box-shadow: 0px 25px 30px 0px rgba(0,0,0,0.2);
                    border-color: #6366f1;
                }

                .tech-parent:hover .tech-card .tech-logo .tech-circle2 { transform: translate3d(0, 0, 50px); }
                .tech-parent:hover .tech-card .tech-logo .tech-circle3 { transform: translate3d(0, 0, 70px); }
                .tech-parent:hover .tech-card .tech-logo .tech-circle4 { transform: translate3d(0, 0, 90px); }
                .tech-parent:hover .tech-card .tech-logo .tech-circle5 { transform: translate3d(0, 0, 110px); }
            `}} />
            
            <div className="container mx-auto px-4 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                        Technologies & <span className="italic font-serif text-muted-foreground">Features</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        We build our projects using the most robust, modern, and reliable tools available in the industry.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {technologies.map((tech, index) => {
                        const Icon = tech.Icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: (index % 4) * 0.1 }}
                            >
                                <div className="tech-parent group">
                                    <div className="tech-card">
                                        <div className="tech-logo">
                                            <span className="tech-circle tech-circle1" />
                                            <span className="tech-circle tech-circle2" />
                                            <span className="tech-circle tech-circle3" />
                                            <span className="tech-circle tech-circle4" />
                                            <span className="tech-circle tech-circle5">
                                                <Icon className="w-4 h-4" />
                                            </span>
                                        </div>
                                        <div className="tech-glass" />
                                        <div className="tech-content">
                                            <span className="tech-title">{tech.title}</span>
                                            <span className="tech-text">{tech.desc}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
