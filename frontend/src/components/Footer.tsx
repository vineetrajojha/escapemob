import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="pt-24 pb-12 px-4 border-t border-border bg-background">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
                {/* Brand */}
                <div className="md:col-span-4">
                    <h2 className="text-2xl font-bold text-foreground mb-8">Marklab</h2>
                    <div className="space-y-4 text-muted-foreground text-sm">
                        <p className="font-semibold text-foreground">Office</p>
                        <p>
                            11 Garden, Town Hills
                            <br />
                            Dubai, UAE 13690
                        </p>
                        <p className="font-semibold text-foreground mt-6">Email</p>
                        <p>example@marklab.com</p>
                    </div>
                </div>

                {/* Links */}
                <div className="md:col-span-2">
                    <h3 className="text-blue-400 font-medium mb-6">Main</h3>
                    <ul className="space-y-4 text-muted-foreground text-sm">
                        <li><Link href="#" className="hover:text-foreground">Home</Link></li>
                        <li><Link href="#" className="hover:text-foreground">About</Link></li>
                        <li><Link href="#" className="hover:text-foreground">Works</Link></li>
                        <li><Link href="#" className="hover:text-foreground">Blog</Link></li>
                        <li><Link href="#" className="hover:text-foreground">Pricing</Link></li>
                        <li><Link href="#" className="hover:text-foreground">Contact</Link></li>
                    </ul>
                </div>

                <div className="md:col-span-2">
                    <h3 className="text-blue-400 font-medium mb-6">Single</h3>
                    <ul className="space-y-4 text-muted-foreground text-sm">
                        <li><Link href="#" className="hover:text-foreground">Work Single</Link></li>
                        <li><Link href="#" className="hover:text-foreground">Blog Single</Link></li>
                        <li><Link href="#" className="hover:text-foreground">Pricing Single</Link></li>
                    </ul>
                </div>

                <div className="md:col-span-1">
                    <h3 className="text-blue-400 font-medium mb-6">Utility</h3>
                    <ul className="space-y-4 text-muted-foreground text-sm">
                        <li><Link href="#" className="hover:text-foreground">Style Guide</Link></li>
                        <li><Link href="#" className="hover:text-foreground">License</Link></li>
                        <li><Link href="#" className="hover:text-foreground">Change Log</Link></li>
                        <li><Link href="#" className="hover:text-foreground">404</Link></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="md:col-span-3">
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
