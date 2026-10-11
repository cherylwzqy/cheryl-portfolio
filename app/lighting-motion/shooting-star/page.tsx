import type { Metadata } from "next";
import MotionProjectDetail from "../motion-project-detail";

const description = "Inspired by the bright and futuristic energy of XG's Shooting Star, this lighting project explores movement, rhythm, and color through programmed lighting sequences. Pink tones, dynamic transitions, and glowing visual effects create a vibrant atmosphere that responds to the music.";

export const metadata: Metadata = {
  title: "Shooting Star | Cheryl W.",
  description,
};

export default function ShootingStarPage() {
  return (
    <MotionProjectDetail
      title="Shooting Star"
      number="04"
      category="Lighting Programming"
      software="ETC Lighting Console"
      year="2024"
      songCredit="Shooting Star — XG"
      videoSrc="/videos/lighting_shootingstar.mp4"
      description={description}
      accentColor="#DE83B1"
      nextProjectHref="/lighting-motion/kinetic-typography"
    />
  );
}
