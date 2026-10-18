import styles from "./education.module.css";

/** Four equal disciplines share one intersection; the drawing stays legible at rest. */
export default function Connections() {
  return (
    <figure className={styles.connections} aria-label="Intersection and connections between four design disciplines">
      <svg viewBox="0 0 440 290" fill="none" role="img" aria-labelledby="connections-title">
        <title id="connections-title">UX, interior, production, and lighting design connected around a shared center</title>
        <g className={styles.construction} stroke="currentColor" strokeWidth="0.7">
          <path d="M24 145H416M220 20V270M74 30L366 260M74 260L366 30" />
          <rect x="90" y="15" width="260" height="260" />
          <path d="M20 139V151M414 139V151M214 16H226M214 274H226" />
        </g>
        <g className={styles.orbits} strokeWidth="0.9">
          <ellipse cx="220" cy="145" rx="158" ry="72" stroke="currentColor" transform="rotate(-28 220 145)" />
          <ellipse cx="220" cy="145" rx="158" ry="72" stroke="currentColor" transform="rotate(28 220 145)" />
          <circle cx="220" cy="145" r="98" stroke="var(--color-ux)" strokeOpacity="0.6" />
          <path d="M122 145A98 98 0 0 1 220 47" stroke="var(--color-ux)" strokeWidth="1.5" />
          <g fill="var(--color-bg)" stroke="var(--color-ux)">
            <circle cx="220" cy="47" r="3.5" /><circle cx="318" cy="145" r="3.5" />
            <circle cx="220" cy="243" r="3.5" /><circle cx="122" cy="145" r="3.5" />
          </g>
        </g>
        <g stroke="var(--color-ux)" strokeWidth="1"><path d="M214 145H226M220 139V151" /></g>
        <g className={styles.diagramLabels} fill="currentColor">
          <text x="24" y="32">01 / UX &amp; SERVICE</text><text x="416" y="32" textAnchor="end">02 / INTERIOR</text>
          <text x="24" y="275">03 / PRODUCTION</text><text x="416" y="275" textAnchor="end">04 / LIGHT &amp; MOTION</text>
        </g>
      </svg>
    </figure>
  );
}
