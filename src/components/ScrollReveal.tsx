import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}

const ScrollReveal = ({ children, className, delay = 0, direction = "up" }: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollReveal(0.1);

  const directionStyles = {
    up: "translate-y-10",
    left: "translate-x-10",
    right: "-translate-x-10",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible ? "opacity-100 translate-y-0 translate-x-0" : `opacity-0 ${directionStyles[direction]}`,
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
