import SectionTitle from "../components/sectionTitle"
import { UilBracketsCurly } from '@iconscout/react-unicons'
import { UilAngleDown } from '@iconscout/react-unicons'
import { UilServerNetworkAlt } from '@iconscout/react-unicons'
import { UilSwatchbook } from '@iconscout/react-unicons'
import SkillDomain from "../components/Skills/SkillDomain"
import Skill from "../components/Skills/Skill"
import { useState } from "react"
type Status = "skills__open" | "skills__close";
type SkillsStatus = Status [];
const SkillsSection = () => {
  
  const [skillsStatus,setSkillsstatus]= useState<SkillsStatus>(["skills__open","skills__close","skills__close"])
  const [domainClicked,setDomainClicked] = useState(0);

  console.log(skillsStatus)
  const handleSetSkillsDomain=(key:number)=>{
    
    setDomainClicked(key);
    const updatedStatus = skillsStatus.map((status, index) => {
      if (index === key) {
          return status === "skills__open" ? "skills__close" : "skills__open";
      }
      return "skills__close";
  });
    setSkillsstatus(updatedStatus)
  }
  

  return (
    <section className="skills section" id="skills">
      <SectionTitle title="Skills" subtitle="My technical level"></SectionTitle>
          <div className="container grid skills__container">
            
             
              <SkillDomain onClick={()=> handleSetSkillsDomain(0)} status={skillsStatus[0]} domainName="Frontend developer" domainSubTitle="More than 2 years" iconComponent={ <UilBracketsCurly className="skills__icon"></UilBracketsCurly>}>
                  <Skill skillName="Nextjs" skillPercentage="80%"></Skill>
                  <Skill skillName="React" skillPercentage="80%"></Skill>
                  <Skill skillName="JavaScript" skillPercentage="85%"></Skill>
                  <Skill skillName="Tailwindcss" skillPercentage="60%"></Skill>
              </SkillDomain>

              <SkillDomain onClick={()=> handleSetSkillsDomain(1)} status={skillsStatus[1]} domainName="Backend developer" domainSubTitle="More than 4 years" iconComponent={ <UilServerNetworkAlt className="skills__icon"></UilServerNetworkAlt>}>
                  <Skill skillName="Nestjs" skillPercentage="70%"></Skill>
                  <Skill skillName="Express" skillPercentage="85%"></Skill>
                  <Skill skillName="Typescript" skillPercentage="80%"></Skill>
                  <Skill skillName="Nodejs" skillPercentage="85%"></Skill>
              </SkillDomain>

              <SkillDomain onClick={()=> handleSetSkillsDomain(2)} status={skillsStatus[2]} domainName="Devops" domainSubTitle="More than 2 years" iconComponent={ <UilSwatchbook className="skills__icon"></UilSwatchbook>}>
                  <Skill skillName="Docker" skillPercentage="40%"></Skill>
                  <Skill skillName="CI/CD" skillPercentage="30%"></Skill>
                 <Skill skillName="k8" skillPercentage="30%"></Skill>
                 
              </SkillDomain>
          
            
          </div>
          </section>
  )
}

export default SkillsSection