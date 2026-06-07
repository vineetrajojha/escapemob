"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";

const locations = [
    "Greater Noida", "Noida", "Delhi", "Mumbai", "Siwan", "Patna", "Kolkata", "Gurgaon", "Ghaziabad"
];

const seoData = [
    {
        category: "Web Design & Development",
        baseKeywords: [
            "Web Designing Company", "Responsive Website Designing", "Website Design Services",
            "Dynamic Website Design", "E-Commerce Website Design", "Custom Website Design",
            "Website Designing & Development", "Best Website Designer", "Web Development Company",
            "PHP Development Company", "Laravel Development Company", "Codeigniter Development Company",
            "Wordpress Development Company", "Software Development Company", "Web Portal Development"
        ]
    },
    {
        category: "Digital Marketing & SEO",
        baseKeywords: [
            "SEO Company", "SEO Services", "SMO Services", "Google Ads Agency",
            "Best Google Ads Company", "Meta Advertisement Services"
        ]
    },
    {
        category: "Software & App Development",
        baseKeywords: [
            "App Development", "Android App Development", "Mobile App Development Company",
            "CRM Software Development Company", "Custom CRM Development",
            "POS Software Development Company", "Best POS Development Company",
            "ERP Portal Development", "B2B & B2C Portal Development", "Job Portal Development",
            "Real Estate Portal Company", "News Portal Development"
        ]
    },
    {
        category: "Training & Final Year Projects",
        baseKeywords: [
            "Web Designing Course", "Web Designing Training", "SEO Course", "SEO Training",
            "Digital Marketing Course", "PHP Training", "Laravel Training", "C++ Training",
            "Html Css Bootstrap Training", "Final Year Projects", "PHP Final Year Projects",
            "BCA Final Year Projects", "MCA Final Year Projects", "B.Tech Learning Projects"
        ]
    }
];

export default function SEOBlock() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-[#0c0d0d] relative z-10 border-t border-white/5">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Service <span className="italic font-serif text-gray-400">Locations</span>
                    </h2>
                    <p className="text-gray-400 max-w-3xl mx-auto text-sm">
                        EscapeMob provides premium digital services across major cities in India. Find specialized services in your area below.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-4 max-w-5xl mx-auto">
                    {seoData.map((section, index) => (
                        <div
                            key={index}
                            className={`border rounded-xl transition-all duration-300 ${
                                activeIndex === index ? "border-white/20 bg-[#080808]" : "border-white/5 bg-[#0c0d0d]"
                            }`}
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none group"
                            >
                                <span className={`text-[15px] md:text-lg font-semibold pr-8 transition-colors ${
                                    activeIndex === index ? "text-white" : "text-gray-400 group-hover:text-white"
                                }`}>
                                    {section.category}
                                </span>
                                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-colors ${
                                    activeIndex === index ? "bg-white/10 border-white/20 text-white" : "bg-transparent border-white/5 text-gray-400"
                                }`}>
                                    {activeIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                                </div>
                            </button>
                            
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 border-t border-white/5 mt-4">
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
                                                {locations.map((city, cityIdx) => (
                                                    <div key={cityIdx} className="space-y-2">
                                                        <h4 className="text-gray-400 text-sm font-bold border-b border-white/5 pb-2 mb-3">{city}</h4>
                                                        <ul className="space-y-1">
                                                            {section.baseKeywords.slice(0, 6).map((keyword, kwIdx) => (
                                                                <li key={kwIdx}>
                                                                    <Link href="#" className="text-gray-400 hover:text-white text-[12px] transition-colors leading-tight block">
                                                                        {keyword} in {city}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
