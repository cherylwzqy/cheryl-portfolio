import TopNavigation from "../top-navigation";
import type { ReactNode } from "react";
import Reveal from "./reveal";
import styles from "./project-detail.module.css";

export function ProjectDetail({ children, categoryHref, categoryLabel }: {
  children: ReactNode;
  categoryHref: string;
  categoryLabel: string;
}) {
  return (
    <main className={styles.detail}>
      <TopNavigation parentHref={categoryHref} label={categoryLabel} />
      {children}
    </main>
  );
}

export function ProjectHero({ eyebrow, title, subtitle, disciplines, year }: {
  eyebrow: string; title: string; subtitle: string; disciplines: string; year: string;
}) {
  return (
    <section className={styles.hero} aria-labelledby="project-title">
      <div className={styles.light} aria-hidden="true" />
      <Reveal className={styles.heroContent}>
        <p className={`${styles.eyebrow} type-micro`}>{eyebrow}</p>
        <h1 id="project-title" className={`${styles.title} type-display`}>{title}</h1>
        <p className={`${styles.subtitle} type-subtitle`}>{subtitle}</p>
        <div className={styles.details}>
          <p className="type-small">{disciplines}</p>
          <p className="type-micro">{year}</p>
        </div>
      </Reveal>
    </section>
  );
}

/** Numbered editorial section; later chapters can reuse the same structure. */
export function ProjectSection({ id, number, label, statement, children }: {
  id: string; number: string; label: string; statement: ReactNode; children: ReactNode;
}) {
  return (
    <section id={id} className={styles.section} aria-labelledby={`${id}-heading`}>
      <Reveal target={`.${styles.statement}`} distance={6} initialOpacity={0.2}>
        <h2 id={`${id}-heading`} className={`${styles.sectionLabel} type-micro`}>
          <span>{number}</span><span>{label}</span>
        </h2>
        <div className={styles.split}>
          <p className={`${styles.statement} type-h1`}>{statement}</p>
          <div className={`${styles.copy} type-body`}>{children}</div>
        </div>
      </Reveal>
    </section>
  );
}

export function ConfidentialityNote({ children }: { children: ReactNode }) {
  return <div className={`${styles.note} type-small`}>{children}</div>;
}
