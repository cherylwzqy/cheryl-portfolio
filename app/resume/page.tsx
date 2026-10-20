import { publicAsset } from "../lib/public-asset";
import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "../components/project-detail/reveal";
import Connections from "./connections";
import { experience, projects, skills } from "./resume-data";
import styles from "./education.module.css";

export const metadata: Metadata = {
  title: "Resume | Cheryl W.",
  description: "Cheryl Wang — cross-disciplinary designer working across UX, service design, and creative production.",
};

export default function ResumePage() {
  return (
    <main className={styles.resume}>
      <section className={styles.profile} aria-labelledby="profile-name">
        <header className={`${styles.masthead} type-micro`}>
          <span>CHERYL W. / PORTFOLIO 2026</span>
          <nav aria-label="Portfolio">
            <Link href="/" className={`${styles.homeLink} secondary-link type-micro`}>
              <span className="secondary-light" aria-hidden="true" />
              <span className="secondary-label">BACK TO HOME</span>
            </Link>
          </nav>
        </header>
        <div className={styles.introduction}>
          <div className={styles.topRow}>
            <div className={styles.identityGroup}>
              <h1 id="profile-name" className={styles.name}>CHERYL WANG</h1>
              <p className={`${styles.identity} type-subtitle`}>MULTIDISCIPLINARY DESIGNER</p>
            </div>
            <nav className={styles.downloadArea} aria-label="Download PDF resume">
              <span className={`${styles.downloadLabel} type-micro`}>RESUME / PDF</span>
              <div className={styles.downloadButtons}>
                <a href={publicAsset("/Resume/Resume_EN.pdf")} download="Resume_EN.pdf" className={`${styles.downloadButton} type-small`}>English <span aria-hidden="true">↓</span></a>
                <a href={publicAsset("/Resume/Resume_CN.pdf")} download="Resume_CN.pdf" lang="zh-Hans" className={`${styles.downloadButton} type-small`}>简体中文 <span aria-hidden="true">↓</span></a>
              </div>
            </nav>
          </div>
          <div className={styles.lowerRow}>
            <section className={styles.about} aria-labelledby="about-heading">
              <h2 id="about-heading" className={`${styles.label} type-micro`}>ABOUT</h2>
              <p className="type-body">Cross-disciplinary designer with a background in UX / Service Design, spatial design, and creative production. I connect research, visual communication, and human-centered thinking to create meaningful experiences across digital and physical spaces.</p>
            </section>
            <Connections />
          </div>
        </div>
        <div className={styles.information}>
          <section className={styles.education} aria-labelledby="education-heading">
            <h2 id="education-heading" className={`${styles.sectionHeading} type-micro`}><span>01 /</span> EDUCATION</h2>
            <article>
              <h3>University of Toronto</h3>
              <p>Master of Information (MI)</p><p>User Experience Design</p>
              <p className={styles.date}>Expected June 2027</p>
            </article>
            <article>
              <h3>Savannah College of Art and Design (SCAD)</h3>
              <p>Bachelor of Fine Arts (BFA)</p><p>Interior Design</p>
              <p className={styles.minors}>Minors: Production Design / Architectural History</p>
              <p className={styles.date}>Graduated in 2025</p>
            </article>
          </section>
          <section aria-labelledby="skills-heading">
            <h2 id="skills-heading" className={`${styles.sectionHeading} type-micro`}><span>02 /</span> SKILLS</h2>
            <div className={styles.skills}>
              {skills.map((group) => (
                <div key={group.title} className={styles.skillGroup}>
                  <h3 className="type-micro">{group.title}</h3>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
      <div id="experience" className={styles.experience}>
        <Reveal distance={0}>
          <section className={styles.editorialSection} aria-labelledby="projects-heading">
            <h2 id="projects-heading" className={`${styles.sectionHeading} type-micro`}><span>03 /</span> SELECTED PROJECTS</h2>
            {projects.map((project) => (
              <article key={project.title} className={styles.entry}>
                <header className={styles.entryHeader}>
                  <div>
                    <h3 className="type-h3">{project.title}</h3>
                    <p className={`${styles.organization} type-body`}>{project.organization}</p>
                    <p className={`${styles.entryType} type-small`}>{project.type}</p>
                  </div>
                  <p className={`${styles.date} type-small`}>{project.date}</p>
                </header>
                <ul className={`${styles.responsibilities} type-body`}>{project.responsibilities.map((text) => <li key={text}>{text}</li>)}</ul>
                {project.note && <p className={`${styles.note} type-small`}>{project.note}</p>}
                <Link href={project.href} className={`${styles.projectLink} type-small`}>View Project <span aria-hidden="true">↗</span></Link>
              </article>
            ))}
          </section>
        </Reveal>
        <Reveal distance={0}>
          <section className={styles.editorialSection} aria-labelledby="work-heading">
            <h2 id="work-heading" className={`${styles.sectionHeading} type-micro`}><span>04 /</span> PROFESSIONAL EXPERIENCE</h2>
            {experience.map((job) => (
              <article key={job.title} className={styles.entry}>
                <header className={styles.entryHeader}>
                  <div><h3 className="type-h3">{job.title}</h3><p className={`${styles.organization} type-body`}>{job.organization}</p></div>
                  <p className={`${styles.date} type-small`}>{job.date}</p>
                </header>
                <ul className={`${styles.responsibilities} type-body`}>{job.responsibilities.map((text) => <li key={text}>{text}</li>)}</ul>
              </article>
            ))}
          </section>
        </Reveal>
        <section className={styles.editorialSection} aria-labelledby="awards-heading">
          <h2 id="awards-heading" className={`${styles.sectionHeading} type-micro`}><span>05 /</span> AWARDS &amp; RECOGNITION</h2>
          <div className={styles.awards}>
            <div><h3 className="type-subtitle">International Design Awards (IDA)</h3><p className="type-body">Honorable Mention</p></div>
            <div><h3 className="type-subtitle">Academic Merit Scholarships</h3><p className="type-body">High School and University</p></div>
          </div>
        </section>
      </div>
      <footer className={`${styles.footer} type-micro`}>
        <span>CHERYL W. © 2026</span>
      </footer>
    </main>
  );
}
