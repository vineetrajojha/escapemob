import React from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import Button from "./Button";

export default function Navbar() {
    return (
        <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6 px-4">
            <nav className="bg-background/80 backdrop-blur-md border border-border rounded-full px-2 py-2 flex items-center justify-between w-full max-w-5xl">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 pl-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                        <Plus size={20} />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-foreground">EscapeMob</span>
                </Link>

                {/* Links */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
                    <Link href="#" className="hover:text-foreground transition-colors">Home</Link>
                    <Link href="#" className="hover:text-foreground transition-colors">About</Link>
                    <Link href="#" className="hover:text-foreground transition-colors">Services</Link>
                    <Link href="#" className="hover:text-foreground transition-colors">Contact</Link>
                </div>

                {/* CTA */}
                <Button variant="primary" className="!py-2 !px-4 text-sm">
                    Get A Quote
                </Button>
            </nav>
        </div>
    );
}
