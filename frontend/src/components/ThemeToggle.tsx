"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useTheme } from "next-themes";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);
    const [showPopup, setShowPopup] = React.useState(true);

    React.useEffect(() => {
        setMounted(true);
        const timer = setTimeout(() => {
            setShowPopup(false);
        }, 4000);
        return () => clearTimeout(timer);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
            {theme === 'dark' && showPopup && (
                <div className="hidden sm:block px-4 py-2 rounded-xl text-[13px] shadow-lg text-white bg-[#1c1c26] border border-white/10 animate-pulse font-medium tracking-wide transition-opacity duration-500">
                    Turn on the light mode
                </div>
            )}
            {/* WhatsApp Button */}
            <a href="https://wa.me/91999999999" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white dark:bg-[#1c1c26] border border-gray-200 dark:border-white/10 text-slate-900 dark:text-white px-4 py-2.5 rounded-full shadow-lg transition-transform hover:scale-105 font-medium text-[13px]">
                <FaWhatsapp className="w-5 h-5 text-green-500" />
                <span className="hidden sm:inline">WhatsApp</span>
            </a>

            {/* Theme Toggle (Box Removed) */}
            <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 focus:outline-none bg-transparent"
                aria-label="Toggle Theme"
            >
                <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-orange-400 drop-shadow-md" />
                <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-slate-800 dark:text-gray-100 drop-shadow-md" />
            </button>
        </div>
    );
}
