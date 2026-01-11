"use client";
import React from "react";
import Button from "./Button";
import TiltCard from "./TiltCard";
import { motion } from "framer-motion";
import { useState } from "react";
import { submitContactForm } from "@/app/actions";
import { Loader2 } from "lucide-react";

const Contact = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

    async function handleSubmit(formData: FormData) {
        setIsLoading(true);
        setMessage(null);

        const result = await submitContactForm(formData);

        if (result.error) {
            setMessage({ text: result.error, type: 'error' });
        } else if (result.success) {
            setMessage({ text: result.success, type: 'success' });
            const form = document.getElementById('contact-form') as HTMLFormElement;
            if (form) form.reset();
        }
        setIsLoading(false);
    }

    return (
        <section className="py-20 md:py-32 bg-background relative z-10 overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" as const }}
                        className="text-center lg:text-left"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                            Talk to <br />
                            <span className="italic font-serif text-muted-foreground">
                                Real Humans
                            </span>
                        </h2>
                        <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-lg mx-auto lg:mx-0">
                            No bots, no scripts, just real experts ready to help you grow.
                        </p>

                        <div className="hidden lg:block space-y-4 text-muted-foreground">
                            <p>
                                <strong>Email:</strong> teamescapemob@gmail.com
                            </p>
                            <p>
                                <strong>Phone:</strong> +91 97175 04789
                            </p>
                            <p>
                                <strong>Address:</strong> Greater Noida, Uttar Pradesh, India
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Form with TiltCard Style */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" as const }}
                        className="w-full"
                    >
                        <TiltCard className="group relative w-full">
                            {/* Outer Wrapper (Border Gradient & Dot) */}
                            <div className="relative h-full w-full rounded-[10px] p-[1px] bg-[radial-gradient(circle_at_0%_0%,#ffffff,#0c0d0d)]">
                                {/* Animated Dot */}
                                <motion.div
                                    className="absolute w-[5px] h-[5px] bg-white rounded-full shadow-[0_0_10px_#ffffff] z-20"
                                    animate={{
                                        top: [
                                            "10%",
                                            "10%",
                                            "calc(100% - 30px)",
                                            "calc(100% - 30px)",
                                            "10%",
                                        ],
                                        right: [
                                            "10%",
                                            "calc(100% - 35px)",
                                            "calc(100% - 35px)",
                                            "10%",
                                            "10%",
                                        ],
                                    }}
                                    transition={{
                                        duration: 6,
                                        ease: "linear",
                                        repeat: Infinity,
                                    }}
                                />

                                {/* Inner Card */}
                                <div className="relative h-full w-full rounded-[9px] border border-[#202222] bg-[#0c0d0d] bg-[radial-gradient(circle_280px_at_0%_0%,#444444,#0c0d0d)] overflow-hidden flex flex-col p-8 md:p-10">
                                    {/* Ray */}
                                    <div className="absolute top-0 left-0 w-[220px] h-[45px] bg-[#c7c7c7] opacity-40 blur-[10px] rounded-[100px] rotate-[40deg] origin-[10%_0%] shadow-[0_0_50px_#fff] pointer-events-none" />

                                    {/* Lines */}
                                    <div className="absolute top-[10%] left-0 w-full h-[1px] bg-gradient-to-r from-[#888888] via-[#1d1f1f] to-[#1d1f1f] opacity-50 pointer-events-none" />
                                    <div className="absolute bottom-[10%] left-0 w-full h-[1px] bg-[#2c2c2c] opacity-50 pointer-events-none" />
                                    <div className="absolute left-[10%] top-0 w-[1px] h-full bg-gradient-to-b from-[#747474] via-[#222424] to-[#222424] opacity-50 pointer-events-none" />
                                    <div className="absolute right-[10%] top-0 w-[1px] h-full bg-[#2c2c2c] opacity-50 pointer-events-none" />

                                    {/* Form Content */}
                                    <div className="relative z-10">
                                        <form id="contact-form" action={handleSubmit} className="space-y-6">
                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label
                                                        htmlFor="name"
                                                        className="text-sm font-medium text-gray-300"
                                                    >
                                                        Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        required
                                                        placeholder="John Doe"
                                                        className="w-full px-4 py-3 rounded-lg bg-[#1c1c1c] border border-[#333] focus:border-white focus:ring-1 focus:ring-white outline-none transition-all text-white placeholder:text-gray-500 disabled:opacity-50"
                                                        disabled={isLoading}
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label
                                                        htmlFor="email"
                                                        className="text-sm font-medium text-gray-300"
                                                    >
                                                        Email
                                                    </label>
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        required
                                                        placeholder="john@example.com"
                                                        className="w-full px-4 py-3 rounded-lg bg-[#1c1c1c] border border-[#333] focus:border-white focus:ring-1 focus:ring-white outline-none transition-all text-white placeholder:text-gray-500 disabled:opacity-50"
                                                        disabled={isLoading}
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label
                                                    htmlFor="company"
                                                    className="text-sm font-medium text-gray-300"
                                                >
                                                    Company (Optional)
                                                </label>
                                                <input
                                                    type="text"
                                                    id="company"
                                                    name="company"
                                                    placeholder="Your Company Ltd."
                                                    className="w-full px-4 py-3 rounded-lg bg-[#1c1c1c] border border-[#333] focus:border-white focus:ring-1 focus:ring-white outline-none transition-all text-white placeholder:text-gray-500 disabled:opacity-50"
                                                    disabled={isLoading}
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <label
                                                    htmlFor="message"
                                                    className="text-sm font-medium text-gray-300"
                                                >
                                                    Message
                                                </label>
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    required
                                                    rows={4}
                                                    placeholder="Tell us about your project..."
                                                    className="w-full px-4 py-3 rounded-lg bg-[#1c1c1c] border border-[#333] focus:border-white focus:ring-1 focus:ring-white outline-none transition-all text-white placeholder:text-gray-500 resize-none disabled:opacity-50"
                                                    disabled={isLoading}
                                                />
                                            </div>

                                            <Button
                                                variant="primary"
                                                type="submit"
                                                className="w-full !py-4 text-lg mt-4 justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                                                disabled={isLoading}
                                            >
                                                {isLoading ? (
                                                    <span className="flex items-center gap-2">
                                                        <Loader2 className="animate-spin" size={20} />
                                                        Sending...
                                                    </span>
                                                ) : (
                                                    "Send Message"
                                                )}
                                            </Button>
                                            {message && (
                                                <p className={`text-center text-sm ${message.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                                                    {message.text}
                                                </p>
                                            )}
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </TiltCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
