"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Plus, Menu, X } from "lucide-react";
import Button from "./Button";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6 px-4">
            <nav className="bg-background/80 backdrop-blur-md border border-border rounded-full px-4 py-2 flex items-center justify-between w-full max-w-5xl relative">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 pl-2" onClick={closeMobileMenu}>
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                        <Plus size={20} />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-foreground">EscapeMob</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
                    <Link href="#home" className="hover:text-foreground transition-colors">Home</Link>
                    <Link href="#about" className="hover:text-foreground transition-colors">About</Link>
                    <Link href="#services" className="hover:text-foreground transition-colors">Services</Link>
                    <Link href="#testimonials" className="hover:text-foreground transition-colors">Testimonials</Link>
                    <Link href="#faqs" className="hover:text-foreground transition-colors">FAQs</Link>
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
                    className="md:hidden text-foreground p-2"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu Overlay */}
                {isMobileMenuOpen && (
                    <div className="absolute top-full left-0 w-full mt-2 bg-background/95 backdrop-blur-xl border border-border rounded-2xl p-6 flex flex-col gap-4 shadow-2xl md:hidden animate-in fade-in slide-in-from-top-5">
                        <Link href="#home" className="text-lg font-medium text-foreground hover:text-primary transition-colors" onClick={closeMobileMenu}>Home</Link>
                        <Link href="#about" className="text-lg font-medium text-foreground hover:text-primary transition-colors" onClick={closeMobileMenu}>About</Link>
                        <Link href="#services" className="text-lg font-medium text-foreground hover:text-primary transition-colors" onClick={closeMobileMenu}>Services</Link>
                        <Link href="#testimonials" className="text-lg font-medium text-foreground hover:text-primary transition-colors" onClick={closeMobileMenu}>Testimonials</Link>
                        <Link href="#faqs" className="text-lg font-medium text-foreground hover:text-primary transition-colors" onClick={closeMobileMenu}>FAQs</Link>
                        <Link href="#contact" onClick={closeMobileMenu} className="w-full">
                            <Button variant="primary" className="w-full !py-3">
                                Get a Quote
                            </Button>
                        </Link>
                    </div>
                )}
            </nav>
        </div>
    );
}
