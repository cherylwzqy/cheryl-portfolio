import Link from "next/link";
import type { CSSProperties } from "react";
import styles from "./case-study-footer.module.css";

export interface CaseStudyFooterProps {
  theme?: "dark" | "light";
  backHref: string;
  backLabel: string;
  homeHref?: string;
  previousProjectHref?: string;
  nextProjectHref?: string;
  nextProjectDisabled?: boolean;
  projectNavigationLabel?: string;
  accentColor?: string;
}

export default function CaseStudyFooter({ theme = "dark", backHref, backLabel, homeHref = "/", previousProjectHref, nextProjectHref, nextProjectDisabled = false, projectNavigationLabel, accentColor }: CaseStudyFooterProps) {
  const projectHref = previousProjectHref || nextProjectHref;
  const previous = Boolean(previousProjectHref);
  const customStyle = accentColor ? { "--case-footer-accent": accentColor, "--case-footer-hover": accentColor } as CSSProperties : undefined;

  return (
    <footer className={`${styles.footer} ${styles[theme]}`} style={customStyle}>
      <nav className={`${styles.navigation} type-micro`} aria-label="Continue exploring">
        <Link href={backHref} className={styles.back}>
          <span className={styles.glow} aria-hidden="true" />
          <span className={styles.label}><span className={`${styles.arrow} ${styles.leftArrow}`} aria-hidden="true">←</span> {backLabel}</span>
        </Link>
        <Link href={homeHref} className={styles.home}>
          <span className={styles.glow} aria-hidden="true" />
          <span className={styles.label}>HOME</span>
        </Link>
        {projectHref && (
          <Link href={projectHref} className={styles.project}>
            <span className={styles.glow} aria-hidden="true" />
            <span className={styles.label}>
              {previous && <><span className={`${styles.arrow} ${styles.leftArrow}`} aria-hidden="true">←</span> </>}
              {projectNavigationLabel || (previous ? "PREVIOUS PROJECT" : "NEXT PROJECT")}
              {!previous && <> <span className={`${styles.arrow} ${styles.rightArrow}`} aria-hidden="true">→</span></>}
            </span>
          </Link>
        )}
        {!projectHref && nextProjectDisabled && (
          <span className={`${styles.project} ${styles.disabledProject}`} role="link" aria-disabled="true">
            <span className={styles.label}>NEXT PROJECT <span className={`${styles.arrow} ${styles.rightArrow}`} aria-hidden="true">→</span></span>
          </span>
        )}
      </nav>
    </footer>
  );
}
