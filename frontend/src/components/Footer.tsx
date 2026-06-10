"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Instagram, Youtube, Facebook, Twitter, Linkedin } from "lucide-react";
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
        <footer className="pt-24 pb-12 px-4 border-t border-border bg-transparent overflow-hidden">
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
                        <Link href="/" className="flex items-center gap-1">
                            <img
                                src="/logo-light.png"
                                alt="EscapeMob"
                                className="h-16 md:h-20 w-auto object-contain drop-shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:hidden"
                            />
                            <img
                                src="/logo-dark.png"
                                alt="EscapeMob"
                                className="h-16 md:h-20 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] hidden dark:block scale-[1.4] origin-left"
                            />
                        </Link>
                    </div>
                    <div className="space-y-6 text-muted-foreground text-[14px]">
                        <div>
                            <p className="font-semibold text-foreground mb-2 tracking-wide uppercase text-[12px]">Office</p>
                            <p className="leading-relaxed">
                                Greater Noida<br />
                                Uttar Pradesh, India 201308
                            </p>
                        </div>
                        <div>
                            <p className="font-semibold text-foreground mb-2 tracking-wide uppercase text-[12px]">Contact</p>
                            <a href="mailto:hello@escapemob.com" className="block hover:text-blue-400 transition-colors">hello@escapemob.com</a>
                            <a href="tel:+919717504789" className="block hover:text-blue-400 transition-colors mt-1">+91 97175 04789</a>
                        </div>
                    </div>

                    <div className="mt-10">
                        <p className="font-semibold text-foreground mb-4 tracking-wide uppercase text-[12px]">Follow Us</p>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/escapemob_india/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted/50 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted hover:border-foreground/20 transition-all">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-muted/50 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted hover:border-foreground/20 transition-all">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-muted/50 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted hover:border-foreground/20 transition-all">
                                <Twitter size={18} />
                            </a>
                            <a href="https://www.linkedin.com/company/escapemob" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted/50 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted hover:border-foreground/20 transition-all">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Services Column 1 */}
                <motion.div variants={itemVariants} className="col-span-1 md:col-span-1 lg:col-span-2">
                    <h3 className="font-semibold text-foreground mb-6 tracking-wide uppercase text-[12px]">Web & App</h3>
                    <ul className="space-y-3 text-muted-foreground text-[13px]">
                        <li><Link href="/#services" className="hover:text-blue-400 transition-colors">Website Design</Link></li>
                        <li><Link href="/#services" className="hover:text-blue-400 transition-colors">App Design</Link></li>
                        <li><Link href="/#services" className="hover:text-blue-400 transition-colors">UI/UX Design</Link></li>
                        <li><Link href="/#services" className="hover:text-blue-400 transition-colors">Website Re-Design</Link></li>
                        <li><Link href="/#services" className="hover:text-blue-400 transition-colors">E-commerce Dev</Link></li>
                        <li><Link href="/#services" className="hover:text-blue-400 transition-colors">App Development</Link></li>
                        <li><Link href="/#services" className="hover:text-blue-400 transition-colors">Custom Software</Link></li>
                    </ul>

                    <h3 className="font-semibold text-foreground mb-6 mt-10 tracking-wide uppercase text-[12px]">Design</h3>
                    <ul className="space-y-3 text-muted-foreground text-[13px]">
                        <li><Link href="/#services" className="hover:text-blue-400 transition-colors">Brand Identity</Link></li>
                        <li><Link href="/#services" className="hover:text-blue-400 transition-colors">Social Media Creatives</Link></li>
                        <li><Link href="/#services" className="hover:text-blue-400 transition-colors">Brochure & Banners</Link></li>
                        <li><Link href="/#services" className="hover:text-blue-400 transition-colors">Video Production</Link></li>
                    </ul>
                </motion.div>

                {/* Services Column 2 */}
                <motion.div variants={itemVariants} className="col-span-1 md:col-span-1 lg:col-span-2">
                    <h3 className="font-semibold text-foreground mb-6 tracking-wide uppercase text-[12px]">Marketing</h3>
                    <ul className="space-y-3 text-muted-foreground text-[13px]">
                        <li><Link href="/#services" className="hover:text-blue-400 transition-colors">SEO & SEM</Link></li>
                        <li><Link href="/#services" className="hover:text-blue-400 transition-colors">Social Media Marketing</Link></li>
                        <li><Link href="/#services" className="hover:text-blue-400 transition-colors">Influencer Marketing</Link></li>
                        <li><Link href="/#services" className="hover:text-blue-400 transition-colors">Video Marketing</Link></li>
                        <li><Link href="/#services" className="hover:text-blue-400 transition-colors">Email Marketing</Link></li>
                        <li><Link href="/#services" className="hover:text-blue-400 transition-colors">Guest Posting</Link></li>
                        <li><Link href="/#services" className="hover:text-blue-400 transition-colors">Affiliate Marketing</Link></li>
                    </ul>

                    <h3 className="font-semibold text-foreground mb-6 mt-10 tracking-wide uppercase text-[12px]">Promotions</h3>
                    <ul className="space-y-3 text-muted-foreground text-[13px]">
                        <li><Link href="/#services" className="hover:text-blue-400 transition-colors">WhatsApp & SMS</Link></li>
                        <li><Link href="/#services" className="hover:text-blue-400 transition-colors">Google Ads Management</Link></li>
                        <li><Link href="/#services" className="hover:text-blue-400 transition-colors">Meta Ads Management</Link></li>
                        <li><Link href="/#services" className="hover:text-blue-400 transition-colors">Retargeting Campaigns</Link></li>
                    </ul>
                </motion.div>

                {/* Tech & Industries */}
                <motion.div variants={itemVariants} className="col-span-1 md:col-span-1 lg:col-span-2">
                    <h3 className="font-semibold text-foreground mb-6 tracking-wide uppercase text-[12px]">Technologies</h3>
                    <ul className="space-y-3 text-muted-foreground text-[13px]">
                        <li><Link href="/#technologies" className="hover:text-blue-400 transition-colors">React & Next.js</Link></li>
                        <li><Link href="/#technologies" className="hover:text-blue-400 transition-colors">Node.js & Python</Link></li>
                        <li><Link href="/#technologies" className="hover:text-blue-400 transition-colors">AWS & Google Cloud</Link></li>
                        <li><Link href="/#technologies" className="hover:text-blue-400 transition-colors">Docker & Kubernetes</Link></li>
                    </ul>

                    <h3 className="font-semibold text-foreground mb-6 mt-10 tracking-wide uppercase text-[12px]">Industries</h3>
                    <ul className="space-y-3 text-muted-foreground text-[13px]">
                        <li><Link href="/#services" className="hover:text-blue-400 transition-colors">Healthcare & MedTech</Link></li>
                        <li><Link href="/#services" className="hover:text-blue-400 transition-colors">Real Estate & PropTech</Link></li>
                        <li><Link href="/#services" className="hover:text-blue-400 transition-colors">E-commerce & Retail</Link></li>
                        <li><Link href="/#services" className="hover:text-blue-400 transition-colors">Finance & FinTech</Link></li>
                    </ul>
                </motion.div>

                {/* Newsletter & Jump To */}
                <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 lg:col-span-3">
                    <h3 className="font-semibold text-foreground mb-6 tracking-wide uppercase text-[12px]">Jump To</h3>
                    <ul className="space-y-3 text-muted-foreground text-[13px] mb-10">
                        <li><Link href="/#home" className="hover:text-foreground transition-colors block">Home</Link></li>
                        <li><Link href="/about" className="hover:text-foreground transition-colors block">About</Link></li>
                        <li><Link href="/career" className="hover:text-foreground transition-colors block">Career</Link></li>
                        <li><Link href="/projects" className="hover:text-foreground transition-colors block">Projects</Link></li>
                        <li><Link href="/#services" className="hover:text-foreground transition-colors block">Services</Link></li>
                        <li><Link href="/#testimonials" className="hover:text-foreground transition-colors block">Stories</Link></li>
                        <li><Link href="/#faqs" className="hover:text-foreground transition-colors block">FAQs</Link></li>
                        <li><Link href="/#contact" className="hover:text-foreground transition-colors text-foreground block">Get a Quote</Link></li>
                    </ul>
                </motion.div>
            </motion.div>

            {/* Big Logo */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                className="border-t border-border pt-12 pb-6 text-center flex flex-col items-center"
            >
                <h1 className="text-[12vw] font-bold text-foreground/5 leading-none select-none mb-8">
                    EscapeMob
                </h1>
                
                {/* Legal Links & Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground w-full border-t border-border/50 pt-6 px-4">
                    <p className="text-center md:text-left">
                        &copy; {new Date().getFullYear()} EscapeMob. All rights reserved. <br className="md:hidden" />
                        <span className="hidden md:inline"> | </span>
                        Made with ❤️ by <a href="https://vineetraj.tech" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-blue-500 font-medium transition-colors">Vineet</a>
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                        <Link href="/sitemap" className="hover:text-foreground transition-colors">Sitemap</Link>
                        <Link href="/terms" className="hover:text-foreground transition-colors">Terms & Conditions</Link>
                        <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                    </div>
                </div>
            </motion.div>
        </footer>
    );
}
