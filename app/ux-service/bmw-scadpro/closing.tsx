import styles from "./closing.module.css";

export default function Closing({ theme }: { theme?: "wellbeing" }) {

  return (
    <div className={`${styles.closing}${theme === "wellbeing" ? ` ${styles.wellbeing}` : ""}`}>
      <div className={styles.quote}>
        <p className={styles.eyebrow}>{theme === "wellbeing" ? "A THOUGHT ON HUMAN CONNECTION" : "A THOUGHT ON INNOVATION"}</p>
        <p className={styles.statement}>
          {theme === "wellbeing" ? "“No man is an island, entire of itself.”" : "“Design thinking is a human-centered approach to innovation.”"}
        </p>
        <span className={styles.accent} aria-hidden="true" />
        <p className={styles.attribution}>{theme === "wellbeing" ? "John Donne / Meditation XVII" : "Tim Brown / IDEO"}</p>
      </div>
    </div>
  );
}
