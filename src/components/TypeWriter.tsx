import { useEffect, useState, useRef } from 'react';

interface TypeWriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

export function TypeWriter({ text, speed = 50, delay = 0, className = '', onComplete }: TypeWriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const hasTyped = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTyped.current) {
            startTyping();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const startTyping = () => {
    if (hasTyped.current) return;
    hasTyped.current = true;
    setIsTyping(true);

    setTimeout(() => {
      let currentIndex = 0;
      const intervalId = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(intervalId);
          setIsTyping(false);
          setTimeout(() => setShowCursor(false), 1000);
          onComplete?.();
        }
      }, speed);

      return () => clearInterval(intervalId);
    }, delay);
  };

  return (
    <div ref={elementRef} className={`relative inline-block ${className}`}>
      <span className="relative">
        {displayText}
        {showCursor && (
          <span
            className={` ${
              isTyping ? 'animate-pulse' : ''
            }`}
          />
        )}
      </span>
    </div>
  );
}