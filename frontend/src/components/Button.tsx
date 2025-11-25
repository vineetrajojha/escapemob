import React from "react";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "outline";
    icon?: boolean;
}

export default function Button({
    children,
    variant = "primary",
    icon = true,
    className = "",
    ...props
}: ButtonProps) {
    const baseStyles =
        "flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer";

    const variants = {
        primary: "bg-foreground text-background hover:bg-foreground/90 border-transparent",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline: "border border-border hover:bg-accent text-foreground",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
            {icon && (
                <span className="bg-background text-foreground rounded-full p-1 w-6 h-6 flex items-center justify-center">
                    <ArrowUpRight size={14} />
                </span>
            )}
        </button>
    );
}
