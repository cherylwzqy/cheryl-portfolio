"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Content remains readable without JavaScript; motion is an enhancement. */
export default function Reveal({ children, className, target, distance = 12, initialOpacity = 0 }: {
  children: ReactNode;
  className?: string;
  target?: string;
  distance?: number;
  initialOpacity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = target ? ref.current?.querySelector<HTMLElement>(target) : ref.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!element || preference.matches || !("IntersectionObserver" in window)) return;

    let animation: Animation | undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      if (!preference.matches) {
        animation = element.animate(
          [{ opacity: initialOpacity, transform: `translateY(${distance}px)` }, { opacity: 1, transform: "translateY(0)" }],
          { duration: 700, easing: "cubic-bezier(0.22, 0.61, 0.36, 1)" },
        );
      }
      observer.disconnect();
    }, { threshold: 0.12 });
    const stopMotion = () => { if (preference.matches) animation?.cancel(); };
    preference.addEventListener("change", stopMotion);
    observer.observe(element);
    return () => {
      observer.disconnect();
      animation?.cancel();
      preference.removeEventListener("change", stopMotion);
    };
  }, [target, distance, initialOpacity]);

  return <div ref={ref} className={className}>{children}</div>;
}
