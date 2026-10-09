import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "../../components/project-detail/reveal";
import styles from "./links2wellbeing.module.css";
import ConnectingRings from "./connecting-rings";

export const metadata: Metadata = {
  title: "Links2Wellbeing | Cheryl Wang",
  description: "Designing a Sustainable Knowledge Hub. Supporting Link Workers with easier access to resources, shared knowledge, and practical training.",
};

const projectDetails = [
  { label: "PROJECT TYPE", items: ["Service Design", "Knowledge Sharing"] },
  { label: "COLLABORATION", items: ["OACAO", "Links2Wellbeing"] },
  { label: "TIMELINE", items: ["January – April 2026"] },
  { label: "MY FOCUS", items: ["Service Systems", "Implementation Roadmap", "Visualization"] },
];

export default function Links2WellbeingPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <nav className={`${styles.navigation} type-micro`} aria-label="Portfolio">
          <Link href="/ux-service">← UX / SERVICE DESIGN</Link>
          <Link href="/">HOME</Link>
        </nav>
        <section className={styles.hero} aria-labelledby="project-title">
          <Reveal distance={6} className={styles.heroCopy}>
            <p className={`${styles.eyebrow} type-micro`}>SERVICE DESIGN / 2026</p>
            <h1 id="project-title" className={`${styles.title} type-display`}>Links2Wellbeing</h1>
            <p className={`${styles.subtitle} type-subtitle`}>Designing a Sustainable Knowledge Hub</p>
            <p className={`${styles.description} type-body`}>Supporting Link Workers with easier access to resources, shared knowledge, and practical training.</p>
          </Reveal>
          <ConnectingRings />
        </section>
        <dl className={styles.metadata} aria-label="Project details">
          {projectDetails.map(({ label, items }) => (
            <div key={label} className={label === "TIMELINE" ? styles.timeline : undefined}>
              <dt className="type-micro">{label}</dt>
              <dd className="type-small">
                <ul role="list">
                  {items.map((item) => (
                    <li key={item}>
                      {label === "COLLABORATION" ? (
                        <a href={item === "OACAO" ? "https://www.oacao.org/" : "https://www.oacao.org/programs/links2wellbeing/"}
                          target="_blank" rel="noopener noreferrer">{item}</a>
                      ) : item}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
        <section className={styles.overview} aria-labelledby="overview-title">
          <Reveal distance={6} className={styles.overviewLayout}>
            <h2 id="overview-title" className={`${styles.overviewTitle} type-h2`}>Project Overview</h2>
            <div className={`${styles.overviewCopy} type-body`}>
              <p>Links2Wellbeing is a social prescribing program supported by OACAO. Working with the project team, we explored how a shared Knowledge Hub could help Link Workers access resources, learn from one another, and maintain consistent service delivery.</p>
              <p>Our proposal combined a digital Knowledge Hub with a broader support system, including service processes, future partnerships, and an implementation roadmap to support long-term sustainability.</p>
            </div>
          </Reveal>
        </section>
      </div>
    </main>
  );
}
