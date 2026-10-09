import type { Metadata } from "next";
import ProjectStage from "../components/project-stage";

const introduction = "Shaping spaces and atmospheres into meaningful human experiences.";

export const metadata: Metadata = {
  title: "Interior Design | Cheryl W.",
  description: introduction,
};

const projects = [
  {
    number: "01",
    date: "2025 Spring",
    title: "BEYOND THE SHADOW",
    subtitle: "Exhibition Design",
    disciplines: "Los Angeles, CA",
    description: "以剧场幕后制作为主题的沉浸式互动展览空间",
  },
  {
    number: "02",
    date: "2024 Winter",
    title: "SEEKING ORDER",
    subtitle: "Workspace Design",
    disciplines: "Dallas, TX",
    description: "以秩序与协作为核心的现代办公空间设计",
  },
  {
    number: "03",
    date: "2023 Fall",
    title: "TRANQUIL ISOLATION",
    subtitle: "Hospitality Design",
    disciplines: "Richmond Hill, GA",
    description: "融合自然与静谧体验的度假型酒店空间设计",
  },
];

export default function InteriorDesignPage() {
  return <ProjectStage category="interior" title="INTERIOR DESIGN"
    introduction={introduction} projects={projects} />;
}
