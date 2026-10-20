import TopNavigation from "../components/top-navigation";
import { publicAsset } from "../lib/public-asset";
import CaseStudyFooter from "../components/project-detail/case-study-footer";
import type { CSSProperties } from "react";
import styles from "./motion-project-detail.module.css";

type MotionProjectDetailProps = {
  title: string;
  number: string;
  category: string;
  software: string;
  year: string;
  songCredit?: string;
  videoSrc: string;
  description: string;
  previousProjectHref?: string;
  nextProjectHref?: string;
  nextProjectDisabled?: boolean;
  accentColor?: string;
};

export default function MotionProjectDetail({
  title, number, category, software, year, songCredit, videoSrc, description, previousProjectHref, nextProjectHref, nextProjectDisabled, accentColor = "var(--color-lighting)",
}: MotionProjectDetailProps) {
  return (
    <main className={styles.detail} style={{ "--motion-accent": accentColor } as CSSProperties}>
      <TopNavigation parentHref="/lighting-motion" label="← BACK TO LIGHTING / MOTION" />
      <div className={styles.content}>
        <header className={styles.header}>
          <div className={styles.heading}>
            <p className={`${styles.eyebrow} type-micro`}>LIGHTING / MOTION DESIGN — {number}</p>
            <h1 className={`${styles.title} type-display`}>{title}</h1>
          </div>
          <div className={styles.information}>
            <p className={`${styles.metadata} type-body`}>{category} · {software} · {year}</p>
            {songCredit && <p className={`${styles.credit} type-small`}>{songCredit}</p>}
          </div>
        </header>
        <div className={styles.showcase}>
          <video className={styles.video} controls playsInline preload="metadata" aria-label={`${title} project video`}>
            <source src={publicAsset(videoSrc)} type="video/mp4" />
            Your browser does not support embedded video. <a href={publicAsset(videoSrc)}>Watch {title}</a>.
          </video>
        </div>
        <p className={`${styles.description} type-body`}>{description}</p>
      </div>
      <CaseStudyFooter
        theme="dark"
        backHref="/lighting-motion"
        backLabel="BACK TO LIGHTING / MOTION"
        accentColor={accentColor}
        previousProjectHref={previousProjectHref}
        nextProjectHref={nextProjectHref}
        nextProjectDisabled={nextProjectDisabled}
      />
    </main>
  );
}
