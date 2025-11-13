import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const GlassCard = ({ children, className, hover = true }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "glass rounded-2xl p-6 shadow-lg",
        hover && "transition-all duration-300 hover:scale-105 hover:shadow-xl",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassCard;
