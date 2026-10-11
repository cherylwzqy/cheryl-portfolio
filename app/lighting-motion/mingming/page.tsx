import type { Metadata } from "next";
import MotionProjectDetail from "../motion-project-detail";

const description = "This project explores the relationship between music, rhythm, and stage lighting through grandMA2 programming. By combining different lighting fixtures, beam movements, and visual compositions, the lighting creates changing spatial patterns and atmospheres that respond to the music.";

export const metadata: Metadata = {
  title: "命名 | Cheryl W.",
  description,
};

export default function MingmingPage() {
  return (
    <MotionProjectDetail
      title="命名"
      number="02"
      category="Lighting Programming"
      software="grandMA2"
      year="2025"
      songCredit="命名 — 蒋敦豪"
      videoSrc="/videos/lighting_mingming.mp4"
      description={description}
      nextProjectHref="/lighting-motion/intro"
    />
  );
}
