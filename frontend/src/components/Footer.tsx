import React from "react";
import Link from "next/link";
import { ArrowUpRight, Instagram, Youtube, Facebook, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="pt-24 pb-12 px-4 border-t border-border bg-background">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-12 mb-20">
                {/* Brand */}
                <div className="col-span-2 md:col-span-3">
                    <h2 className="text-2xl font-bold text-foreground mb-8">Escapemob</h2>
                    <div className="space-y-4 text-muted-foreground text-sm">
                        <p className="font-semibold text-foreground">Office</p>
                        <p>
                            Greater Noida
                            <br />
                            Uttar Pradesh, India 201308
                        </p>
                        <p className="font-semibold text-foreground mt-6">Email</p>
                        <p>escapemob@gmail.com</p>
                    </div>
                </div>

                {/* Links */}
                <div className="col-span-1 md:col-span-2">
                    <h3 className="text-blue-400 font-medium mb-6">Jump to</h3>
                    <ul className="space-y-4 text-muted-foreground text-sm">
                        <li><Link href="#home" className="hover:text-foreground">Home</Link></li>
                        <li><Link href="#about" className="hover:text-foreground">About</Link></li>
                        <li><Link href="#services" className="hover:text-foreground">Services</Link></li>
                        <li><Link href="#testimonials" className="hover:text-foreground">Testimonials</Link></li>
                        <li><Link href="#faqs" className="hover:text-foreground">FAQs</Link></li>
                    </ul>
                </div>

                <div className="col-span-1 md:col-span-2">
                    <h3 className="text-blue-400 font-medium mb-6">Contact Us</h3>
                    <ul className="space-y-4 text-muted-foreground text-sm">
                        <li><Link href="#contact" className="hover:text-foreground">Get a Quote</Link></li>

                    </ul>
                </div>

                <div className="col-span-2 md:col-span-2">
                    <h3 className="text-blue-400 font-medium mb-6">Follow Us</h3>
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
                </div>

                {/* Newsletter */}
                <div className="col-span-2 md:col-span-3">
                    <h3 className="text-foreground font-bold text-xl mb-4">
                        Newsletter for updates
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6">
                        Subscribe to get more updates
                    </p>
                    <div className="relative">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full bg-blue-500/10 border border-blue-500/20 rounded-full py-3 pl-6 pr-12 text-foreground placeholder-muted-foreground focus:outline-none focus:border-blue-500"
                        />
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
                            <ArrowUpRight size={16} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Big Logo */}
            <div className="border-t border-border pt-12 text-center">
                <h1 className="text-[12vw] font-bold text-foreground/5 leading-none select-none">
                    EscapeMob
                </h1>
            </div>
        </footer>
    );
}
