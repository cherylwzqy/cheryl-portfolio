"use client";

import { useEffect, useId, useRef } from "react";
import styles from "./contribution-reflection.module.css";

const curve = "M0 130C45 130 80 90 125 90C210 90 285 150 375 150C465 150 535 70 625 70C715 70 790 120 875 120C930 120 970 90 1000 90";
const phases = [
  { weeks: "W01–03", title: "Research & Exploration", color: "orange", y: 90, description: "Build a shared understanding of social prescribing, OACAO, and Links2Wellbeing, and explore early design opportunities.", contributions: ["Background research", "Team discussions", "Understanding the project context"] },
  { weeks: "W03–06", title: "Client Research & Service Mapping", color: "rose", y: 150, description: "Engage with YWCA Hamilton, conduct design probes, and synthesize insights from multiple Senior Centres to identify shared challenges.", contributions: ["Design probes", "Client meetings with YWCA Hamilton", "Reviewing transcripts from other groups", "Research synthesis", "Initial service blueprint"] },
  { weeks: "W06–09", title: "Solution Iteration & Systems Design", color: "purple", y: 70, description: "Explore several solution directions, validate ideas with the client, and examine the stakeholder ecosystem, funding, and long-term service support.", contributions: ["Solution iterations", "Stakeholder mapping", "Service maps and diagrams", "System and implementation visualization"] },
  { weeks: "W09–12", title: "Implementation & Final Delivery", color: "teal", y: 120, description: "Finalize the Knowledge Hub direction, develop the final service deliverables, and prepare for the project presentation.", contributions: ["Final service blueprint and maps", "Implementation plan", "Presentation visuals", "Partial involvement in presentation preparation", "Participation in the final presentation"] },
];
const reflections = [
  { title: "Working with Diverse Stakeholders", color: "orange", icon: "M9 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8M23 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8M2 27v-3c0-6 14-6 14 0v3M18 27v-3c0-6 12-6 12 0v3", text: "I learned how to navigate different perspectives across OACAO, Link Workers, and multiple Senior Centres, and find common ground among diverse needs and constraints." },
  { title: "From Research to Visual Systems", color: "rose", icon: "M3 5h9v8H3ZM20 19h9v8h-9ZM7 19h8v8H7ZM12 9h12v10M7 13v6", text: "I developed my ability to synthesize complex information and translate it into clear service maps, diagrams, and implementation plans that support decision-making." },
  { title: "Designing for Long-Term Impact", color: "teal", icon: "M16 29V15M16 20C6 20 3 13 4 5c9 0 12 6 12 15M16 15c0-8 5-12 13-11 0 8-5 12-13 11", text: "This project made me more aware of the importance of sustainability in service design, including funding, ownership, and ongoing community support beyond the initial delivery." },
];

export default function ContributionReflection() {
  const id = useId().replace(/:/g, "");
  const ref = useRef<HTMLDivElement>(null);
  const motion = useRef<SVGAnimateMotionElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations: Animation[] = [];
    let timer: ReturnType<typeof setTimeout> | undefined;
    let entered = false;
    const startLight = () => {
      if (preference.matches || !motion.current) return;
      motion.current.parentElement?.setAttribute("style", "visibility: visible");
      motion.current.beginElement();
    };
    const enter = () => {
      if (entered) return;
      entered = true;
      if (preference.matches) return;
      const path = element.querySelector(`.${styles.curve}`);
      if (path) animations.push(path.animate([{ strokeDashoffset: 1 }, { strokeDashoffset: 0 }], { duration: 1400, easing: "ease-out" }));
      element.querySelectorAll(`.${styles.milestone}`).forEach((marker, index) => animations.push(marker.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 400, delay: index * 250, fill: "backwards" })));
      element.querySelectorAll(`.${styles.phase}`).forEach((phase, index) => animations.push(phase.animate([{ opacity: 0.15, transform: "translateY(6px)" }, { opacity: 1, transform: "translateY(0)" }], { duration: 600, delay: 200 + index * 250, fill: "backwards", easing: "ease-out" })));
      timer = setTimeout(startLight, 1500);
    };
    const observer = "IntersectionObserver" in window ? new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { enter(); observer?.disconnect(); } }, { threshold: 0.1 }) : undefined;
    if (observer) observer.observe(element); else enter();
    const updateMotion = () => {
      if (preference.matches) { clearTimeout(timer); animations.forEach((animation) => animation.cancel()); motion.current?.endElement(); }
      else if (entered) startLight();
    };
    preference.addEventListener("change", updateMotion);
    return () => { observer?.disconnect(); clearTimeout(timer); animations.forEach((animation) => animation.cancel()); preference.removeEventListener("change", updateMotion); };
  }, []);

  return (
    <section className={styles.section} aria-labelledby="contribution-reflection-title">
      <p className={`${styles.label} type-micro`}>07 / MY CONTRIBUTION &amp; REFLECTION</p>
      <h2 id="contribution-reflection-title" className={`${styles.heading} type-h2`}>12 Weeks of Service Design</h2>
      <p className={`${styles.introduction} type-body`}>I was involved throughout the 12-week project, from initial research to final delivery. My contribution focused on research synthesis, service mapping, visualization, and implementation planning.</p>
      <div ref={ref} className={styles.progression}>
        <svg className={styles.timeline} viewBox="0 0 1000 220" fill="none" aria-hidden="true" focusable="false">
          <defs>
            <linearGradient id={`${id}-gradient`} x1="0" y1="0" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="var(--l2w-orange)" /><stop offset="33%" stopColor="var(--l2w-rose)" /><stop offset="66%" stopColor="var(--l2w-purple)" /><stop offset="100%" stopColor="var(--l2w-teal)" />
            </linearGradient>
            <radialGradient id={`${id}-glow`}><stop stopColor="white" stopOpacity="0.9" /><stop offset="35%" stopColor="var(--l2w-teal)" stopOpacity="0.35" /><stop offset="100%" stopColor="var(--l2w-teal)" stopOpacity="0" /></radialGradient>
          </defs>
          <path id={`${id}-path`} className={styles.curve} d={curve} pathLength="1" stroke={`url(#${id}-gradient)`} />
          {phases.map((phase, index) => (
            <g key={phase.weeks} className={`${styles.markerGroup} ${styles[phase.color]}`}>
              <path className={styles.phaseArc} d={curve} pathLength="1" strokeDasharray="0.25 0.75" strokeDashoffset={-index * 0.25} />
              <path className={styles.connector} d={`M${125 + index * 250} ${phase.y + 10}V218`} />
              <circle className={styles.milestone} cx={125 + index * 250} cy={phase.y} r="9" />
            </g>
          ))}
          <g className={styles.travelingLight}>
            <circle r="16" fill={`url(#${id}-glow)`} /><circle r="4" fill="white" stroke="var(--l2w-teal)" strokeWidth="0.75" />
            <animateMotion ref={motion} dur="10s" repeatCount="indefinite" calcMode="paced" begin="indefinite" fill="remove"><mpath href={`#${id}-path`} /></animateMotion>
          </g>
        </svg>
        <div className={styles.phases}>
          {phases.map((phase) => (
            <article key={phase.weeks} className={`${styles.phase} ${styles[phase.color]}`}>
              <p className={`${styles.weeks} type-micro`}>{phase.weeks}</p>
              <h3 className="type-subtitle">{phase.title}</h3>
              <p className={`${styles.phaseDescription} type-body`}>{phase.description}</p>
              <div className={styles.panel}>
                <h4 className="type-micro">MY KEY CONTRIBUTIONS</h4>
                <ul className="type-small">{phase.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className={styles.reflection}>
        <h3 className="type-h2">My Reflection</h3>
        <p className={`${styles.reflectionIntroduction} type-body`}>This project deepened my understanding of community-based service design and strengthened my ability to turn complex research into clear, actionable solutions.</p>
        <div className={styles.reflections}>
          {reflections.map((reflection) => (
            <article key={reflection.title} className={styles[reflection.color]}>
              <div className={styles.icon}><svg viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false"><path d={reflection.icon} /></svg></div>
              <h4 className="type-subtitle">{reflection.title}</h4>
              <p className="type-body">{reflection.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
