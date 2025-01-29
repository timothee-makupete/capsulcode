import { useEffect, useRef } from 'react';

export function useIntersectionObserver() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-show');
        }
      });
    }, {
      threshold: 0.15
    });

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      section.classList.add('section-hidden');
      if (observerRef.current) {
        observerRef.current.observe(section);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
}