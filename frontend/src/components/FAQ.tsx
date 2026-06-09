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
    {
        question: "Do you offer custom software or app development?",
        answer:
            "Yes! Our development team specializes in building custom web applications, mobile apps, and robust backend software architectures tailored to your unique operational requirements.",
    },
    {
        question: "Will I own the website and its content after it's built?",
        answer:
            "Absolutely. Once the project is completed and fully paid for, you retain 100% ownership of your website, its design, the source code, and all associated content.",
    },
    {
        question: "Can you redesign my existing website?",
        answer:
            "Definitely. We frequently help businesses re-platform or completely redesign their existing sites to improve UI/UX, boost loading speeds, and increase conversion rates.",
    },
    {
        question: "What platforms do you use for eCommerce development?",
        answer:
            "We build highly scalable online stores using modern frameworks like Next.js for custom experiences, or robust platforms like Shopify and WooCommerce depending on what best suits your business model.",
    },
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-transparent relative z-10">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                        Frequently Asked{" "}
                        <span className="italic font-serif text-gray-400">
                            Questions
                        </span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Got questions? We've got answers. Here are some of the most common
                        inquiries we receive.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`relative rounded-[14px] overflow-hidden transition-all duration-500 border ${
                                activeIndex === index 
                                ? "border-blue-500/50 bg-[#0a2353] shadow-[0_0_30px_rgba(59,130,246,0.1)]" 
                                : "border-[#202222] bg-[#0c0d0d] hover:bg-[#111]"
                            }`}
                        >
                            {/* Active State Background Glow */}
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div 
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent pointer-events-none" 
                                    />
                                )}
                            </AnimatePresence>

                            <button
                                onClick={() => toggleAccordion(index)}
                                className="relative z-10 w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                            >
                                <span className={`text-[17px] md:text-xl font-bold pr-8 transition-colors duration-300 ${activeIndex === index ? "text-white" : "text-gray-300"}`}>
                                    {faq.question}
                                </span>
                                <div
                                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border ${
                                        activeIndex === index
                                            ? "bg-blue-500/20 text-blue-400 border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                                            : "bg-white/5 text-gray-400 border-[#202222]"
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
                                        className="relative z-10"
                                    >
                                        <div className="px-6 md:px-8 pb-8 text-gray-400 leading-relaxed text-[15px] max-w-3xl">
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
