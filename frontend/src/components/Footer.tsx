"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Instagram, Youtube, Facebook, Twitter } from "lucide-react";
import NewsletterForm from "./NewsletterForm";
import { motion } from "framer-motion";

export default function Footer() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" as const },
        },
    };

    return (
        <footer className="pt-24 pb-12 px-4 border-t border-white/10 bg-[#0c0d0d] overflow-hidden">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-8 mb-20"
            >
                {/* Brand & Contact */}
                <motion.div variants={itemVariants} className="col-span-1 md:col-span-1 lg:col-span-3">
                    <div className="mb-8">
                        <Image
                            src="/logo.png"
                            alt="EscapeMob"
                            width={140}
                            height={45}
                            className="h-12 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                        />
                    </div>
                    <div className="space-y-6 text-gray-400 text-[14px]">
                        <div>
                            <p className="font-semibold text-foreground mb-2 tracking-wide uppercase text-[12px]">Office</p>
                            <p className="leading-relaxed">
                                Greater Noida<br />
                                Uttar Pradesh, India 201308
                            </p>
                        </div>
                        <div>
                            <p className="font-semibold text-foreground mb-2 tracking-wide uppercase text-[12px]">Contact</p>
                            <a href="mailto:teamescapemob@gmail.com" className="block hover:text-blue-400 transition-colors">teamescapemob@gmail.com</a>
                            <a href="tel:+919999999999" className="block hover:text-blue-400 transition-colors mt-1">+91 9999999999</a>
                        </div>
                    </div>

                    <div className="mt-10">
                        <p className="font-semibold text-foreground mb-4 tracking-wide uppercase text-[12px]">Follow Us</p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all">
                                <Youtube size={18} />
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Services Column 1 */}
                <motion.div variants={itemVariants} className="col-span-1 md:col-span-1 lg:col-span-2">
                    <h3 className="font-semibold text-foreground mb-6 tracking-wide uppercase text-[12px]">Web & App</h3>
                    <ul className="space-y-3 text-gray-400 text-[13px]">
                        <li><Link href="#" className="hover:text-blue-400 transition-colors">Website Design</Link></li>
                        <li><Link href="#" className="hover:text-blue-400 transition-colors">App Design</Link></li>
                        <li><Link href="#" className="hover:text-blue-400 transition-colors">UI/UX Design</Link></li>
                        <li><Link href="#" className="hover:text-blue-400 transition-colors">Website Re-Design</Link></li>
                        <li><Link href="#" className="hover:text-blue-400 transition-colors">E-commerce Dev</Link></li>
                        <li><Link href="#" className="hover:text-blue-400 transition-colors">App Development</Link></li>
                        <li><Link href="#" className="hover:text-blue-400 transition-colors">Custom Software</Link></li>
                    </ul>

                    <h3 className="font-semibold text-foreground mb-6 mt-10 tracking-wide uppercase text-[12px]">Design</h3>
                    <ul className="space-y-3 text-gray-400 text-[13px]">
                        <li><Link href="#" className="hover:text-blue-400 transition-colors">Brand Identity</Link></li>
                        <li><Link href="#" className="hover:text-blue-400 transition-colors">Social Media Creatives</Link></li>
                        <li><Link href="#" className="hover:text-blue-400 transition-colors">Brochure & Banners</Link></li>
                        <li><Link href="#" className="hover:text-blue-400 transition-colors">Video Production</Link></li>
                    </ul>
                </motion.div>

                {/* Services Column 2 */}
                <motion.div variants={itemVariants} className="col-span-1 md:col-span-1 lg:col-span-2">
                    <h3 className="font-semibold text-foreground mb-6 tracking-wide uppercase text-[12px]">Marketing</h3>
                    <ul className="space-y-3 text-gray-400 text-[13px]">
                        <li><Link href="#" className="hover:text-blue-400 transition-colors">SEO & SEM</Link></li>
                        <li><Link href="#" className="hover:text-blue-400 transition-colors">Social Media Marketing</Link></li>
                        <li><Link href="#" className="hover:text-blue-400 transition-colors">Influencer Marketing</Link></li>
                        <li><Link href="#" className="hover:text-blue-400 transition-colors">Video Marketing</Link></li>
                        <li><Link href="#" className="hover:text-blue-400 transition-colors">Email Marketing</Link></li>
                        <li><Link href="#" className="hover:text-blue-400 transition-colors">Guest Posting</Link></li>
                        <li><Link href="#" className="hover:text-blue-400 transition-colors">Affiliate Marketing</Link></li>
                    </ul>

                    <h3 className="font-semibold text-foreground mb-6 mt-10 tracking-wide uppercase text-[12px]">Promotions</h3>
                    <ul className="space-y-3 text-gray-400 text-[13px]">
                        <li><Link href="#" className="hover:text-blue-400 transition-colors">WhatsApp & SMS</Link></li>
                        <li><Link href="#" className="hover:text-blue-400 transition-colors">Google Ads Management</Link></li>
                        <li><Link href="#" className="hover:text-blue-400 transition-colors">Meta Ads Management</Link></li>
                        <li><Link href="#" className="hover:text-blue-400 transition-colors">Retargeting Campaigns</Link></li>
                    </ul>
                </motion.div>

                {/* Tech & Industries */}
                <motion.div variants={itemVariants} className="col-span-1 md:col-span-1 lg:col-span-2">
                    <h3 className="font-semibold text-foreground mb-6 tracking-wide uppercase text-[12px]">Technologies</h3>
                    <ul className="space-y-3 text-gray-400 text-[13px]">
                        <li><Link href="#" className="hover:text-blue-400 transition-colors">React & Next.js</Link></li>
                        <li><Link href="#" className="hover:text-blue-400 transition-colors">Node.js & Python</Link></li>
                        <li><Link href="#" className="hover:text-blue-400 transition-colors">AWS & Google Cloud</Link></li>
                        <li><Link href="#" className="hover:text-blue-400 transition-colors">Docker & Kubernetes</Link></li>
                    </ul>

                    <h3 className="font-semibold text-foreground mb-6 mt-10 tracking-wide uppercase text-[12px]">Industries</h3>
                    <ul className="space-y-3 text-gray-400 text-[13px]">
                        <li><Link href="#" className="hover:text-blue-400 transition-colors">Healthcare & MedTech</Link></li>
                        <li><Link href="#" className="hover:text-blue-400 transition-colors">Real Estate & PropTech</Link></li>
                        <li><Link href="#" className="hover:text-blue-400 transition-colors">E-commerce & Retail</Link></li>
                        <li><Link href="#" className="hover:text-blue-400 transition-colors">Finance & FinTech</Link></li>
                    </ul>
                </motion.div>

                {/* Newsletter & Jump To */}
                <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 lg:col-span-3">
                    <h3 className="font-semibold text-foreground mb-6 tracking-wide uppercase text-[12px]">Jump To</h3>
                    <ul className="flex flex-wrap gap-x-6 gap-y-3 text-gray-400 text-[13px] mb-10">
                        <li><Link href="#home" className="hover:text-white transition-colors">Home</Link></li>
                        <li><Link href="#about" className="hover:text-white transition-colors">About</Link></li>
                        <li><Link href="#services" className="hover:text-white transition-colors">Services</Link></li>
                        <li><Link href="#testimonials" className="hover:text-white transition-colors">Stories</Link></li>
                        <li><Link href="#faqs" className="hover:text-white transition-colors">FAQs</Link></li>
                        <li><Link href="#contact" className="hover:text-white transition-colors text-white">Get a Quote</Link></li>
                    </ul>
                </motion.div>
            </motion.div>

            {/* Big Logo */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                className="border-t border-border pt-12 text-center"
            >
                <h1 className="text-[12vw] font-bold text-foreground/5 leading-none select-none">
                    EscapeMob
                </h1>
            </motion.div>
        </footer>
    );
}
