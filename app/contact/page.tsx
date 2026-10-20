import TopNavigation from "../components/top-navigation";
import type { Metadata } from "next";
import ContactLinks from "./contact-links";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact | Cheryl W.",
  description: "Open to opportunities, collaborations, and conversations about design.",
};

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <TopNavigation label="BACK TO HOME" />
      <div className={styles.content}>
        <div className={styles.spotlight} aria-hidden="true" />
        <header className={styles.introduction}>
          <p className={`${styles.label} type-micro`}>CONTACT / 2026</p>
          <h1 className={`${styles.heading} type-display`}>Let&apos;s create something together.</h1>
          <p className={`${styles.description} type-body`}>I&apos;m open to opportunities, collaborations,<br className={styles.desktopBreak} /> and conversations about design.</p>
        </header>
        <ContactLinks />
      </div>
      <footer className={`${styles.footer} type-micro`}>
        <span>CHERYL W. © 2026</span>
      </footer>
    </main>
  );
}
