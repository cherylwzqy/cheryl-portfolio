import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "../components/project-detail/reveal";
import styles from "./education.module.css";

export const metadata: Metadata = {
  title: "Resume | Cheryl W.",
  description: "Education in user experience design and interior design.",
};

// Keep temporary photographs and their attribution together for easy replacement.
const campuses = {
  toronto: {
    src: "/images/education/university-college.jpg",
    alt: "Sunlit stone arches and tower of University College at the University of Toronto",
    name: "University College",
    photographer: "Nuthingoldstays",
    source: "https://commons.wikimedia.org/wiki/File:University_College_Front_Facade.jpg",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    changes: "Cropped and saturation adjusted for display.",
  },
  scad: {
    src: "/images/education/scad-bull-street-display.webp",
    alt: "Historic SCAD brick architecture along Bull Street in Savannah, in natural light",
    name: "SCAD on Bull Street",
    photographer: "Ken Lund",
    source: "https://commons.wikimedia.org/wiki/File:Bull_Street_in_Savannah,_Georgia_at_the_Savannah_College_of_Art_and_Design.jpg",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    changes: "Resized, converted to WebP, cropped and saturation adjusted for display.",
  },
};

function CampusPhoto({ campus }: {
  campus: typeof campuses.toronto;
}) {
  return (
    <figure className={styles.photograph}>
      <div className={styles.imageFrame}>
        <Image src={campus.src} alt={campus.alt} fill loading="eager"
          sizes="(max-width: 800px) 84vw, (min-width: 1600px) 390px, 25vw"
          className={styles.image} />
      </div>
      <figcaption className={`${styles.caption} type-micro`}>
        <a href={campus.source}>{campus.name} · Photo: {campus.photographer}</a>
        <details className={styles.creditDetails}>
          <summary>Source &amp; license</summary>
          <p><a href={campus.source}>Original photograph / Wikimedia Commons</a>
            {" · "}<a href={campus.licenseUrl}>{campus.license}</a>.
            {" "}{campus.changes} Display adaptations under the same license.</p>
        </details>
      </figcaption>
    </figure>
  );
}

export default function ResumePage() {
  return (
    <main className={styles.resume} aria-label="Resume">
      <header className={styles.header}>
        <p className={`${styles.eyebrow} type-micro`}>CHERYL WANG / PROFESSIONAL PROFILE</p>
        <h1 className={`${styles.title} type-display`}>Resume.</h1>
        <p className={`${styles.description} type-small`}>Designing across disciplines, spaces, and experiences.</p>
      </header>
      <section aria-labelledby="education-heading">
        <h2 id="education-heading" className={`${styles.sectionHeading} type-micro`}>
          <span>01 /</span> EDUCATION
        </h2>
        <Reveal distance={0}>
          <article className={`${styles.entry} ${styles.toronto}`} aria-labelledby="toronto-heading">
            <div className={styles.copy}>
              <p className={`${styles.discipline} type-subtitle`}>User Experience Design</p>
              <h3 id="toronto-heading" className={styles.university}>University of Toronto</h3>
              <p className={`${styles.degree} type-body`}>Master of Information</p>
              <p className={`${styles.metadata} type-small`}>Toronto, Canada · In Progress</p>
            </div>
            <CampusPhoto campus={campuses.toronto} />
          </article>
        </Reveal>
        <Reveal distance={0}>
          <article className={`${styles.entry} ${styles.scad}`} aria-labelledby="scad-heading">
            <div className={styles.copy}>
              <p className={`${styles.discipline} type-subtitle`}>Interior Design</p>
              <h3 id="scad-heading" className={styles.university}>Savannah College of Art and Design</h3>
              <p className={`${styles.degree} type-body`}>Bachelor of Fine Arts</p>
              <p className={`${styles.minors} type-small`}>Minors: Architectural History and Production Design</p>
              <p className={`${styles.metadata} type-small`}>Savannah, USA</p>
            </div>
            <CampusPhoto campus={campuses.scad} />
          </article>
        </Reveal>
      </section>
    </main>
  );
}
