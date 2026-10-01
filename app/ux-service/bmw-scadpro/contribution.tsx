import Reveal from "../../components/project-detail/reveal";
import styles from "./contribution.module.css";

const contributions = [
  {
    area: "RESEARCH",
    title: "Competitive Research",
    description: "Researched and analyzed comparable cases across large organizations and public-facing platforms to identify relevant approaches and references for the project.",
  },
  {
    area: "STRUCTURE",
    title: "Information Mapping & Visualization",
    description: "Worked with the team lead to organize key information synthesized from client meeting recordings, then translated it into visual diagrams and maps to make complex relationships and service information easier to understand.",
  },
  {
    area: "COMMUNICATION",
    title: "Presentation Support",
    description: "Supported the final presentation preparation by explaining the diagrams and information structures I developed, answering team questions, and providing feedback as the presentation was refined.",
  },
];

export default function Contribution() {
  return (
    <section className={styles.contribution} aria-labelledby="contribution-heading">
      <h2 id="contribution-heading" className={`${styles.label} type-micro`}>
        <span>04</span><span>CONTRIBUTION</span>
      </h2>
      <div className={styles.areas}>
        {contributions.map(({ area, title, description }, index) => (
          <Reveal key={area} className={styles.area} distance={6} initialOpacity={0.15}>
            <span className={`${styles.index} type-display`} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <div className={styles.copy}>
              <h3 className={`${styles.title} type-h1`}>{area}</h3>
              <p className={`${styles.subtitle} type-subtitle`}>{title}</p>
              <p className={`${styles.description} type-body`}>{description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
