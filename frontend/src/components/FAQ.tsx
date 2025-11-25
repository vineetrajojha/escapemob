"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "What services do you offer?",
        answer:
            "We offer a comprehensive range of digital marketing services including Creative Campaigns, Media Buying & Planning, Website Design, Social Media Marketing, and Brand Strategy. Our goal is to provide end-to-end solutions for your digital growth.",
    },
    {
        question: "How do you measure campaign success?",
        answer:
            "We believe in data-driven results. We track key performance indicators (KPIs) such as ROI, conversion rates, engagement metrics, and customer acquisition costs. We provide detailed reports to keep you informed every step of the way.",
    },
    {
        question: "Do you work with small businesses?",
        answer:
            "Absolutely! We work with businesses of all sizes, from startups to established enterprises. We tailor our strategies to fit your specific budget and goals, ensuring you get the most value out of your investment.",
    },
    {
        question: "How long does it take to see results?",
        answer:
            "The timeline for results varies depending on the service and your specific goals. For example, paid media campaigns can generate immediate traffic, while SEO and brand building are long-term strategies. We'll provide a realistic timeline during our initial consultation.",
    },
    {
        question: "What is your pricing structure?",
        answer:
            "Our pricing is customized based on the scope of work and your specific needs. We offer project-based pricing as well as monthly retainer models. Contact us for a free consultation and a detailed quote.",
    },
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-background relative z-10">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                        Frequently Asked{" "}
                        <span className="italic font-serif text-muted-foreground">
                            Questions
                        </span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Got questions? We've got answers. Here are some of the most common
                        inquiries we receive.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-border rounded-2xl overflow-hidden bg-card transition-all duration-300 hover:border-primary/50"
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className="text-lg md:text-xl font-semibold text-foreground pr-8">
                                    {faq.question}
                                </span>
                                <div
                                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${activeIndex === index
                                            ? "bg-primary text-primary-foreground"
                                            : "bg-muted text-muted-foreground"
                                        }`}
                                >
                                    {activeIndex === index ? (
                                        <Minus className="w-5 h-5" />
                                    ) : (
                                        <Plus className="w-5 h-5" />
                                    )}
                                </div>
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                                            {faq.answer}
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
};

export default FAQ;
