"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import styles from "./project-stage.module.css";

const projects = [
  {
    date: "2026.04",
    title: "Links2Wellbeing",
    subtitle: "Knowledge Hub",
    disciplines: "Service Design · UX Research · Strategy",
    description: "社区老年服务机构可持续的知识共享平台",
  },
  {
    date: "2024.06",
    title: "BMW × SCADpro",
    subtitle: "Service Blueprint",
    disciplines: "Service Design · Research · Strategy",
    description: "BMW 集团内部服务设计项目",
  },
];

type Cue = { index: number; phase: "color" | "fade" | "hold" | "restore" };
const timing = { color: 450, fade: 700, hold: 550, restore: 800 };

export default function ProjectStage() {
  const stageRef = useRef<HTMLElement>(null);
  const rowRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const locked = useRef(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const [focused, setFocused] = useState<number | null>(null);
  const [cue, setCue] = useState<Cue | null>(null);
  const [aim, setAim] = useState({ x: "50vw", y: "56svh", angle: 0 });
  const active = cue?.index ?? hovered ?? focused;

  useEffect(() => {
    if (active === null) return;
    const measure = () => {
      const stage = stageRef.current?.getBoundingClientRect();
      const row = rowRefs.current[active]?.getBoundingClientRect();
      if (!stage || !row) return;
      const x = row.left + row.width / 2 - stage.left;
      const y = row.top + row.height / 2 - stage.top;
      setAim({ x: `${x}px`, y: `${y}px`, angle: Math.atan2(y - stage.height * 0.56, x) * 180 / Math.PI });
    };
    measure();
    const observer = new ResizeObserver(measure);
    if (stageRef.current) observer.observe(stageRef.current);
    rowRefs.current.forEach((row) => { if (row) observer.observe(row); });
    return () => observer.disconnect();
  }, [active]);

  useEffect(() => {
    if (!cue) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reduced && cue.phase !== "hold" ? 0 : timing[cue.phase];
    const timer = window.setTimeout(() => {
      if (cue.phase === "restore") {
        locked.current = false;
        setCue(null);
      } else {
        // Future case-study navigation belongs at the end of the hold.
        const next = { color: "fade", fade: "hold", hold: "restore" } as const;
        setCue({ index: cue.index, phase: next[cue.phase] });
      }
    }, duration);
    return () => window.clearTimeout(timer);
  }, [cue]);

  const startCue = (index: number) => {
    if (locked.current) return;
    locked.current = true;
    setCue({ index, phase: "color" });
  };

  const lightStyle = {
    "--project-x": aim.x,
    "--project-y": aim.y,
    "--project-angle": `${aim.angle}deg`,
    "--color-time": `${timing.color}ms`,
    "--fade-time": `${timing.fade}ms`,
    "--restore-time": `${timing.restore}ms`,
  } as CSSProperties;

  return (
    <main ref={stageRef} className={styles.stage} style={lightStyle}
      data-lit={active !== null} data-cue={cue?.phase ?? "idle"}
      onPointerLeave={() => setHovered(null)}>
      <div className={styles.light} aria-hidden="true">
        <div className={styles.beam} />
        <div className={styles.pool} />
      </div>
      <header className={styles.header}>
        <h1>UX / SERVICE DESIGN</h1>
        <p>Designing systems, services, and interactions around human needs.</p>
      </header>
      <div className={styles.projects} onPointerLeave={() => setHovered(null)}>
        {projects.map((project, index) => (
          <button key={project.title} type="button" className={styles.project}
            ref={(element) => { rowRefs.current[index] = element; }}
            data-active={active === index} aria-pressed={active === index}
            aria-disabled={cue !== null} tabIndex={cue && cue.index !== index ? -1 : 0}
            onPointerEnter={(event) => { if (event.pointerType !== "touch") setHovered(index); }}
            onFocus={() => setFocused(index)} onBlur={() => setFocused(null)}
            onClick={() => startCue(index)}>
            <span className={styles.information}>
              <span className={styles.date}>{project.date}</span>
              <span className={styles.title}>{project.title}</span>
              {project.subtitle && <span className={styles.subtitle}>{project.subtitle}</span>}
              <span className={styles.metadata}>{project.disciplines}</span>
            </span>
            <span className={styles.description} lang="zh-Hans">{project.description}</span>
          </button>
        ))}
        <div className={styles.divider} aria-hidden="true" />
      </div>
      <div className={styles.home} inert={cue !== null}>
        <Link href="/" className="secondary-link">
          <span className="secondary-light" aria-hidden="true" />
          <span className="secondary-label">HOME</span>
        </Link>
      </div>
    </main>
  );
}
