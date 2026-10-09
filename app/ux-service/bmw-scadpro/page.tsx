import type { Metadata } from "next";
import Closing from "./closing";
import CaseStudyFooter from "../../components/project-detail/case-study-footer";
import Contribution from "./contribution";
import Reflection from "./reflection";
import { MyRole, Process } from "./chapters";
import { ConfidentialityNote, ProjectDetail, ProjectHero, ProjectSection } from "../../components/project-detail/project-detail";

export const metadata: Metadata = {
  title: "BMW × SCADpro | Cheryl W.",
  description: "A collaborative service design project exploring internal innovation and communication within the BMW Group.",
};

export default function BMWScadproPage() {
  return (
    <ProjectDetail categoryHref="/ux-service" categoryLabel="UX / SERVICE DESIGN">
      <ProjectHero
        eyebrow="01 / SERVICE DESIGN"
        title="BMW × SCADpro"
        subtitle="Service Blueprint"
        disciplines="Research · Service Design · Strategy"
        year="2024"
      />
      <ProjectSection id="context" number="01" label="CONTEXT"
        statement={<>Designing for internal<br />innovation &amp;<br />communication.</>}>
        <p>BMW × SCADpro was a collaborative service design project focused on internal innovation and communication within the BMW Group. The project explored how service design methods could help understand existing experiences, identify opportunities, and structure a clearer service journey.</p>
        <ConfidentialityNote>
          <p>Due to a confidentiality agreement, internal research findings, project details, and selected deliverables are not publicly displayed.</p>
          <p>I’d be happy to discuss the project and my contributions in more detail during an interview.</p>
        </ConfidentialityNote>
      </ProjectSection>
      <MyRole />
      <Process />
      <Contribution />
      <Reflection />
      <Closing />
      <CaseStudyFooter theme="dark" backHref="/ux-service" backLabel="BACK TO UX / SERVICE" previousProjectHref="/ux-service/links2wellbeing" />
    </ProjectDetail>
  );
}
