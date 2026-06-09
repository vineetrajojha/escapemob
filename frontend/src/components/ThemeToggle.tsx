"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
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
            <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-10 h-10 rounded-full bg-white dark:bg-[#1c1c26] border border-gray-200 dark:border-white/10 shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-200 focus:outline-none"
                aria-label="Toggle Theme"
            >
                <Sun className="h-[1rem] w-[1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-orange-500" />
                <Moon className="absolute h-[1rem] w-[1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-white" />
            </button>
        </div>
    );
}
