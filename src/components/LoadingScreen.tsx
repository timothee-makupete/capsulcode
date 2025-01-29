import React, { useEffect, useState } from 'react';
import { Code2 } from 'lucide-react';

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-black flex flex-col items-center justify-center transition-opacity duration-500 ${
        progress === 100 ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative">
        <Code2 className="h-16 w-16 text-cyan-400 animate-pulse" />
        <div className="absolute -inset-4 bg-cyan-500/20 blur-xl rounded-full animate-pulse" />
      </div>
      
      <div className="mt-8 w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 transition-all duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <div className="mt-4 font-mono text-cyan-400">
        System Loading: {progress}%
      </div>
    </div>
  );
}