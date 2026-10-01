import Link from "next/link";
import styles from "./closing.module.css";

/** Supply nextProjectHref when the next UX case study has a published route. */
export default function Closing({ nextProjectHref }: { nextProjectHref?: string }) {
  const nextLabel = <>NEXT PROJECT <span className={styles.arrow} aria-hidden="true">→</span></>;

  return (
    <footer className={styles.closing}>
      <p className={`${styles.statement} type-h2`}>
        Innovation begins when complexity becomes possibility.
      </p>
      <nav className={`${styles.navigation} type-micro`} aria-label="Continue exploring">
        <Link href="/ux-service" className={styles.back}>
          <span aria-hidden="true">←</span> BACK TO UX / SERVICE
        </Link>
        <Link href="/" className={styles.home}>HOME</Link>
        {nextProjectHref ? (
          <Link href={nextProjectHref} className={styles.next}>{nextLabel}</Link>
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
