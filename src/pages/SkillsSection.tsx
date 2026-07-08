import SectionTitle from "../components/sectionTitle"
import { UilBracketsCurly, UilAngleDown, UilServerNetworkAlt, UilSwatchbook, UilLayerGroup } from '@iconscout/react-unicons'
import SkillDomain from "../components/Skills/SkillDomain"
import Skill from "../components/Skills/Skill"
import { useState } from "react"

type Status = "skills__open" | "skills__close"
type SkillsStatus = Status[]

const SkillsSection = () => {
  const [skillsStatus, setSkillsStatus] = useState<SkillsStatus>(["skills__open", "skills__close", "skills__close", "skills__close"])

  const handleSetSkillsDomain = (key: number) => {
    setSkillsStatus(prev => prev.map((status, index) =>
      index === key ? (status === "skills__open" ? "skills__close" : "skills__open") : "skills__close"
    ))
  }

  return (
    <section className="skills section" id="skills">
      <SectionTitle title="Skills" subtitle="My technical level" />
      <div className="container grid skills__container">
        <SkillDomain
          onClick={() => handleSetSkillsDomain(0)}
          status={skillsStatus[0]}
          domainName="Frontend"
          domainSubTitle="3+ years"
          iconComponent={<UilBracketsCurly className="skills__icon" />}
        >
          <Skill skillName="Next.js / React" skillPercentage="85%" />
          <Skill skillName="TypeScript" skillPercentage="85%" />
          <Skill skillName="JavaScript" skillPercentage="90%" />
          <Skill skillName="Tailwind CSS" skillPercentage="80%" />
          <Skill skillName="Framer Motion" skillPercentage="60%" />
        </SkillDomain>

        <SkillDomain
          onClick={() => handleSetSkillsDomain(1)}
          status={skillsStatus[1]}
          domainName="Backend & Systems"
          domainSubTitle="4+ years"
          iconComponent={<UilServerNetworkAlt className="skills__icon" />}
        >
          <Skill skillName="Node.js / Bun" skillPercentage="90%" />
          <Skill skillName="Express / NestJS" skillPercentage="85%" />
          <Skill skillName="REST / WebSocket" skillPercentage="85%" />
          <Skill skillName="Matching Engine (BST + DLL)" skillPercentage="70%" />
          <Skill skillName="PostgreSQL / Prisma" skillPercentage="80%" />
        </SkillDomain>

        <SkillDomain
          onClick={() => handleSetSkillsDomain(2)}
          status={skillsStatus[2]}
          domainName="Infrastructure & DevOps"
          domainSubTitle="2+ years"
          iconComponent={<UilSwatchbook className="skills__icon" />}
        >
          <Skill skillName="Docker / Docker Compose" skillPercentage="60%" />
          <Skill skillName="Redis (Streams, Pub/Sub)" skillPercentage="65%" />
          <Skill skillName="CI/CD Pipelines" skillPercentage="50%" />
          <Skill skillName="Kubernetes" skillPercentage="40%" />
        </SkillDomain>

        <SkillDomain
          onClick={() => handleSetSkillsDomain(3)}
          status={skillsStatus[3]}
          domainName="Architecture"
          domainSubTitle="3+ years"
          iconComponent={<UilLayerGroup className="skills__icon" />}
        >
          <Skill skillName="Event-Driven Architecture" skillPercentage="75%" />
          <Skill skillName="Distributed Systems" skillPercentage="65%" />
          <Skill skillName="System Design" skillPercentage="70%" />
        </SkillDomain>
      </div>
    </section>
  )
}

export default SkillsSection
