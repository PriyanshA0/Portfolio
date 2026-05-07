"use client";

import { useEffect } from "react";

export default function AnimateProvider() {
  useEffect(() => {
    const selectors = [
      'h1', 'h2', 'h3', 'h4', 'p', 'a', 'button', 'img', 'section',
      '.card', '.project-image', '.app-screenshot', '.section-shell', '.site-header', 'nav'
    ].join(',');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            // Stagger small groups by index if possible
            el.classList.add('animate-fade-up');
            el.classList.add('animate-visible');
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.06 }
    );

    const nodes = Array.from(document.querySelectorAll(selectors));
    nodes.forEach((n) => observer.observe(n));

    return () => observer.disconnect();
  }, []);

  return null;
}
