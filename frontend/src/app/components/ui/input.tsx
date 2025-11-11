import * as React from "react";
import { cn } from "../../lib/util";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-full bg-transparent px-4 text-sm text-gray-200 placeholder-gray-500 outline-none transition-all duration-200",
          "border border-gray-700 focus:border-gray-500 focus:ring-0",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
