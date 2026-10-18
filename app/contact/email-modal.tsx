"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./email-modal.module.css";

const EMAIL = "cherylwang9407@gmail.com";
const CLOSE_DURATION = 240;
const COPY_CONFIRMATION_DURATION = 2000;

export default function EmailModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const copyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closingRef = useRef(false);
  const [closing, setClosing] = useState(false);
  const [status, setStatus] = useState<"idle" | "copying" | "copied" | "error">("idle");

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!open || !dialog) return;
    closingRef.current = false;
    dialog.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
      if (closeTimer.current) clearTimeout(closeTimer.current);
      if (copyTimer.current) clearTimeout(copyTimer.current);
      dialog.close();
    };
  }, [open]);

  const requestClose = useCallback(() => {
    if (closingRef.current) return;
    closingRef.current = true;
    setClosing(true);
    if (copyTimer.current) clearTimeout(copyTimer.current);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    closeTimer.current = setTimeout(() => dialogRef.current?.close(), reduced ? 0 : CLOSE_DURATION);
  }, []);

  const copyEmail = async () => {
    setStatus("copying");
    if (copyTimer.current) clearTimeout(copyTimer.current);
    try {
      await navigator.clipboard.writeText(EMAIL);
      if (!dialogRef.current?.open || closingRef.current) return;
      setStatus("copied");
      copyTimer.current = setTimeout(() => setStatus("idle"), COPY_CONFIRMATION_DURATION);
    } catch {
      if (dialogRef.current?.open && !closingRef.current) setStatus("error");
    }
  };

  return (
    <dialog ref={dialogRef} id="contact-email-dialog" className={styles.dialog}
      aria-modal="true" aria-labelledby="email-dialog-heading" aria-describedby="email-dialog-description"
      data-closing={closing} onCancel={(event) => { event.preventDefault(); requestClose(); }}
      onClose={() => { setClosing(false); setStatus("idle"); onClose(); }}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const rect = event.currentTarget.getBoundingClientRect();
        if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) requestClose();
      }}>
      <button type="button" className={styles.close} aria-label="Close email dialog" onClick={requestClose}>×</button>
      <h2 id="email-dialog-heading" className="type-h2">Let&apos;s get in touch.</h2>
      <p id="email-dialog-description" className={`${styles.description} type-body`}>Feel free to reach out via email.</p>
      <p className={`${styles.email} type-body`}>{EMAIL}</p>
      <button type="button" className={`${styles.copy} type-body`} onClick={copyEmail}
        disabled={status === "copying"} autoFocus>
        {status === "copied" ? <><span aria-hidden="true">✓ </span>Copied!</> : "Copy Email"}
      </button>
      <div className={`${styles.feedback} type-small`} role="status" aria-live="polite" aria-atomic="true">
        {status === "copied" ? "Email address copied to clipboard." : status === "error" ? "Could not copy. Select the email address above and copy it manually." : ""}
      </div>
      <a className={`${styles.emailApp} type-small`} href={`mailto:${EMAIL}`}>Open Email App <span aria-hidden="true">↗</span></a>
    </dialog>
  );
}
