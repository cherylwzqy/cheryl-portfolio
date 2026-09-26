import type { Metadata } from "next";
import ProjectStage from "./project-stage";

export const metadata: Metadata = {
  title: "UX / Service Design | Cheryl W.",
  description: "Designing systems, services, and interactions around human needs.",
};

export default function UXServicePage() {
  return <ProjectStage />;
}
