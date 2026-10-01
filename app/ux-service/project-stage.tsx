import CategoryProjectStage from "../components/project-stage";

const projects = [
  {
    number: "01",
    date: "2026.04",
    title: "Links2Wellbeing",
    subtitle: "Knowledge Hub",
    disciplines: "Service Design · UX Research · Strategy",
    description: "社区老年服务机构可持续的知识共享平台",
  },
  {
    number: "02",
    date: "2024.06",
    href: "/ux-service/bmw-scadpro",
    title: "BMW × SCADpro",
    subtitle: "Service Blueprint",
    disciplines: "Service Design · Research · Strategy",
    description: "BMW 集团内部服务设计项目",
  },
];

export default function ProjectStage() {
  return <CategoryProjectStage category="ux" title="UX / SERVICE DESIGN"
    introduction="Designing systems, services, and interactions around human needs."
    projects={projects} />;
}
