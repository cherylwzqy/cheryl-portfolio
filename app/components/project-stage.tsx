"use client";

import TopNavigation from "./top-navigation";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import styles from "./project-stage.module.css";

type Project = {
  number?: string;
  date: string;
  title: string;
  subtitle: string;
  disciplines: string;
  description?: string;
  thumbnail?: StaticImageData;
  titleLanguage?: string;
  href?: string;
};

type ProjectStageProps = {
  category: "ux" | "interior" | "lighting" | "production";
  title: string;
  introduction: string;
  projects: Project[];
};

type Cue = { index: number; phase: "color" | "fade" | "hold" | "restore" };
const timing = { color: 450, fade: 700, hold: 550, restore: 800 };

export default function ProjectStage({ category, title, introduction, projects }: ProjectStageProps) {
  const router = useRouter();
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
      // Mirrored beams start 24px beyond the right edge.
      const fromRight = category === "lighting" || category === "production";
      const distance = fromRight ? stage.width + 24 - x : x;
      const direction = fromRight ? -1 : 1;
      setAim({ x: `${x}px`, y: `${y}px`, angle: direction * Math.atan2(y - stage.height * 0.56, distance) * 180 / Math.PI });
    };
    measure();
    const observer = new ResizeObserver(measure);
    if (stageRef.current) observer.observe(stageRef.current);
    rowRefs.current.forEach((row) => { if (row) observer.observe(row); });
    return () => observer.disconnect();
  }, [active, category]);

  useEffect(() => {
    if (!cue) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reduced && cue.phase !== "hold" ? 0 : timing[cue.phase];
    const timer = window.setTimeout(() => {
      const destination = projects[cue.index].href;
      if (cue.phase === "hold" && destination) {
        router.push(destination);
      } else if (cue.phase === "restore") {
        locked.current = false;
        setCue(null);
      } else {
        // Projects without a detail page return to their resting state.
        const next = { color: "fade", fade: "hold", hold: "restore" } as const;
        setCue({ index: cue.index, phase: next[cue.phase] });
      }
    }, duration);
    return () => window.clearTimeout(timer);
  }, [cue, projects, router]);

  const startCue = (index: number) => {
    if (locked.current) return;
    locked.current = true;
    setCue({ index, phase: "color" });
    const destination = projects[index].href;
    if (destination) router.prefetch(destination);
  };

  const lightStyle = {
    "--category-accent": `var(--color-${category})`,
    "--project-count": projects.length,
    "--project-x": aim.x,
    "--project-y": aim.y,
    "--project-angle": `${aim.angle}deg`,
    "--color-time": `${timing.color}ms`,
    "--fade-time": `${timing.fade}ms`,
    "--restore-time": `${timing.restore}ms`,
  } as CSSProperties;

  return (
    <main ref={stageRef} className={styles.stage} style={lightStyle}
      data-category={category}
      data-lit={active !== null} data-cue={cue?.phase ?? "idle"}
      onPointerLeave={() => setHovered(null)}>
      <TopNavigation label={title} />
      <div className={styles.light} aria-hidden="true">
        <div className={styles.beam} />
        <div className={styles.pool} />
      </div>
      <header className={styles.header}>
        <h1 className="type-h1">{title}</h1>
        <p className="type-body">{introduction}</p>
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
            {project.thumbnail && <Image className={styles.thumbnail}
              src={project.thumbnail} alt="" sizes="(max-width: 800px) 25vw, 22vw" />}
            <span className={styles.information}>
              <span className={`${styles.date} type-micro`}>{project.number && <span className={styles.number}>{project.number}</span>}{project.date}</span>
              <span className={`${styles.title} type-h3`} lang={project.titleLanguage}>{project.title}</span>
              {project.subtitle && <span className={`${styles.subtitle} type-subtitle`}>{project.subtitle}</span>}
              <span className={`${styles.metadata} type-small`}>{project.disciplines}</span>
            </span>
            {project.description && <span className={`${styles.description} type-small type-chinese`} lang="zh-Hans">{project.description}</span>}
          </button>
        ))}
        {projects.slice(1).map((project, index) => (
          <div key={project.title} className={styles.divider} aria-hidden="true"
            style={{ top: ((index + 1) / projects.length) * 100 + "%" }} />
        ))}
      </div>
      <div className={styles.home} inert={cue !== null}>
        <Link href="/" className="secondary-link type-micro">
          <span className="secondary-light" aria-hidden="true" />
          <span className="secondary-label">HOME</span>
        </Link>
      </div>
    </main>
  );
}
