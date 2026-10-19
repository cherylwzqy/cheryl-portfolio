import { publicAsset } from "../../lib/public-asset";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Reveal from "../../components/project-detail/reveal";
import styles from "./links2wellbeing.module.css";
import ConnectingRings from "./connecting-rings";
import DiagramPreview from "./diagram-preview";
import ServiceRoadmap from "./service-roadmap";
import ContributionReflection from "./contribution-reflection";
import Closing from "../bmw-scadpro/closing";
import CaseStudyFooter from "../../components/project-detail/case-study-footer";

export const metadata: Metadata = {
  title: "Links2Wellbeing | Cheryl Wang",
  description: "Designing a Sustainable Knowledge Hub. Supporting Link Workers with easier access to resources, shared knowledge, and practical training.",
};

const projectDetails = [
  { label: "PROJECT TYPE", items: ["Service Design", "Knowledge Sharing"] },
  { label: "COLLABORATION", items: ["OACAO", "Links2Wellbeing"] },
  { label: "TIMELINE", items: ["January – April 2026"] },
  { label: "MY FOCUS", items: ["Service Systems", "Implementation Roadmap", "Visualization"] },
];

export default function Links2WellbeingPage() {
  return (
    <main className={styles.page}>
      <div className={styles.backgroundArcs} aria-hidden="true">
        <svg className={styles.upperArc} viewBox="0 0 560 600" fill="none" focusable="false"><path d="M400 20A280 280 0 0 0 400 580" /></svg>
        <svg className={styles.overviewArc} viewBox="0 0 560 600" fill="none" focusable="false"><path d="M160 20A280 280 0 0 1 160 580" /></svg>
        <svg className={styles.lowerArc} viewBox="0 0 560 600" fill="none" focusable="false"><path d="M400 20A280 280 0 0 0 400 580" /></svg>
        <svg className={styles.bottomArc} viewBox="0 0 560 600" fill="none" focusable="false"><path d="M160 20A280 280 0 0 1 160 580" /></svg>
      </div>
      <div className={styles.container}>
        <nav className={`${styles.navigation} type-micro`} aria-label="Portfolio">
          <Link href="/ux-service">← UX / SERVICE DESIGN</Link>
          <Link href="/">HOME</Link>
        </nav>
        <section className={styles.hero} aria-labelledby="project-title">
          <Reveal distance={6} className={styles.heroCopy}>
            <p className={`${styles.eyebrow} type-micro`}>SERVICE DESIGN / 2026</p>
            <h1 id="project-title" className={`${styles.title} type-display`}>Links2Wellbeing</h1>
            <p className={`${styles.subtitle} type-subtitle`}>Designing a Sustainable Knowledge Hub</p>
            <p className={`${styles.description} type-body`}>Supporting Link Workers with easier access to resources, shared knowledge, and practical training.</p>
          </Reveal>
          <ConnectingRings />
        </section>
        <dl className={styles.metadata} aria-label="Project details">
          {projectDetails.map(({ label, items }) => (
            <div key={label} className={label === "TIMELINE" ? styles.timeline : undefined}>
              <dt className="type-micro">{label}</dt>
              <dd className="type-small">
                <ul role="list">
                  {items.map((item) => (
                    <li key={item}>
                      {label === "COLLABORATION" ? (
                        <a href={item === "OACAO" ? "https://www.oacao.org/" : "https://www.oacao.org/programs/links2wellbeing/"}
                          target="_blank" rel="noopener noreferrer">{item}</a>
                      ) : item}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
        <section className={styles.overview} aria-labelledby="overview-title">
          <Reveal distance={6} className={styles.overviewLayout}>
            <div className={styles.overviewIdentity}>
              <p id="overview-title" className={`${styles.sectionLabel} type-micro`}>01 / PROJECT OVERVIEW</p>
              <div className={styles.overviewLogos}>
                <Image src={publicAsset("/images/L2W/OACAO_logo.jpg")} alt="Older Adult Centres' Association of Ontario (OACAO) logo" width={1280} height={536} sizes="170px" />
                <Image src={publicAsset("/images/L2W/L2W_logo.jpg")} alt="Links2Wellbeing logo" width={1400} height={530} sizes="170px" />
              </div>
            </div>
            <div className={`${styles.overviewCopy} type-body`}>
              <p>Links2Wellbeing is a social prescribing program supported by OACAO. Working with the project team, we explored how a shared Knowledge Hub could help Link Workers access resources, learn from one another, and maintain consistent service delivery.</p>
              <p>Our proposal combined a digital Knowledge Hub with a broader support system, including service processes, future partnerships, and an implementation roadmap to support long-term sustainability.</p>
            </div>
          </Reveal>
        </section>
        <section className={styles.challenge} aria-labelledby="challenge-title">
          <div className={styles.challengeLayout}>
            <div className={styles.challengeIntro}>
              <p className={`${styles.sectionLabel} type-micro`}>02 / THE CHALLENGE</p>
              <h2 id="challenge-title" className={`${styles.challengeHeading} type-h2`}>How can knowledge remain accessible, shared, and sustainable?</h2>
              <p className={`${styles.challengeDescription} type-body`}>Links2Wellbeing relies on practical knowledge, accessible resources, and collaboration across service centres. Our challenge was to strengthen how this knowledge is organized, shared, and sustained over time.</p>
            </div>
            <ol className={styles.challengeList}>
              <li className={styles.resourceChallenge}>
                <span className={`${styles.challengeNumber} type-micro`} aria-hidden="true">01</span>
                <div>
                  <h3 className="type-subtitle">Dispersed Resources</h3>
                  <p className="type-body">Practical information and existing resources are spread across different places, making consistent onboarding and information finding more difficult.</p>
                </div>
              </li>
              <li className={styles.knowledgeChallenge}>
                <span className={`${styles.challengeNumber} type-micro`} aria-hidden="true">02</span>
                <div>
                  <h3 className="type-subtitle">Knowledge Loss</h3>
                  <p className="type-body">Valuable experience often remains with individual staff members. Without a shared way to capture it, knowledge can be lost instead of passed between centres.</p>
                </div>
              </li>
              <li className={styles.sustainabilityChallenge}>
                <span className={`${styles.challengeNumber} type-micro`} aria-hidden="true">03</span>
                <div>
                  <h3 className="type-subtitle">Sustainability</h3>
                  <p className="type-body">The service needs a foundation that can continue supporting Link Workers despite changes in funding and organizational resources.</p>
                </div>
              </li>
            </ol>
          </div>
          <p className={`${styles.designQuestion} type-h2`}>How might we create a shared knowledge system that supports Link Workers today while remaining adaptable for the future?</p>
        </section>
        <section className={styles.approach} aria-labelledby="approach-title">
          <p className={`${styles.sectionLabel} type-micro`}>03 / OUR APPROACH</p>
          <h2 id="approach-title" className={`${styles.approachHeading} type-h2`}>From Challenges to Design Opportunities</h2>
          <p className={`${styles.approachIntroduction} type-body`}>Our approach focused on three connected goals: making resources easier to access, supporting knowledge sharing among Link Workers, and building a foundation for long-term sustainability.</p>
          <p style={{ margin: "12px 0 0", position: "relative", top: "calc((clamp(40px, 5vw, 72px) - 12px) / 2)", fontSize: "12px", fontWeight: 400, lineHeight: 1.5, color: "#929292", textAlign: "left" }}>* Illustrations generated with OpenAI ImageGen</p>
          <div className={styles.approachColumns}>
            <article className={styles.resourcesApproach}>
              <div className={styles.approachIllustration}>
                <Image src={publicAsset("/images/L2W/approach01.png")} alt="Illustration of centralizing resources" width={2860} height={2912} sizes="(max-width: 540px) 240px, (max-width: 900px) 35vw, 240px" />
              </div>
              <h3 className="type-subtitle">Centralize Resources</h3>
              <p className="type-body">Bring scattered resources into one accessible place to simplify onboarding and everyday work.</p>
            </article>
            <article className={styles.sharingApproach}>
              <div className={styles.approachIllustration}>
                <Image src={publicAsset("/images/L2W/approach02.png")} alt="Illustration of sharing knowledge among Link Workers" width={1440} height={1456} sizes="(max-width: 540px) 240px, (max-width: 900px) 35vw, 240px" />
              </div>
              <h3 className="type-subtitle">Enable Knowledge Sharing</h3>
              <p className="type-body">Create opportunities for Link Workers to exchange experiences, share practical knowledge, and learn from one another.</p>
            </article>
            <article className={styles.sustainableApproach}>
              <div className={styles.approachIllustration}>
                <Image src={publicAsset("/images/L2W/approach03.png")} alt="Illustration of building a sustainable service foundation" width={1452} height={1456} sizes="(max-width: 540px) 240px, (max-width: 900px) 35vw, 240px" />
              </div>
              <h3 className="type-subtitle">Build for Sustainability</h3>
              <p className="type-body">Establish a foundation for future development through clear service processes, shared responsibilities, and ongoing support.</p>
            </article>
          </div>
        </section>
        <section className={styles.knowledgeHub} aria-labelledby="knowledge-hub-title">
          <p className={`${styles.sectionLabel} type-micro`}>04 / KNOWLEDGE HUB</p>
          <h2 id="knowledge-hub-title" className={`${styles.hubHeading} type-h2`}>A Shared Space for Knowledge and Collaboration</h2>
          <p className={`${styles.hubIntroduction} type-body`}>We designed a centralized Knowledge Hub to help Link Workers easily find resources, connect with peers, and build their skills. The platform brings together practical tools, guidance materials, and community features to support their daily work and long-term professional growth.</p>
          <div className={styles.hubComposition}>
            <div className={styles.monitor}>
              <div className={styles.monitorScreen}>
                <div className={styles.screenContent}>
                  {/* Use the verified original asset directly for the prototype screen. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={publicAsset("/images/L2W/knowledge%20hub.png")} alt="Links2Wellbeing Knowledge Hub homepage" width={2559} height={1347} loading="eager" />
                  <div className={styles.screenAnnotations} aria-hidden="true">
                    <svg viewBox="0 0 2559 1347" fill="none" focusable="false">
                      <g className={styles.resourceAnnotation}><path d="M-90 337H68" /><circle cx="110" cy="337" r="42" /></g>
                      <g className={styles.sharingAnnotation}><path d="M-90 913H68" /><circle cx="110" cy="913" r="42" /></g>
                      <g className={styles.learningAnnotation}><path d="M2270 760H2649" /><circle cx="2220" cy="760" r="50" /></g>
                    </svg>
                    <span className={`${styles.resourceMarker} type-micro`}>01</span>
                    <span className={`${styles.sharingMarker} type-micro`}>02</span>
                    <span className={`${styles.learningMarker} type-micro`}>03</span>
                  </div>
                </div>
              </div>
              <div className={styles.monitorChin} aria-hidden="true" />
              <div className={styles.monitorStand} aria-hidden="true" />
              <div className={styles.monitorBase} aria-hidden="true" />
            </div>
            <h3 className={styles.featureSubheading}>HIGHLIGHT FEATURES</h3>
            <div className={styles.hubFeatures}>
              <article className={styles.libraryFeature}>
                <span className={`${styles.featureNumber} type-micro`}>01 /</span>
                <div className={styles.featurePreview}>
                  <Image src={publicAsset("/images/L2W/resources.png")} alt="Resource Library interface preview" width={390} height={357} sizes="(max-width: 540px) 84vw, (max-width: 800px) 40vw, 25vw" />
                </div>
                <div>
                  <h3 className="type-subtitle">Resource Library</h3>
                  <p className="type-body">Find essential resources, templates, and guidance in one organized place.</p>
                </div>
              </article>
              <article className={styles.communityFeature}>
                <span className={`${styles.featureNumber} type-micro`}>02 /</span>
                <div className={styles.featurePreview}>
                  <Image src={publicAsset("/images/L2W/connect.png")} alt="Knowledge Sharing community interface preview" width={393} height={318} sizes="(max-width: 540px) 84vw, (max-width: 800px) 40vw, 25vw" />
                </div>
                <div>
                  <h3 className="type-subtitle">Knowledge Sharing</h3>
                  <p className="type-body">Exchange experiences and learn from peers through community discussions and workshops.</p>
                </div>
              </article>
              <article className={styles.learningFeature}>
                <span className={`${styles.featureNumber} type-micro`}>03 /</span>
                <div className={styles.featurePreview}>
                  <Image src={publicAsset("/images/L2W/tutorial.png")} alt="Onboarding and Learning tutorial interface preview" width={548} height={540} sizes="(max-width: 540px) 84vw, (max-width: 800px) 40vw, 25vw" />
                </div>
                <div>
                  <h3 className="type-subtitle">Onboarding &amp; Learning</h3>
                  <p className="type-body">Build confidence through guided onboarding and step-by-step learning resources.</p>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section className={styles.beyondPlatform} aria-labelledby="beyond-platform-title">
          <p className={`${styles.sectionLabel} type-micro`}>05 / BEYOND THE PLATFORM</p>
          <h2 id="beyond-platform-title" className={`${styles.beyondHeading} type-h2`}>Designing the Service Behind the Experience</h2>
          <p className={`${styles.beyondIntroduction} type-body`}>The Knowledge Hub is only one part of the solution. To support its long-term use, we also considered the people, processes, and partnerships needed to maintain the platform, support Link Workers, and keep knowledge accessible and up to date.</p>
          <div className={styles.blueprintRow}>
            <DiagramPreview src="/images/L2W/blueprint.png" alt="Service Blueprint" width={10800} height={7200} />
            <div className={styles.blueprintCopy}>
              <h3 className="type-h2">Service Blueprint</h3>
              <p className="type-body">This service blueprint shows how the Knowledge Hub works across different stages and highlights the roles and responsibilities of Link Workers, the OACAO team, partners, and supporting systems.</p>
            </div>
          </div>
          <div className={styles.ecosystemRow}>
            <DiagramPreview src="/images/L2W/futurestate.png" alt="Future-State Network" width={2466} height={1275} />
            <div className={styles.ecosystemCopy}>
              <h3 className="type-h2">Supporting Ecosystem</h3>
              <p className="type-body">The platform is supported by a network of stakeholders, including OACAO, Link Workers, SALCs, and other community partners. Together, they help maintain the Knowledge Hub, contribute resources, and support its long-term development.</p>
            </div>
          </div>
          <div className={styles.serviceConclusion}>
            <svg viewBox="0 0 80 80" fill="none" aria-hidden="true" focusable="false">
              <path d="M40 68V38M40 48C20 48 12 35 14 19C31 18 40 29 40 48ZM40 38C40 22 51 12 68 14C68 29 57 40 40 38M25 31L40 48M55 25L40 38M25 68H55" />
            </svg>
            <div>
              <h3 className="type-h2">Building a Sustainable Service</h3>
              <p className="type-body">By aligning people, processes, and partnerships, we designed a service model that can be maintained, expanded, and adapted over time—helping the Knowledge Hub continue supporting Link Workers and communities across Ontario.</p>
            </div>
          </div>
        </section>
        <section className={styles.sustainingService} aria-labelledby="sustaining-service-title">
          <p className={`${styles.sectionLabel} type-micro`}>06 / SUSTAINING THE SERVICE</p>
          <h2 id="sustaining-service-title" className={`${styles.sustainingHeading} type-h2`}>From Pilot to Long-Term Sustainability</h2>
          <p className={`${styles.sustainingIntroduction} type-body`}>We proposed a phased implementation strategy to help the Knowledge Hub grow gradually, adapt to the needs of Link Workers, and establish a sustainable support system beyond the initial project.</p>
          <ServiceRoadmap />
          <div className={styles.sustainabilityConsiderations}>
            <h3 className="type-subtitle">Key Considerations for Long-Term Sustainability</h3>
            <div className={styles.considerationGrid}>
              <article>
                <h4 className="type-subtitle">Service Ownership</h4>
                <p className="type-body">Identify a long-term host organization or partner to support ongoing service delivery.</p>
              </article>
              <article>
                <h4 className="type-subtitle">Content Maintenance</h4>
                <p className="type-body">Establish clear responsibilities for reviewing, updating, and managing shared resources.</p>
              </article>
              <article>
                <h4 className="type-subtitle">User Adoption</h4>
                <p className="type-body">Support gradual onboarding and involve Link Workers in refining the service.</p>
              </article>
              <article>
                <h4 className="type-subtitle">Funding &amp; Technical Support</h4>
                <p className="type-body">Explore partnerships and existing infrastructure to reduce long-term operating costs.</p>
              </article>
            </div>
          </div>
          <section className={styles.implementationPlan} aria-labelledby="implementation-plan-title">
            <p className={`${styles.implementationLabel} type-micro`}>IMPLEMENTATION PLAN</p>
            <h3 id="implementation-plan-title" className={`${styles.implementationHeading} type-h2`}>Turning Strategy into Action</h3>
            <p className={`${styles.implementationDescription} type-body`}>A practical implementation plan outlining the steps, responsibilities, and resources needed to move the service forward.</p>
            <figure className={styles.implementationFigure}>
              <DiagramPreview src="/images/L2W/implementation-plan.png" alt="Links2Wellbeing implementation plan" width={10800} height={7200} directSource />
              <figcaption className={`${styles.implementationCaption} type-small`}>Implementation Plan — Links2Wellbeing Service Design Project</figcaption>
            </figure>
          </section>
        </section>
        <ContributionReflection />
        <Closing theme="wellbeing" />
        <CaseStudyFooter theme="light" backHref="/ux-service" backLabel="BACK TO UX / SERVICE" nextProjectHref="/ux-service/bmw-scadpro" />
      </div>
    </main>
  );
}
