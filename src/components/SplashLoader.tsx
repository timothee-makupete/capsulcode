import { useEffect, useState } from "react";
import { Terminal } from "lucide-react";

const lines = [
  "$ initializing capsulcode...",
  "$ loading modules ██████████ 100%",
  "$ compiling assets...",
  "$ deploying interface...",
  "$ ready.",
];

const SplashLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (currentLine < lines.length) {
      const timer = setTimeout(() => setCurrentLine((p) => p + 1), 1000);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => setFadeOut(true), 400);
      return () => clearTimeout(timer);
    }
  }, [currentLine]);

  useEffect(() => {
    if (fadeOut) {
      const timer = setTimeout(onComplete, 600);
      return () => clearTimeout(timer);
    }
  }, [fadeOut, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-opacity duration-600 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
      style={{ background: "hsl(220 40% 8%)" }}
    >
      {/* Pulsing logo */}
      <div className="mb-10 flex flex-col items-center gap-4">
        <div className="relative">
          <div className="w-20 h-20 rounded-xl border border-primary/30 flex items-center justify-center bg-secondary/50 animate-pulse">
            <Terminal size={36} className="text-primary" />
          </div>
          {/* Glow ring */}
          <div className="absolute inset-0 rounded-xl border-2 border-primary/20 animate-ping" style={{ animationDuration: "1s" }} />
        </div>
        <h2 className="font-mono text-xl font-bold tracking-tight">
          <span className="text-primary">{"{ "}</span>
          <span className="gold-text">Capsulcode</span>
          <span className="text-primary">{" }"}</span>
        </h2>
      </div>

      {/* Terminal output */}
      <div className="w-80 max-w-[90vw] rounded-lg border border-border/50 overflow-hidden" style={{ background: "hsl(220 40% 10%)" }}>
        <div className="flex items-center gap-2 px-4 py-2 border-b border-border/30" style={{ background: "hsl(220 40% 12%)" }}>
          <div className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-primary/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
          <span className="text-[10px] font-mono text-muted-foreground ml-1">boot.sh</span>
        </div>
        <div className="p-4 min-h-[140px]">
          {lines.slice(0, currentLine).map((line, i) => (
            <div
              key={i}
              className="text-xs font-mono leading-6 animate-fade-up"
              style={{
                color: i === lines.length - 1 ? "hsl(142 70% 55%)" : "hsl(220 15% 55%)",
              }}
            >
              {line}
            </div>
          ))}
          {currentLine < lines.length && (
            <span className="text-xs font-mono text-primary animate-blink">█</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SplashLoader;
