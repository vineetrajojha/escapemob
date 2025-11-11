import * as React from "react";
import { cn } from "../../lib/util";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors focus:outline-none focus:ring-0";

    const variants = {
      default: "bg-[#ccff00] text-black hover:bg-lime-400",
      outline:
        "border border-gray-600 text-gray-200 hover:border-gray-400 hover:text-white",
      ghost: "text-gray-400 hover:text-white hover:bg-gray-800/50",
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
