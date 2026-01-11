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
        <footer className="pt-24 pb-12 px-4 border-t border-border bg-background overflow-hidden">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-12 mb-20"
            >
                {/* Brand */}
                <motion.div variants={itemVariants} className="col-span-2 md:col-span-3">
                    <div className="mb-8">
                        <Image
                            src="/logo.png"
                            alt="EscapeMob"
                            width={120}
                            height={40}
                            className="h-10 w-auto object-contain"
                        />
                    </div>
                    <div className="space-y-4 text-muted-foreground text-sm">
                        <p className="font-semibold text-foreground">Office</p>
                        <p>
                            Greater Noida
                            <br />
                            Uttar Pradesh, India 201308
                        </p>
                        <p className="font-semibold text-foreground mt-6">Email</p>
                        <p>teamescapemob@gmail.com</p>
                    </div>
                </motion.div>

                {/* Links */}
                <motion.div variants={itemVariants} className="col-span-1 md:col-span-2">
                    <h3 className="text-foreground font-medium mb-6">Jump to</h3>
                    <ul className="space-y-4 text-muted-foreground text-sm">
                        <li><Link href="#home" className="hover:text-foreground">Home</Link></li>
                        <li><Link href="#about" className="hover:text-foreground">About</Link></li>
                        <li><Link href="#services" className="hover:text-foreground">Services</Link></li>
                        <li><Link href="#testimonials" className="hover:text-foreground">Testimonials</Link></li>
                        <li><Link href="#faqs" className="hover:text-foreground">FAQs</Link></li>
                    </ul>
                </motion.div>

                <motion.div variants={itemVariants} className="col-span-1 md:col-span-2">
                    <h3 className="text-foreground font-medium mb-6">Contact Us</h3>
                    <ul className="space-y-4 text-muted-foreground text-sm">
                        <li><Link href="#contact" className="hover:text-foreground">Get a Quote</Link></li>

                    </ul>
                </motion.div>

                <motion.div variants={itemVariants} className="col-span-2 md:col-span-2">
                    <h3 className="text-foreground font-medium mb-6">Follow Us</h3>
                    <div className="flex gap-4 text-muted-foreground">
                        <Link href="#" className="hover:text-foreground transition-colors">
                            <Instagram size={20} />
                            <span className="sr-only">Instagram</span>
                        </Link>
                        <Link href="#" className="hover:text-foreground transition-colors">
                            <Youtube size={20} />
                            <span className="sr-only">Youtube</span>
                        </Link>
                        <Link href="#" className="hover:text-foreground transition-colors">
                            <Facebook size={20} />
                            <span className="sr-only">Facebook</span>
                        </Link>
                        <Link href="#" className="hover:text-foreground transition-colors">
                            <Twitter size={20} />
                            <span className="sr-only">Twitter</span>
                        </Link>
                    </div>
                </motion.div>

                {/* Newsletter */}
                <motion.div variants={itemVariants} className="col-span-2 md:col-span-3">
                    <h3 className="text-foreground font-bold text-xl mb-4">
                        Newsletter for updates
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6">
                        Subscribe to get more updates
                    </p>
                    <NewsletterForm />
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
