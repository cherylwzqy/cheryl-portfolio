import type { Metadata } from "next";
import MotionProjectDetail from "../motion-project-detail";

const description = "This project explores how typography, rhythm, and simple visual elements can work together with music to create a dynamic visual experience. Through animated lyrics, distortion, and bold graphic compositions, the motion design responds to the energy and rhythm of the soundtrack.";

export const metadata: Metadata = {
  title: "Kinetic Typography | Cheryl W.",
  description,
};

export default function KineticTypographyPage() {
  return (
    <MotionProjectDetail
      title="Kinetic Typography"
      number="01"
      category="Motion Media"
      software="Adobe After Effects"
      year="2025"
      songCredit="SOS — SEVENTEEN"
      videoSrc="/videos/motion_sos.mp4"
      description={description}
      nextProjectHref="/lighting-motion/mingming"
    />
  );
}
