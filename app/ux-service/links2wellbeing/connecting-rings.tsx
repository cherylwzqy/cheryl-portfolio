"use client";

import type { PointerEvent } from "react";
import styles from "./links2wellbeing.module.css";

export default function ConnectingRings() {
  function replayEntrance(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "touch" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    event.currentTarget.querySelectorAll("circle").forEach((circle) => {
      circle.getAnimations().forEach((animation) => {
        animation.currentTime = 0;
        animation.play();
      });
    });
  }

  return (
    <div className={styles.rings} aria-hidden="true" onPointerEnter={replayEntrance}>
      <svg viewBox="0 0 560 460" fill="none" focusable="false">
        <path className={styles.connection} d="M0 200H70M490 200H560M280 425V460" />
        <circle className={styles.orangeRing} cx="215" cy="180" r="145" pathLength="1" />
        <circle className={styles.roseRing} cx="345" cy="180" r="145" pathLength="1" />
        <circle className={styles.tealRing} cx="280" cy="280" r="145" pathLength="1" />
      </svg>
    </div>
  );
}
