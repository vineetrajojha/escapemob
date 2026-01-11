"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "./Button";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const menuVariants = {
        closed: {
            opacity: 0,
            y: "-100%",
            transition: {
                duration: 0.5,
                ease: [0.76, 0, 0.24, 1] as const
            }
        },
        open: {
            opacity: 1,
            y: "0%",
            transition: {
                duration: 0.5,
                ease: [0.76, 0, 0.24, 1] as const
            }
        }
    };

    const linkVariants = {
        closed: {
            opacity: 0,
            y: 20,
        },
        open: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.1 + i * 0.1,
                duration: 0.4,
                ease: [0.76, 0, 0.24, 1] as const
            }
        })
    };

    return (
        <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6 px-4">
            <nav className="bg-background/80 backdrop-blur-md border border-border rounded-full px-4 py-2 flex items-center justify-between w-full max-w-5xl relative z-50">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 pl-2" onClick={closeMobileMenu}>
                    <Image
                        src="/logo.png"
                        alt="EscapeMob"
                        width={120}
                        height={40}
                        className="h-10 w-auto object-contain"
                    />
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
                    <Link href="#home" className="hover:text-foreground transition-colors">Home</Link>
                    <Link href="#about" className="hover:text-foreground transition-colors">About</Link>
                    <Link href="#services" className="hover:text-foreground transition-colors">Services</Link>
                    <Link href="#testimonials" className="hover:text-foreground transition-colors">Testimonials</Link>
                    <Link href="/projects" className="hover:text-foreground transition-colors">Projects</Link>
                </div>

                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <Link href="#contact">
                        <Button variant="primary" className="!py-2 !px-4 text-sm">
                            Get a Quote
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-foreground p-2 z-50 relative"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center md:hidden"
                    >
                        <div className="flex flex-col items-center gap-8">
                            {[
                                { href: "#home", label: "Home" },
                                { href: "#about", label: "About" },
                                { href: "#services", label: "Services" },
                                { href: "#testimonials", label: "Testimonials" },
                                { href: "#faqs", label: "FAQs" },
                            ].map((link, i) => (
                                <motion.div
                                    key={link.href}
                                    custom={i}
                                    variants={linkVariants}
                                >
                                    <Link
                                        href={link.href}
                                        className="text-3xl font-medium text-foreground hover:text-primary transition-colors"
                                        onClick={closeMobileMenu}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                custom={5}
                                variants={linkVariants}
                                className="mt-4"
                            >
                                <Link href="#contact" onClick={closeMobileMenu}>
                                    <Button variant="primary" className="!py-3 !px-8 text-lg">
                                        Get a Quote
                                    </Button>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
