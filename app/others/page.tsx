import TopNavigation from "../components/top-navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import beyondTheShadow from "../../public/images/others/BS.png";
import seekingOrder from "../../public/images/others/SO.png";
import tranquilIsolation from "../../public/images/others/TI.png";
import macbeth from "../../public/images/others/Macbeth.png";
import romeoAndJuliet from "../../public/images/others/R&J.png";
import styles from "./others.module.css";
import TracesOfLight from "./traces-of-light";

const introduction = "Explorations in spatial and production design.";

export const metadata: Metadata = {
  title: "Other Works | Cheryl W.",
  description: introduction,
};

const projects = [
  { image: beyondTheShadow, title: "Beyond the Shadow", subtitle: "Immersive Exhibition Design" },
  { image: seekingOrder, title: "Seeking Order", subtitle: "Workspace Design" },
  { image: tranquilIsolation, title: "Tranquil Isolation", subtitle: "Hospitality Design" },
  { image: macbeth, title: "Macbeth-themed Bar Design", subtitle: "Production / Interior Design" },
  { image: romeoAndJuliet, title: "R&J in Shanghai 1920", subtitle: "Production Design" },
];

export default function OtherWorksPage() {
  return (
    <main className={styles.page}>
      <TopNavigation label="OTHER WORKS" />
      <TracesOfLight />
      <header className={styles.header}>
        <h1 className="type-h1">Other Works</h1>
        <p className="type-body">{introduction}</p>
      </header>
      <div className={styles.gallery}>
        {projects.map((project, index) => (
          <article key={project.title} className={styles.project}>
            <div className={styles.preview}>
              <Image src={project.image} alt={`${project.title} — ${project.subtitle}`}
                className={styles.image} sizes="(max-width: 700px) 84vw, (max-width: 800px) 40vw, (max-width: 1199px) 36vw, 23vw" />
            </div>
            <div className={styles.caption}>
              <span className={`${styles.number} type-micro`}>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h2 className="type-h3">{project.title}</h2>
                <p className="type-subtitle">{project.subtitle}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
      <section className={styles.contact} aria-labelledby="contact-heading">
        <p className={`${styles.contactLabel} type-micro`}>WANT TO KNOW MORE?</p>
        <h2 id="contact-heading" className="type-h3">Let&apos;s talk about these projects.</h2>
        <p className="type-body">I&apos;m happy to share more about the design process, development, and project details upon request.</p>
        <div className={styles.actions}>
          <Link href="/contact" className={`${styles.contactButton} secondary-link type-small`}>
            <span className="secondary-label">Get in Touch</span>
          </Link>
          <Link href="/" className="secondary-link type-micro">
            <span className="secondary-light" aria-hidden="true" />
            <span className="secondary-label">Back to Home Page</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
