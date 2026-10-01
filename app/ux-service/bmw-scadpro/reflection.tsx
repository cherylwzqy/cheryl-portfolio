"use client";

import { useEffect, useRef } from "react";
import styles from "./reflection.module.css";
import ReflectionVisual from "./reflection-visual";

const chapters = [
  {
    number: "01",
    title: ["FINDING CLARITY", "IN COMPLEXITY."],
    paragraphs: [
      "This was my first UX and service design project, and the pace was very different from the interior design projects I was used to. Our team of more than 20 people had to quickly explore different directions, gather information from dozens of sources, and bring everything back together within a very short timeframe.",
      "At first, I found it difficult to adapt to the amount and speed of information. Over time, however, this became one of the most rewarding parts of the project. I learned how to sort through scattered information, identify what was useful, decide what needed deeper exploration, and translate complex relationships into clear visual structures.",
      "What I enjoyed most was finding clarity within complexity — looking at many disconnected pieces and gradually finding the most logical and effective way forward. It made me realize that, regardless of the medium, this is also what I value about design itself.",
    ],
  },
  {
    number: "02",
    title: ["WORKING AS", "ONE TEAM."],
    paragraphs: [
      "This was also my first time working in a team of more than 20 people. We had to define roles quickly, work independently in different directions, and then constantly regroup to connect our findings and make decisions together.",
      "Learning when to separate, when to collaborate, and how to bring individual work back into one shared direction became another important part of the experience. Despite the intensity of the project, I found this way of working exciting and motivating.",
    ],
  },
];

export default function Reflection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const articles = Array.from(section.querySelectorAll("article"));
    const paragraphs = Array.from(section.querySelectorAll<HTMLElement>("[data-paragraph]"));
    const revealed = new WeakMap<HTMLElement, number>();
    let frame = 0;
    const update = () => {
      frame = 0;
      paragraphs.forEach((paragraph) => {
        const progress = preference.matches ? 1 : Math.max(0, Math.min(1,
          (window.innerHeight * 0.9 - paragraph.getBoundingClientRect().top) / (window.innerHeight * 0.22),
        ));
        // Reading progress is retained: scrolling back never hides earlier copy.
        const visible = Math.max(revealed.get(paragraph) ?? 0, progress);
        revealed.set(paragraph, visible);
        paragraph.style.opacity = String(0.15 + 0.85 * visible);
        paragraph.style.transform = `translateY(${6 * (1 - visible)}px)`;
      });
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const observer = new ResizeObserver(schedule);
    articles.forEach((article) => observer.observe(article));
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    preference.addEventListener("change", schedule);
    update();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      preference.removeEventListener("change", schedule);
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.reflection} aria-labelledby="reflection-heading">
      <h2 id="reflection-heading" className={`${styles.label} type-micro`}>
        <span>05</span><span>REFLECTION</span>
      </h2>
      <div className={styles.chapters}>
        {chapters.map(({ number, title, paragraphs }) => (
          <article key={number} className={styles.chapter} aria-labelledby={`reflection-${number}`}>
            <h3 id={`reflection-${number}`} className={`${styles.statement} type-display`}>
              {title.join(" ")}
            </h3>
            <div className={`${styles.copy} type-body`}>
              {paragraphs.map((paragraph) => <p key={paragraph} data-paragraph>{paragraph}</p>)}
            </div>
            <ReflectionVisual kind={number === "01" ? "lines" : "dots"} />
          </article>
        ))}
      </div>
    </section>
  );
}
