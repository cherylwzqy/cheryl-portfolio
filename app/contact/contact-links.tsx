"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import EmailModal from "./email-modal";
import styles from "./contact.module.css";

const links = [
  { label: "Email me", href: "mailto:cherylwang9407@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ziqiuyi-wang-0b4671238/", external: true },
  { label: "Resume", href: "/resume" },
];

export default function ContactLinks() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [focused, setFocused] = useState<number | null>(null);
  const [emailOpen, setEmailOpen] = useState(false);
  const emailTrigger = useRef<HTMLButtonElement>(null);
  const active = hovered ?? focused;

  return (
    <><nav className={styles.links} aria-label="Connect with Cheryl"
      onPointerLeave={() => setHovered(null)}>
      {links.map((link, index) => {
        const contents = <>
          <span className={styles.rowLight} aria-hidden="true"><span className={styles.sweep} /></span>
          <span>{link.label}</span><span className={styles.arrow} aria-hidden="true">↗</span>
        </>;
        const interaction = {
          className: `${styles.row} type-subtitle`,
          onPointerEnter: (event: React.PointerEvent) => { if (event.pointerType !== "touch") setHovered(index); },
          onFocus: () => setFocused(index),
          onBlur: () => setFocused(null),
          "data-active": active === index,
        };
        return index === 0 ? (
          <button key={link.label} ref={emailTrigger} type="button" {...interaction}
            className={`${interaction.className} ${styles.emailTrigger}`}
            aria-haspopup="dialog" aria-controls="contact-email-dialog"
            onClick={() => setEmailOpen(true)}>{contents}</button>
        ) : link.href.startsWith("/") ? (
          <Link key={link.label} href={link.href} {...interaction}>{contents}</Link>
        ) : (
          <a key={link.label} href={link.href} {...interaction}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}>{contents}</a>
        );
      })}
    </nav>
    <EmailModal open={emailOpen} onClose={() => {
      setEmailOpen(false);
      emailTrigger.current?.focus({ preventScroll: true });
    }} />
    </>
  );
}
