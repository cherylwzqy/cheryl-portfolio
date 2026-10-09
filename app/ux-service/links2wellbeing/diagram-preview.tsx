"use client";

import Image from "next/image";
import { useRef } from "react";
import styles from "./links2wellbeing.module.css";

export default function DiagramPreview({ src, alt, width, height, directSource = false }: { src: string; alt: string; width: number; height: number; directSource?: boolean }) {
  const dialog = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button className={styles.diagramPreview} type="button" onClick={() => dialog.current?.showModal()} aria-label={`Enlarge ${alt}`} aria-haspopup="dialog">
        {directSource ? (
          // Load this preview from the same original PNG used by its enlarged view.
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={alt} width={width} height={height} loading="eager" style={{ display: "block", width: "100%", height: "auto", opacity: 1, visibility: "visible", objectFit: "contain" }} />
        ) : (
          <Image src={src} alt={alt} width={width} height={height} sizes="(max-width: 800px) 84vw, 52vw" />
        )}
      </button>
      <dialog ref={dialog} className={styles.diagramDialog} aria-label={alt} onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
        <button className={styles.diagramClose} type="button" onClick={() => dialog.current?.close()}>Close</button>
        <div className={styles.diagramFullView}>
          {/* Keep the original diagram available at full resolution. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} width={width} height={height} />
        </div>
      </dialog>
    </>
  );
}
