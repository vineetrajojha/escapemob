"use client";
import React from "react";
import { motion } from "framer-motion";

const reviews = [
    {
        id: 1,
        name: "Sarah Jenkins",
        rating: 5,
        quote:
            "EscapeMob transformed our digital presence completely. Their attention to detail and creative approach is unmatched in the industry.",
    },
    {
        id: 2,
        name: "Michael Chen",
        rating: 5,
        quote:
            "Working with the team was a breeze. They understood our vision immediately and delivered a website that exceeded our expectations.",
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        rating: 5,
        quote:
            "The ROI we've seen since launching our new campaign with EscapeMob has been incredible. Highly recommend their services!",
    },
];

const Testimonials = () => {
    return (
        <section className="relative z-10 w-full overflow-hidden bg-[#0c0d0d] pt-12 pb-20">
            {/* Dark Container */}
            <div className="relative w-full px-4 md:px-[10%]">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" as const }}
                    className="container mx-auto px-4 mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Client <span className="italic font-serif text-gray-400">Stories</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Don't just take our word for it. Here's what our partners have to say
                        about working with us.
                    </p>
                </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                <div className="relative w-full overflow-hidden">
                    {/* Gradient Masks for smooth fade effect at edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

                    <div className="flex animate-scroll hover:[animation-play-state:paused] w-max">
                        {/* Duplicate the reviews to create a seamless loop */}
                        {[...reviews, ...reviews, ...reviews, ...reviews].map(
                            (review, index) => (
                                <div
                                    key={`${review.id}-${index}`}
                                    className="relative group w-[320px] md:w-[420px] flex-shrink-0 mx-4 p-[1px] rounded-[15px] bg-[#0c0d0d] shadow-xl overflow-hidden"
                                >
                                    <div className="relative h-full w-full rounded-[14px] border border-[#202222] bg-[#0c0d0d] bg-[#0c0d0d] p-8 flex flex-col justify-between">
                                        {/* Light Ray Effect */}
                                        <div className="absolute top-0 left-0 w-[60px] h-[15px] bg-[#c7c7c7] opacity-30 blur-[8px] rounded-full rotate-[40deg] origin-[10%_0%] shadow-[0_0_20px_#fff]" />
                                        
                                        {/* Background Glow */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
                                        
                                        <div className="relative z-10">
                                            <div className="flex mb-6 text-gray-300">
                                                {[...Array(review.rating)].map((_, i) => (
                                                    <svg
                                                        key={i}
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                        className="w-5 h-5 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                ))}
                                            </div>
                                            <blockquote className="text-[15px] md:text-lg mb-8 leading-relaxed text-gray-300 font-light">
                                                {review.quote}
                                            </blockquote>
                                        </div>
                                        <div className="relative z-10 flex items-center mt-auto border-t border-[#202222] pt-6">
                                            <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white font-bold text-lg mr-4">
                                                {review.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="font-semibold text-white tracking-wide">
                                                    {review.name}
                                                </p>
                                                <p className="text-[13px] text-[#EBEBEB]/60 mt-0.5 tracking-wider uppercase">Client</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
