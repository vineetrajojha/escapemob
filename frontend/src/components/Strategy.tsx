"use client";
import React from "react";
import { motion } from "framer-motion";

const steps = [
    {
        num: "01",
        title: "Strategy",
        desc: "We define your competition and target audience. Discover what is working in your online industry, then design your website accordingly.",
        img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=400&q=80"
    },
    {
        num: "02",
        title: "Design",
        desc: "Color scheme, layout, sitemap, and style. We will bring your brand to life with a one of a kind masterpiece, built just for you.",
        img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=400&q=80"
    },
    {
        num: "03",
        title: "Develop",
        desc: "We turn your ideas into a reality. Your website is placed on a \"development server\" where you get to watch the whole process, live.",
        img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80"
    },
    {
        num: "04",
        title: "Support",
        desc: "This is where you go live, to the world. Design, marketing, and maintenance; we'll be at your side for the life of your site.",
        img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80"
    }
];

export default function Strategy() {
    return (
        <section className="py-24 bg-transparent relative z-10 overflow-hidden">
            {/* SVG Defs for Marker */}
            <svg className="hidden">
              <defs>
                <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                  <path d="M 0 0 L 10 5 L 0 10 z" className="fill-border" />
                </marker>
              </defs>
            </svg>

            <div className="container mx-auto px-4 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                        Our <span className="italic font-serif text-muted-foreground">Process</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        A clear, structured approach to turning your vision into an incredible digital experience.
                    </p>
                </motion.div>

                <div className="relative">
                    {steps.map((step, index) => {
                        const isEven = index % 2 === 1;
                        const isLast = index === steps.length - 1;

                        return (
                            <motion.div 
                                key={index} 
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                                className={`flex flex-col md:flex-row items-center justify-center ${!isLast ? 'mb-24 md:mb-32' : ''} relative`}
                            >
                                {/* Left Column */}
                                <div className={`w-full md:w-[40%] flex flex-col ${isEven ? 'md:items-end md:text-right order-3 md:order-1' : 'md:items-start md:text-left order-1 md:order-1'} items-center text-center px-4 z-10`}>
                                    {isEven ? (
                                        <p className="text-muted-foreground text-lg leading-relaxed max-w-sm mt-6 md:mt-0">{step.desc}</p>
                                    ) : (
                                        <div className="flex items-baseline justify-center md:justify-start mb-6 md:mb-0">
                                            <span className="text-7xl md:text-8xl font-bold text-primary mr-3">{step.num}</span>
                                            <h3 className="text-4xl md:text-5xl font-light text-foreground">{step.title}</h3>
                                        </div>
                                    )}
                                </div>

                                {/* Center Column */}
                                <div className="w-full md:w-[20%] flex justify-center relative z-10 shrink-0 order-2 md:order-2">
                                    <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-border bg-card shadow-[0_0_30px_rgba(0,0,0,0.1)] relative flex items-center justify-center p-2 group">
                                        <div className="w-full h-full rounded-full overflow-hidden relative">
                                            <img src={step.img} alt={step.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                        </div>
                                    </div>

                                    {/* Connection Line */}
                                    {!isLast && (
                                        <div className="hidden md:block absolute top-[100%] w-32 h-32 pointer-events-none -z-10"
                                             style={{ [isEven ? 'right' : 'left']: '50%' }}>
                                            {isEven ? (
                                                <svg width="128" height="128" viewBox="0 0 128 128" fill="none">
                                                    <path d="M 128 0 C 0 0, 0 128, 128 128" stroke="currentColor" className="text-border" strokeWidth="2" strokeDasharray="6 6" markerEnd="url(#arrow)" />
                                                </svg>
                                            ) : (
                                                <svg width="128" height="128" viewBox="0 0 128 128" fill="none">
                                                    <path d="M 0 0 C 128 0, 128 128, 0 128" stroke="currentColor" className="text-border" strokeWidth="2" strokeDasharray="6 6" markerEnd="url(#arrow)" />
                                                </svg>
                                            )}
                                        </div>
                                    )}
                                </div>

                                {/* Right Column */}
                                <div className={`w-full md:w-[40%] flex flex-col ${isEven ? 'md:items-start md:text-left order-1 md:order-3' : 'md:items-end md:text-right order-3 md:order-3'} items-center text-center px-4 z-10`}>
                                    {isEven ? (
                                        <div className="flex items-baseline justify-center md:justify-start mb-6 md:mb-0">
                                            <h3 className="text-4xl md:text-5xl font-light text-foreground mr-3">{step.title}</h3>
                                            <span className="text-7xl md:text-8xl font-bold text-primary">{step.num}</span>
                                        </div>
                                    ) : (
                                        <p className="text-muted-foreground text-lg leading-relaxed max-w-sm mt-6 md:mt-0">{step.desc}</p>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
