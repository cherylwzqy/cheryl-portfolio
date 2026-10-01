"use client";

import { useEffect, useRef } from "react";
import styles from "./process.module.css";

type Phase = {
  kind: "phase";
  title: string;
  activities: string[];
  contributions: string[];
  additionalInvolvement?: string[];
};
type Milestone = {
  kind: "milestone";
  week: string;
  title: string;
  activities: string[];
  involvement?: "additional";
};

// Contributions are annotations within phases, not additional official stages.
const roadmap: (Phase | Milestone)[] = [
  { kind: "phase", title: "DISCOVER", activities: ["Secondary Research", "Primary Research"], contributions: ["Competitive Research"] },
  { kind: "milestone", week: "WEEK 3", title: "CLIENT CHECK-IN #1", activities: ["Research findings", "Alignment with client"], involvement: "additional" },
  { kind: "milestone", week: "WEEK 5", title: "MIDPOINT PRESENTATION", activities: ["Primary research analysis", "External innovation research"], involvement: "additional" },
  { kind: "phase", title: "DEVELOP", activities: ["Ideation", "Visual Explorations", "Crafting a Blueprint"], contributions: ["Stakeholder Mapping", "Journey Mapping", "Service Blueprint"] },
  { kind: "milestone", week: "WEEK 7", title: "CLIENT CHECK-IN #2", activities: ["Developed blueprint and stakeholder maps"] },
  { kind: "phase", title: "DELIVER", activities: ["Final Deliverables", "Documentation & Hand-off"], contributions: [], additionalInvolvement: ["Final Presentation Preparation"] },
  { kind: "milestone", week: "WEEK 10", title: "FINAL PRESENTATION", activities: ["Final deliverables", "Documentation & hand-off"] },
];

function phaseInvolvement(phase: Phase) {
  return [
    ...phase.contributions.map((name) => ({ name, kind: "primary" })),
    ...(phase.additionalInvolvement ?? []).map((name) => ({ name, kind: "additional" })),
  ];
}

type Point = { x: number; y: number };
const clamp = (value: number) => Math.max(0, Math.min(1, value));

export function Process() {
  const diagramRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const diagram = diagramRef.current;
    if (!diagram) return;
    const svg = diagram.querySelector("svg")!;
    const guide = svg.querySelector<SVGPathElement>("[data-guide]")!;
    const progressPath = svg.querySelector<SVGPathElement>("[data-progress]")!;
    const light = svg.querySelector<SVGCircleElement>("[data-light]")!;
    const events = Array.from(diagram.querySelectorAll<HTMLElement>("[data-event]"));
    const contributions = Array.from(diagram.querySelectorAll<HTMLElement>("[data-contribution]"));
    const branchGuides = svg.querySelectorAll<SVGPathElement>("[data-branch-guide]");
    const branches = svg.querySelectorAll<SVGPathElement>("[data-branch]");
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let points: Point[] = [];
    let distances: number[] = [];
    let branchEnds: { start: Point; end: Point }[] = [];
    let totalLength = 0;
    let frame = 0;
    let needsMeasure = true;

    const measure = () => {
      const bounds = diagram.getBoundingClientRect();
      const anchor = (element: Element): Point => {
        const dot = element.querySelector("[data-anchor]")!.getBoundingClientRect();
        return { x: dot.left + dot.width / 2 - bounds.left, y: dot.top + dot.height / 2 - bounds.top };
      };
      points = events.map(anchor);
      svg.setAttribute("viewBox", `0 0 ${bounds.width} ${bounds.height}`);
      let path = `M${points[0].x} ${points[0].y}`;
      distances = [0];
      for (let index = 1; index < points.length; index++) {
        const previous = points[index - 1];
        const current = points[index];
        // Cross the empty space between annotations, never through their text.
        const previousBottom = events[index - 1].getBoundingClientRect().bottom - bounds.top;
        const bend = (previousBottom + current.y) / 2;
        path += ` V${bend} H${current.x} V${current.y}`;
        distances.push(distances[index - 1] + current.y - previous.y + Math.abs(current.x - previous.x));
      }
      guide.setAttribute("d", path);
      progressPath.setAttribute("d", path);
      totalLength = progressPath.getTotalLength();
      branchEnds = contributions.map((item, index) => {
        const parent = item.closest<HTMLElement>("[data-event]")!;
        const start = points[events.indexOf(parent)];
        const end = anchor(item);
        const path = `M${start.x} ${start.y} H${start.x + 10} V${end.y} H${end.x}`;
        branchGuides[index].setAttribute("d", path);
        branches[index].setAttribute("d", path);
        return { start, end };
      });
      needsMeasure = false;
    };

    const update = () => {
      frame = 0;
      if (needsMeasure) measure();
      const bounds = diagram.getBoundingClientRect();
      const cursor = preference.matches ? Infinity : window.innerHeight * 0.8 - bounds.top;
      let drawn = 0;
      for (let index = 1; index < points.length; index++) {
        const fraction = clamp((cursor - points[index - 1].y) / (points[index].y - points[index - 1].y));
        drawn += (distances[index] - distances[index - 1]) * fraction;
      }
      progressPath.style.strokeDashoffset = String(1 - clamp(drawn / totalLength));
      events.forEach((event, index) => { event.dataset.active = String(cursor >= points[index].y - 1); });
      let activeBranch = -1;
      branchEnds.forEach(({ start, end }, index) => {
        const fraction = clamp((cursor - start.y) / (end.y - start.y));
        branches[index].style.strokeDashoffset = String(1 - fraction);
        contributions[index].dataset.active = String(cursor >= end.y - 1);
        if (fraction > 0 && fraction < 1) activeBranch = index;
      });
      // Only contribution work receives the restrained blue atmospheric emphasis.
      if (activeBranch >= 0 && !preference.matches) {
        const branch = branches[activeBranch];
        const fraction = 1 - Number(branch.style.strokeDashoffset);
        const point = branch.getPointAtLength(branch.getTotalLength() * fraction);
        light.setAttribute("cx", String(point.x));
        light.setAttribute("cy", String(point.y));
        light.style.opacity = "1";
      } else {
        light.style.opacity = "0";
      }
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const resize = () => { needsMeasure = true; schedule(); };
    const observer = new ResizeObserver(resize);
    observer.observe(diagram);
    events.forEach((event) => observer.observe(event));
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", resize);
    preference.addEventListener("change", schedule);
    update();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", resize);
      preference.removeEventListener("change", schedule);
    };
  }, []);

  return (
    <section className={styles.process} aria-labelledby="process-heading">
      <h2 id="process-heading" className={`${styles.label} type-micro`}><span>03</span><span>PROCESS</span></h2>
      <div className={styles.processKey}>
        <ul className={`${styles.legend} type-micro`} aria-label="Process legend">
          <li><span className={styles.contributionKey} aria-hidden="true" />PRIMARY CONTRIBUTION</li>
          <li className={styles.additionalKeyLabel}><span className={styles.additionalKey} aria-hidden="true" />ADDITIONAL INVOLVEMENT</li>
          <li><span className={styles.projectKey} aria-hidden="true" />PROJECT PROCESS</li>
        </ul>
      </div>
      <div ref={diagramRef} className={styles.diagram}>
        <svg className={styles.drawing} aria-hidden="true">
          <defs>
            <radialGradient id="process-contribution-light">
              <stop stopColor="var(--color-ux)" stopOpacity="0.045" />
              <stop offset="1" stopColor="var(--color-ux)" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle data-light r="120" cx="0" cy="0" fill="url(#process-contribution-light)" opacity="0" />
          <path data-guide className={styles.guide} />
          <path data-progress className={styles.progress} pathLength="1" />
          {involvement.map(({ name, kind }) => (
            <g key={name}>
              <path data-branch-guide className={styles.guide} />
              <path data-branch data-involvement={kind} className={styles.branch} pathLength="1" />
            </g>
          ))}
        </svg>
        <ol className={styles.roadmap}>
          {roadmap.map((event) => (
            <li key={event.title} data-event data-kind={event.kind} data-active="true"
              data-involvement={event.kind === "milestone" ? event.involvement : undefined}
              className={`${styles.event} ${event.kind === "phase" ? styles.phase : styles.milestone}`}>
              <span data-anchor className={styles.anchor} aria-hidden="true" />
              {event.kind === "milestone" && <p className={`${styles.week} type-micro`}>{event.week}</p>}
              <h3 className={event.kind === "phase" ? "type-h2" : "type-micro"}>{event.title}</h3>
              <ul className={`${styles.activities} type-small`} aria-label="Project activities">
                {event.activities.map((activity) => <li key={activity}>{activity}</li>)}
              </ul>
              {event.kind === "phase" && phaseInvolvement(event).length > 0 && (
                <ul className={`${styles.contributions} type-small`} aria-label={`My involvement within ${event.title.toLowerCase()}`}>
                  {phaseInvolvement(event).map(({ name, kind }) => (
                    <li key={name} data-contribution data-involvement={kind} data-active="true">
                      <span data-anchor className={styles.contributionAnchor} aria-hidden="true" />{name}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const involvement = roadmap.flatMap((event) => event.kind === "phase" ? phaseInvolvement(event) : []);
