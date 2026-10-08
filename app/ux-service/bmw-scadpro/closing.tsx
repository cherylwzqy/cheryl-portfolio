import Link from "next/link";
import styles from "./closing.module.css";

/** Supply nextProjectHref when the next UX case study has a published route. */
export default function Closing({ nextProjectHref }: { nextProjectHref?: string }) {
  const nextLabel = <>NEXT PROJECT <span className={styles.arrow} aria-hidden="true">→</span></>;

  return (
    <footer className={styles.closing}>
      <div className={styles.quote}>
        <p className={styles.eyebrow}>A THOUGHT ON INNOVATION</p>
        <p className={styles.statement}>
          “Design thinking is a human-centered approach to innovation.”
        </p>
        <span className={styles.accent} aria-hidden="true" />
        <p className={styles.attribution}>Tim Brown / IDEO</p>
      </div>
      <nav className={`${styles.navigation} type-micro`} aria-label="Continue exploring">
        <Link href="/ux-service" className={styles.back}>
          <span className={styles.light} aria-hidden="true" />
          <span className={styles.label}><span aria-hidden="true">←</span> BACK TO UX / SERVICE</span>
        </Link>
        <Link href="/" className={styles.home}>
          <span className={styles.light} aria-hidden="true" />
          <span className={styles.label}>HOME</span>
        </Link>
        {nextProjectHref ? (
          <Link href={nextProjectHref} className={styles.next}>
            <span className={styles.light} aria-hidden="true" />
            <span className={styles.label}>{nextLabel}</span>
          </Link>
        ) : (
          <span className={styles.next} role="link" aria-disabled="true"
            aria-label="Next project, not available yet" title="Next project is not available yet">
            {nextLabel}
          </span>
        )}
      </nav>
    </footer>
  );
}
