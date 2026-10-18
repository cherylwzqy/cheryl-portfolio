"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const categories = [
  { name: "UX / Service Design", color: "var(--color-ux)", href: "/ux-service" },
  // Preserve the existing red until migration to --color-lighting is approved.
  { name: "Lighting / Motion Design", color: "#D93A3A", href: "/lighting-motion" },
  { name: "Other Works", color: "var(--color-production)", href: "/others" },
];

type ClickCue = { index: number; phase: "color" | "fade" | "hold" | "restore" };
const cueTiming = { color: 450, fade: 700, hold: 550, restore: 800 };

const secondaryLinks: { label: string; href?: string }[] = [
  { label: "RESUME", href: "/resume" },
  { label: "CONTACT", href: "/contact" },
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
    router.prefetch(categories[index].href);
  };

  useEffect(() => {
    if (!clickCue) return;
    // Reduced motion keeps the same states and hold, with no animated sweep,
    // color blend, or content fade. Timers are cleaned up on every phase/unmount.
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reducedMotion && clickCue.phase !== "hold" ? 0 : cueTiming[clickCue.phase];
    const timer = window.setTimeout(() => {
      const nextPhase = { color: "fade", fade: "hold", hold: "restore" } as const;
      if (clickCue.phase === "hold") {
        router.push(categories[clickCue.index].href);
      } else if (clickCue.phase === "restore") {
        cueLocked.current = false;
        setClickCue(null);
      } else {
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
    <main aria-label="Multidisciplinary design portfolio">
      <section
        ref={stageRef}
        className="stage"
        aria-label="Design disciplines"
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
          <h1 className="identity-title type-h3">
            <span className="identity-name">CHERYL W.</span>{" "}
            <span className="identity-edition">Portfolio 2026</span>
          </h1>
          <p className="identity-statement type-small">I believe design creates experiences.</p>
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
              <span className="discipline-number type-micro" aria-hidden="true">0{index + 1}</span>
              <span className="discipline-name type-subtitle type-navigation">{category.name}</span>
            </button>
          ))}
        </div>
        <div className="secondary-links" inert={clickCue !== null}>
          {secondaryLinks.map(({ label, href }) => href ? (
            <Link key={label} className="secondary-link type-micro" href={href} tabIndex={0}>
              <span className="secondary-light" aria-hidden="true" />
              <span className="secondary-label">{label}</span>
            </Link>
          ) : (
            <a
              key={label}
              className="secondary-link type-micro"
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
      </section>
    </main>
  );
}
