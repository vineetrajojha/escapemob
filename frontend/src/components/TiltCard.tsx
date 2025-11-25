"use client";

import React, { useRef, forwardRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
}

const TiltCard = forwardRef<HTMLDivElement, TiltCardProps>(
    ({ children, className = "" }, ref) => {
        const x = useMotionValue(0);
        const y = useMotionValue(0);

        const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
        const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

        const rotateX = useTransform(mouseY, [-0.5, 0.5], ["12deg", "-12deg"]);
        const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-12deg", "12deg"]);

        const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
            const rect = e.currentTarget.getBoundingClientRect();

            const width = rect.width;
            const height = rect.height;

            const mouseXFromCenter = e.clientX - rect.left - width / 2;
            const mouseYFromCenter = e.clientY - rect.top - height / 2;

            const xPct = mouseXFromCenter / width;
            const yPct = mouseYFromCenter / height;

            x.set(xPct);
            y.set(yPct);
        };

        const handleMouseLeave = () => {
            x.set(0);
            y.set(0);
        };

        return (
            <div
                ref={ref}
                className={className}
                style={{
                    perspective: "1000px",
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <motion.div
                    style={{
                        rotateX,
                        rotateY,
                        transformStyle: "preserve-3d",
                    }}
                    className="relative w-full h-full transition-all duration-200 ease-linear"
                >
                    {children}
                </motion.div>
            </div>
        );
    }
);

TiltCard.displayName = "TiltCard";

export default TiltCard;
