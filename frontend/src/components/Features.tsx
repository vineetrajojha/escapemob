"use client";
import React from "react";
import Button from "./Button";
import { Wand2, Edit3, Figma } from "lucide-react";

export default function Features() {
    return (
        <section className="py-24 px-4 max-w-7xl mx-auto">
            {/* Main Feature */}
            <div className="text-center mb-32">
                <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                    Modern Template for <br />
                    Digital Marketing
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg">
                    A template built for digital marketing agencies that want to make a
                    statement. Marklab delivers sleek visuals.
                </p>
                <div className="flex items-center justify-center gap-4">
                    <Button variant="primary">Buy Template</Button>
                    <Button variant="secondary" icon={false}>
                        Explore
                    </Button>
                </div>

                {/* Feature Highlights */}
                <div className="flex flex-wrap justify-center gap-8 mt-20">
                    <div className="flex items-center gap-3 bg-card px-6 py-3 rounded-full border border-border">
                        <span className="bg-blue-500/20 p-2 rounded-lg text-blue-400">
                            <Wand2 size={20} />
                        </span>
                        <span className="text-foreground font-medium">Designed to Convert</span>
                    </div>
                    <div className="flex items-center gap-3 bg-card px-6 py-3 rounded-full border border-border">
                        <span className="bg-purple-500/20 p-2 rounded-lg text-purple-400">
                            <Edit3 size={20} />
                        </span>
                        <span className="text-foreground font-medium">Fully Customizable</span>
                    </div>
                    <div className="flex items-center gap-3 bg-card px-6 py-3 rounded-full border border-border">
                        <span className="bg-indigo-500/20 p-2 rounded-lg text-indigo-400">
                            <Figma size={20} />
                        </span>
                        <span className="text-foreground font-medium">Free Figma file</span>
                    </div>
                </div>
            </div>

            {/* 3 Column Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left border-t border-border pt-20">
                <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                        Full Page Templates
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                        Designed for services, products, and more. Customize each page to
                        match your brand and launch—without compromising on quality.
                    </p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                        Better Framework
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                        Build with modular, flexible sections. Mix and match effortlessly—no
                        code needed—for a smooth experience that fits projects of any size.
                    </p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                        Design System
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                        Keep visual consistency site-wide. Control fonts, colors, and
                        elements globally, and refresh your design in seconds with a few
                        clicks.
                    </p>
                </div>
            </div>

            <div className="flex justify-center mt-16">
                <Button variant="primary">Buy Template</Button>
            </div>
        </section>
    );
}
