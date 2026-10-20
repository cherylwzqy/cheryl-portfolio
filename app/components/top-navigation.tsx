import Link from "next/link";
import styles from "./top-navigation.module.css";

/** Shared portfolio navigation, based on the BMW project header. */
export default function TopNavigation({ label, parentHref, light = false }: {
  label: string;
  parentHref?: string;
  light?: boolean;
}) {
  const linkClass = "secondary-link type-micro";
  const contents = (text: string) => <>
    <span className="secondary-light" aria-hidden="true" />
    <span className="secondary-label">{text}</span>
  </>;

  return (
    <nav className={`${styles.navigation}${light ? ` ${styles.light}` : ""}`} aria-label="Portfolio">
      {parentHref ? (
        <Link href={parentHref} className={linkClass}>{contents(label)}</Link>
      ) : label === "BACK TO HOME" ? (
        <Link href="/" className={linkClass}>{contents(label)}</Link>
      ) : (
        <span className={`${styles.label} type-micro`}>{label}</span>
      )}
      {label !== "BACK TO HOME" && <Link href="/" className={linkClass}>{contents("HOME")}</Link>}
    </nav>
  );
}
