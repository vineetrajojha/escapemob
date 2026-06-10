"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FolderTree, ExternalLink } from "lucide-react";

const sitemapData = [
    {
        category: "Main Pages",
        links: [
            { name: "Home", url: "/" },
            { name: "About Us", url: "/about" },
            { name: "Projects", url: "/projects" },
            { name: "Career", url: "/career" }
        ]
    },
    {
        category: "Services",
        links: [
            { name: "Web Development", url: "/#services" },
            { name: "App Design & Development", url: "/#services" },
            { name: "UI/UX Design", url: "/#services" },
            { name: "Graphic Design & Branding", url: "/#services" },
            { name: "Digital Marketing", url: "/#services" },
            { name: "Promotional Services", url: "/#services" }
        ]
    },
    {
        category: "Legal",
        links: [
            { name: "Privacy Policy", url: "/privacy" },
            { name: "Terms & Conditions", url: "/terms" }
        ]
    }
];

export default function Sitemap() {
    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden relative w-full transition-colors duration-300">
            <Navbar />

            <div className="pt-40 pb-20 px-4 max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-10">
                    <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                        <FolderTree size={32} />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white">Site<span className="italic font-serif text-slate-500 dark:text-muted-foreground">map</span></h1>
                </div>
                
                <p className="text-lg text-slate-600 dark:text-gray-400 mb-12">
                    A comprehensive overview of our website's structure to help you navigate and find exactly what you're looking for.
                </p>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {sitemapData.map((section, idx) => (
                        <div key={idx} className="bg-slate-50 dark:bg-[#0c0d0d] border border-slate-200 dark:border-white/10 rounded-3xl p-8 hover:shadow-lg transition-shadow">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 pb-4 border-b border-slate-200 dark:border-white/10">
                                {section.category}
                            </h2>
                            <ul className="space-y-4">
                                {section.links.map((link, linkIdx) => (
                                    <li key={linkIdx}>
                                        <Link 
                                            href={link.url} 
                                            className="group flex items-center gap-2 text-slate-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-lg"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-gray-600 group-hover:bg-blue-500 transition-colors" />
                                            {link.name}
                                            <ExternalLink size={14} className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-1 transition-all duration-300" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}
