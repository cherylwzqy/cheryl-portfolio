import type { Metadata } from "next";
import MotionProjectDetail from "../motion-project-detail";

const description = "Inspired by the instrumental opening track of ONER's album Ball, this lighting project uses red tones, focused beams, and shifting visual compositions to create a mysterious and dramatic atmosphere. The lighting builds a sense of anticipation, reflecting the tension and theatrical energy of the music.";

export const metadata: Metadata = {
  title: "Intro | Cheryl W.",
  description,
};

export default function IntroPage() {
  return (
    <MotionProjectDetail
      title="Intro"
      number="03"
      category="Lighting Programming"
      software="ETC Lighting Console"
      year="2024"
      songCredit="Intro — ONER"
      videoSrc="/videos/lighting_intro.mp4"
      description={description}
      accentColor="#C83E45"
      nextProjectHref="/lighting-motion/shooting-star"
    />
  );
}
