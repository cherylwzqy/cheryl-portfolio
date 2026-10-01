"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import styles from "./reflection.module.css";

// Fixed compositions: no random or continuously moving elements.
// Leave the center clear for the caption in the scattered state.
const scattered = [[30, 30], [98, 46], [166, 24], [266, 40], [54, 78], [138, 86], [218, 66], [292, 94], [22, 126], [300, 154], [38, 190], [112, 202], [192, 188], [276, 214], [68, 246], [160, 256], [242, 244], [294, 260], [208, 32], [26, 252]];
const organized = Array.from({ length: 20 }, (_, index) => [56 + (index % 4) * 70, 52 + Math.floor(index / 4) * 44]);
// Uneven concentric spacing keeps the collective organic, without connections.
const regrouped = [[160, 76], [195, 85], [220, 112], [228, 147], [207, 185], [173, 201], [136, 194], [101, 173], [92, 133], [114, 94], [147, 108], [179, 112], [192, 143], [175, 170], [144, 167], [126, 142], [151, 133], [166, 131], [170, 149], [152, 150]];

export default function ReflectionVisual({ kind }: { kind: "lines" | "dots" }) {
  const fieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const field = fieldRef.current;
    if (!field) return;
    const touch = window.matchMedia("(hover: none)");
    let observer: IntersectionObserver | undefined;
    const configure = () => {
      observer?.disconnect();
      field.dataset.active = "false";
      if (touch.matches) {
        observer = new IntersectionObserver(([entry]) => {
          field.dataset.active = String(entry.isIntersecting);
        }, { threshold: 0.25 });
        observer.observe(field);
      }
    };
    configure();
    touch.addEventListener("change", configure);
    return () => { observer?.disconnect(); touch.removeEventListener("change", configure); };
  }, []);

  return (
    <div ref={fieldRef} className={styles.study} tabIndex={0} role="img"
      aria-label={kind === "lines" ? "Scattered information organizes into aligned fragments on hover or focus." : "Independent points regroup into a shared direction on hover or focus."}>
      <svg viewBox="0 0 320 280" aria-hidden="true">
        {scattered.map(([x, y], index) => {
          const [endX, endY] = (kind === "lines" ? organized : regrouped)[index];
          const size = [7, 10, 8, 12][index % 4];
          const style = {
            "--start-x": `${x}px`, "--start-y": `${y}px`,
            "--end-x": `${endX}px`, "--end-y": `${endY}px`,
            "--fragment-opacity": kind === "lines" ? 0.32 : [0.3, 0.34, 0.32][index % 3],
          } as CSSProperties;
          return <g key={index} className={styles.fragment} style={style}>
            {kind === "lines"
              ? <line x1={-size} y1="0" x2={size} y2="0" />
              : <circle cx="0" cy="0" r={[2, 2.5, 2.2][index % 3]} />}
          </g>;
        })}
      </svg>
      <span className={`${styles.hoverCue} type-micro`} aria-hidden="true">
        {kind === "lines" ? "From Noise to Clarity" : "From Individual to Collective"}
      </span>
    </div>
  );
}
