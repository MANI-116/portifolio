import SectionTitle from "../components/sectionTitle"
import { UilBracketsCurly } from '@iconscout/react-unicons'
import { UilAngleDown } from '@iconscout/react-unicons'
import { UilServerNetworkAlt } from '@iconscout/react-unicons'
import { UilSwatchbook } from '@iconscout/react-unicons'
import SkillDomain from "../components/Skills/SkillDomain"
import Skill from "../components/Skills/Skill"
import { useState } from "react"
type Status = "skills-open" | "skills-close";
type SkillsStatus = Status [];
const SkillsSection = () => {
  
  const [skillsStatus,setSkillsstatus]= useState<SkillsStatus>(["skills-open","skills-close","skills-close"])
  const [domainClicked,setDomainClicked] = useState(0);

  console.log(skillsStatus)
  const handleSetSkillsDomain=(key:number)=>{
    
    setDomainClicked(key);
    const updatedStatus = skillsStatus.map((status, index) => {
      if (index === key) {
          return status === "skills-open" ? "skills-close" : "skills-open";
      }
      return "skills-close";
  });
    setSkillsstatus(updatedStatus)
  }
  

  return (
    <section className="skills section" id="skills">
      <SectionTitle title="Skills" subtitle="My technical level"></SectionTitle>
          <div className="container grid skills-container">
            <div>
             
              <SkillDomain onClick={()=> handleSetSkillsDomain(0)} status={skillsStatus[0]} domainName="Frontend developer" domainSubTitle="More than 4 years" iconComponent={ <UilBracketsCurly className="skills-icon"></UilBracketsCurly>}>
                  <Skill skillName="HTML" skillPercentage="80%"></Skill>
                  <Skill skillName="CSS" skillPercentage="50%"></Skill>
                  <Skill skillName="JavaScript" skillPercentage="85%"></Skill>
                  <Skill skillName="React" skillPercentage="50%"></Skill>
              </SkillDomain>

              <SkillDomain onClick={()=> handleSetSkillsDomain(1)} status={skillsStatus[1]} domainName="Backend developer" domainSubTitle="More than 4 years" iconComponent={ <UilServerNetworkAlt className="skills-icon"></UilServerNetworkAlt>}>
                  <Skill skillName="Nodejs" skillPercentage="90%"></Skill>
                  <Skill skillName="Express" skillPercentage="95%"></Skill>
                  <Skill skillName="Typescript" skillPercentage="91%"></Skill>
                  <Skill skillName="Mongoose" skillPercentage="85%"></Skill>
              </SkillDomain>

              <SkillDomain onClick={()=> handleSetSkillsDomain(2)} status={skillsStatus[2]} domainName="Devops" domainSubTitle="More than 4 years" iconComponent={ <UilSwatchbook className="skills-icon"></UilSwatchbook>}>
                  <Skill skillName="Docker" skillPercentage="40%"></Skill>
                  <Skill skillName="CI/CD" skillPercentage="30%"></Skill>
                 
              </SkillDomain>
          
            </div>
          </div>
          </section>
  )
}

export default SkillsSection