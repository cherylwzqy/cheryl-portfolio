"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { useRouter } from "next/navigation";

const categories = [
  { name: "UX / Service Design", color: "#4F7DFF" },
  { name: "Interior Design", color: "#E8893A" },
  { name: "Lighting / Motion Design", color: "#D93A3A" },
  { name: "Production Design", color: "#E8024B" },
];

type ClickCue = { index: number; phase: "color" | "fade" | "hold" | "restore" };
const cueTiming = { color: 450, fade: 700, hold: 550, restore: 800 };

// Add the destination URLs when the resume and contact details are supplied.
const secondaryLinks: { label: string; href?: string }[] = [
  { label: "RESUME" },
  { label: "CONTACT" },
];

export default function Home() {
  const router = useRouter();
  const stageRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const [hovered, setHovered] = useState<number | null>(null);
  const [focused, setFocused] = useState<number | null>(null);
  const [cue, setCue] = useState({ x: "50vw", y: "55svh", angle: 0 });
  const [clickCue, setClickCue] = useState<ClickCue | null>(null);
  const cueLocked = useRef(false);
  const active = clickCue?.index ?? hovered ?? focused;

  const startCue = (index: number) => {
    if (cueLocked.current) return;
    cueLocked.current = true;
    setClickCue({ index, phase: "color" });
    if (index === 0) router.prefetch("/ux-service");
  };

  useEffect(() => {
    if (!clickCue) return;
    // Reduced motion keeps the same states and hold, with no animated sweep,
    // color blend, or content fade. Timers are cleaned up on every phase/unmount.
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reducedMotion && clickCue.phase !== "hold" ? 0 : cueTiming[clickCue.phase];
    const timer = window.setTimeout(() => {
      const nextPhase = { color: "fade", fade: "hold", hold: "restore" } as const;
      if (clickCue.phase === "hold" && clickCue.index === 0) {
        router.push("/ux-service");
      } else if (clickCue.phase === "restore") {
        cueLocked.current = false;
        setClickCue(null);
      } else {
        // Categories without a destination keep the temporary restore cue.
        setClickCue({ index: clickCue.index, phase: nextPhase[clickCue.phase] });
      }
    }, duration);
    return () => window.clearTimeout(timer);
  }, [clickCue, router]);

  useEffect(() => {
    if (active === null) return;

    const aim = () => {
      const stage = stageRef.current?.getBoundingClientRect();
      const subject = itemsRef.current[active]?.getBoundingClientRect();
      if (!stage || !subject) return;
      const x = subject.left + subject.width / 2 - stage.left;
      const y = subject.top + subject.height / 2 - stage.top;
      setCue({ x: `${x}px`, y: `${y}px`, angle: Math.atan2(x - stage.width / 2, y) * 180 / Math.PI });
    };

    aim();
    const observer = new ResizeObserver(aim);
    if (stageRef.current) observer.observe(stageRef.current);
    return () => observer.disconnect();
  }, [active]);

  const lightStyle = {
    "--target-x": cue.x,
    "--target-y": cue.y,
    "--beam-angle": `${cue.angle}deg`,
    "--category-color": categories[clickCue?.index ?? 0].color,
    "--color-duration": `${cueTiming.color}ms`,
    "--content-duration": `${cueTiming.fade}ms`,
    "--restore-duration": `${cueTiming.restore}ms`,
  } as CSSProperties;

  return (
    <main
      ref={stageRef}
      className="stage"
      aria-label="Multidisciplinary design portfolio"
      data-lit={active !== null}
      data-cue={clickCue?.phase ?? "idle"}
      style={lightStyle}
      onPointerLeave={() => setHovered(null)}
    >
      <div className="spotlight" aria-hidden="true">
        <div className="spotlight-beam" />
        <div className="spotlight-pool" />
      </div>
      <header className="identity">
        <h1 className="identity-title">
          <span className="identity-name">CHERYL W.</span>{" "}
          <span className="identity-edition">Portfolio 2026</span>
        </h1>
        <p className="identity-statement">I believe design creates experiences.</p>
      </header>
      <div className="disciplines" onPointerLeave={() => setHovered(null)}>
        {categories.map((category, index) => (
          <button
            key={category.name}
            ref={(element) => { itemsRef.current[index] = element; }}
            type="button"
            className="discipline"
            data-active={active === index}
            aria-pressed={active === index}
            aria-disabled={clickCue !== null}
            tabIndex={clickCue && clickCue.index !== index ? -1 : 0}
            onClick={() => startCue(index)}
            onPointerEnter={(event) => {
              if (event.pointerType !== "touch") setHovered(index);
            }}
            onFocus={() => setFocused(index)}
            onBlur={() => setFocused(null)}
          >
            <span className="discipline-number" aria-hidden="true">0{index + 1}</span>
            <span className="discipline-name">{category.name}</span>
          </button>
        ))}
      </div>
      <div className="secondary-links" inert={clickCue !== null}>
        {secondaryLinks.map(({ label, href }) => (
          <a
            key={label}
            className="secondary-link"
            href={href}
            role={href ? undefined : "link"}
            aria-disabled={href ? undefined : true}
            tabIndex={0}
          >
            <span className="secondary-light" aria-hidden="true" />
            <span className="secondary-label">{label}</span>
          </a>
        ))}
      </div>
    </main>
  );
}
