import type { Metadata } from "next";
import ProjectStage from "../components/project-stage";

const introduction = "Bringing stories to life through space, atmosphere, and visual storytelling.";

export const metadata: Metadata = {
  title: "Production Design | Cheryl W.",
  description: introduction,
};

const projects = [
  {
    number: "01",
    date: "2024 Summer",
    title: "Macbeth",
    subtitle: "Themed Bar Design",
    disciplines: "Production Sketches · AI Exploration",
    description: "以《麦克白》的黑暗叙事与视觉意象为灵感的主题酒吧空间设计",
  },
  {
    number: "02",
    date: "2023 Winter",
    title: "R & J in Shanghai 1920",
    subtitle: "Production Design",
    disciplines: "Production Diagram Drafting · Physical Model",
    description: "将《罗密欧与朱丽叶》重新置于1920年代上海的舞台美术设计",
  },
];

export default function ProductionDesignPage() {
  return <ProjectStage category="production" title="PRODUCTION DESIGN"
    introduction={introduction} projects={projects} />;
}
