import type { Metadata } from "next";
import ProjectStage from "../components/project-stage";
import sos from "../../public/lighting-motion/sos.png";
import mingming from "../../public/lighting-motion/mingming.png";
import intro from "../../public/lighting-motion/intro.png";
import shootingstar from "../../public/lighting-motion/shootingstar.png";

const introduction = "Shaping atmosphere, movement, and emotion through light and time.";

export const metadata: Metadata = {
  title: "Lighting / Motion Design | Cheryl W.",
  description: introduction,
};

const projects = [
  {
    number: "01", date: "2025", title: "SOS - Seventeen",
    subtitle: "Motion Design", disciplines: "AE Typography Motion Design",
    thumbnail: sos,
  },
  {
    number: "02", date: "2025", title: "命名 - 蒋敦豪", titleLanguage: "zh-Hans",
    subtitle: "Lighting Design", disciplines: "grandMA2 Lighting Console Programming",
    thumbnail: mingming,
  },
  {
    number: "03", date: "2024", title: "Intro - ONER",
    subtitle: "Lighting Design", disciplines: "ETC Lighting Console Programming",
    thumbnail: intro,
  },
  {
    number: "04", date: "2024", title: "Shooting Star - XG",
    subtitle: "Lighting Design", disciplines: "ETC Lighting Console Programming",
    thumbnail: shootingstar,
  },
];

export default function LightingMotionPage() {
  return <ProjectStage category="lighting" title="LIGHTING / MOTION DESIGN"
    introduction={introduction} projects={projects} />;
}
