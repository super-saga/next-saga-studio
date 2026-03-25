"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card = ({ children, className, hoverEffect = true }: CardProps) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -5 } : {}}
      transition={{ duration: 0.3 }}
      className={cn(
        "bg-card border border-border rounded-xl p-6 transition-all",
        hoverEffect && "hover:shadow-lg hover:border-primary/50",
        className
      )}
    >
      {children}
    </motion.div>
  );
};
