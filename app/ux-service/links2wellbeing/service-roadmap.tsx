"use client";

import { useEffect, useRef } from "react";
import styles from "./links2wellbeing.module.css";

const phases = [
  { label: "PHASE 01 / PILOT", title: "Test the Foundation", accent: styles.pilotPhase, description: "Audit existing resources, co-design with a small group of Link Workers, and test a simplified Knowledge Hub.", activities: ["Organize existing resources", "Conduct small-scale co-design", "Test onboarding and core features"] },
  { label: "PHASE 02 / GROWTH", title: "Expand and Organize", accent: styles.growthPhase, description: "Introduce content governance, expand knowledge sharing, and integrate the Hub into training and daily workflows.", activities: ["Establish content ownership", "Expand community participation", "Integrate training and knowledge sharing"] },
  { label: "PHASE 03 / MATURITY", title: "Sustain and Evolve", accent: styles.maturityPhase, description: "Develop advanced capabilities, strengthen reporting, and establish stable long-term ownership and support.", activities: ["Improve search and learning features", "Strengthen reporting and evaluation", "Secure long-term hosting and support"] },
];

export default function ServiceRoadmap() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!element || preference.matches || !("IntersectionObserver" in window)) return;
    const animations: Animation[] = [];
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      if (!preference.matches) {
        const vertical = window.matchMedia("(max-width: 540px)").matches;
        const line = element.querySelector(`.${styles.roadmapLine}`);
        if (line) animations.push(line.animate([{ transform: vertical ? "scaleY(0)" : "scaleX(0)" }, { transform: "scale(1)" }], { duration: 1100, easing: "ease-out" }));
        element.querySelectorAll(`.${styles.roadmapMilestone}`).forEach((milestone, index) => {
          animations.push(milestone.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 400, delay: index * 300, fill: "backwards" }));
        });
        element.querySelectorAll(`.${styles.phaseContent}`).forEach((content, index) => {
          animations.push(content.animate([{ opacity: 0, transform: "translateY(6px)" }, { opacity: 1, transform: "translateY(0)" }], { duration: 600, delay: 150 + index * 300, easing: "ease-out", fill: "backwards" }));
        });
      }
      observer.disconnect();
    }, { threshold: 0.12 });
    const stopMotion = () => { if (preference.matches) animations.forEach((animation) => animation.cancel()); };
    preference.addEventListener("change", stopMotion);
    observer.observe(element);
    return () => { observer.disconnect(); animations.forEach((animation) => animation.cancel()); preference.removeEventListener("change", stopMotion); };
  }, []);

  return (
    <div ref={ref} className={styles.roadmap}>
      <div className={styles.roadmapLine} aria-hidden="true" />
      <ol className={styles.roadmapPhases}>
        {phases.map((phase) => (
          <li key={phase.label} className={phase.accent}>
            <span className={styles.roadmapMilestone} aria-hidden="true" />
            <div className={styles.phaseContent}>
              <p className={`${styles.phaseLabel} type-micro`}>{phase.label}</p>
              <h3 className="type-subtitle">{phase.title}</h3>
              <p className={`${styles.phaseDescription} type-body`}>{phase.description}</p>
              <ul className={`${styles.phaseActivities} type-small`}>
                {phase.activities.map((activity) => <li key={activity}>{activity}</li>)}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
