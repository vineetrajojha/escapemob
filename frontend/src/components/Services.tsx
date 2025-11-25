"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, MousePointerClick, Bell, FileText } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        icon: <Search size={32} className="text-blue-400" />,
        title: "Search engine optimization",
        description:
            "We optimize your website structure, content, and backlink profile to improve rankings, boost traffic.",
        bg: "bg-blue-500/10",
    },
    {
        icon: <MousePointerClick size={32} className="text-purple-400" />,
        title: "Pay-per-click advertising",
        description:
            "Google Ads to Facebook, we manage your budget efficiently, craft compelling ads, and continuously test.",
        bg: "bg-purple-500/10",
    },
    {
        icon: <Bell size={32} className="text-orange-400" />,
        title: "Social media marketing",
        description:
            "We create scroll-stopping content, manage your platforms, and engage your community to grow.",
        bg: "bg-orange-500/10",
    },
    {
        icon: <FileText size={32} className="text-pink-400" />,
        title: "Content Marketing",
        description:
            "We optimize your website structure, content, and backlink profile to improve rankings, boost traffic.",
        bg: "bg-pink-500/10",
    },
];

export default function Services() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(cardsRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 px-4 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground max-w-lg leading-tight">
                    Smart <span className="italic font-serif">Service</span> <br />
                    <span className="italic font-serif">That</span> Real Impact.
                </h2>
                <button className="bg-primary text-primary-foreground px-6 py-3 rounded-full flex items-center gap-2 mt-6 md:mt-0 hover:bg-primary/90 transition-colors">
                    Let's Contact
                    <span className="bg-background text-primary rounded-full p-1 w-5 h-5 flex items-center justify-center text-xs">
                        ↗
                    </span>
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                    <div
                        key={index}
                        ref={(el) => {
                            if (el) cardsRef.current[index] = el;
                        }}
                        className={`p-8 rounded-3xl ${service.bg} hover:bg-opacity-20 transition-all duration-300 cursor-pointer group border border-transparent hover:border-border`}
                    >
                        <div className="mb-6 w-16 h-16 rounded-2xl bg-background/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                            {service.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-4">
                            {service.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
