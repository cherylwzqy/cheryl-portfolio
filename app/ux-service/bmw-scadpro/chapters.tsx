"use client";

import { useEffect, useRef } from "react";
import styles from "./chapters.module.css";

const responsibilities = [
  ["Competitive Research", "Research & Analysis"],
  ["Stakeholder Mapping", "System Mapping"],
  ["Journey Mapping", "Experience Mapping"],
  ["Service Blueprint", "Service Visualization"],
];
function ChapterLabel({ number, children }: { number: string; children: string }) {
  return <h2 className={`${styles.label} type-micro`}><span>{number}</span><span>{children}</span></h2>;
}

export function MyRole() {
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const list = listRef.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!list || preference.matches || !("IntersectionObserver" in window)) return;
    const animations: Animation[] = [];
    const observer = new IntersectionObserver((entries) => {
      entries.filter((entry) => entry.isIntersecting).forEach((entry, index) => {
        if (!preference.matches) {
          animations.push(entry.target.animate(
            [{ opacity: 0.15, transform: "translateY(8px)" }, { opacity: 1, transform: "translateY(0)" }],
            { duration: 700, delay: index * 100, fill: "backwards", easing: "cubic-bezier(0.22, 0.61, 0.36, 1)" },
          ));
        }
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.25 });
    Array.from(list.children).forEach((item) => observer.observe(item));
    const stop = () => { if (preference.matches) animations.forEach((animation) => animation.cancel()); };
    preference.addEventListener("change", stop);
    return () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
      preference.removeEventListener("change", stop);
    };
  }, []);

  return (
    <section className={styles.chapter} aria-label="My role">
      <ChapterLabel number="02">MY ROLE</ChapterLabel>
      <ul ref={listRef} className={styles.roles}>
        {responsibilities.map(([title, descriptor]) => (
          <li key={title} className={styles.role}>
            <h3 className="type-h2">{title}</h3>
            <p className="type-small">{descriptor}</p>
          </li>
        ))}
      </ul>
      <div className={styles.additionalInvolvement}>
        <p className="type-micro">ADDITIONAL INVOLVEMENT</p>
        <p className="type-small">Client Meetings · Final Delivery</p>
      </div>
    </section>
  );
}

export { Process } from "./process";
