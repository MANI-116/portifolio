import SectionTitle from "../components/sectionTitle"
import QualificationCard from "../components/Qualification/QualificationCard"
import QualificationJourney from "../components/Qualification/QualificationJourney"
import { ReactNode } from "react"
import { useState } from "react"
import { UilGraduationCap, UilBriefcaseAlt}  from "@iconscout/react-unicons"

interface Journey {
  title:string,
  subtitle:string,
  timeline:string
}
const QualificationSection = () => {
  const [qualification,setQualification] = useState<"education" | "work">("education");

  function handleQual(tabName:string){

    if(tabName != "education"){
      setQualification("work")
    }else{
      setQualification("education")
    }
  }

  const journey:Journey[][]  = [ 
    [{title:"ECE",
     subtitle:"NIT Hamirpur",
     timeline:"2019-2023"},
    {title:"WEB DEVELOPMENT",
       subtitle:"smartknower",
       timeline:"2022-2023"},
    {title:"MERN STACK",
     subtitle:"100XDevs",
     timeline:"2023-2024"}],
    [{title:"SmartKnower",
     subtitle:"Remote",
     timeline:"2022-2023"},
    {title:"Jio",
       subtitle:"Bengaluru",
       timeline:"2023-2024"},
    {title:"Hospital Management Software",
     subtitle:"Remote",
     timeline:"2024-2026"}]]
  return (
    <section className="section qualification">
     
     <SectionTitle title="Qualification" subtitle="My Personal Journey"/>
     <div className="qualification__container container">

      <div className="qualification__tabs">
        <div className={"qualification__button button--flex " + (qualification==="education"?" qualification__active":"")} onClick={()=>handleQual("education")}>
          <UilGraduationCap className="qualification__icon" />Education
        </div>
        <div className={"qualification__button button--flex " + (qualification==="work"?" qualification__active":"")} onClick={()=>handleQual("work")}>
            <UilBriefcaseAlt  className="qualification__icon"/>Work
        </div>
      </div>
     
      <div className="qualification__sections">
        
       <div className="qualification_content">
        {
          qualification==="education"?journey[0].map((j,index)=><QualificationArranger key={j.title} position={index%2===0?"left":"right"} >
        <QualificationCard title={j.title} subtitle={j.subtitle} timeLine={j.timeline}></QualificationCard>
        </QualificationArranger>):journey[1].map((j,index)=><QualificationArranger key={j.title} position={index%2===0?"left":"right"} >
          <QualificationCard title={j.title} subtitle={j.subtitle} timeLine={j.timeline}></QualificationCard>
        </QualificationArranger>)
      }
      </div>

      </div>

     </div>
    
    </section>
  )
}

export default QualificationSection


const QualificationArranger = ({position,children}:{position:"left"|"right",children:ReactNode})=>{

  if(position === "left"){
    return (
      <div className="qualification__data">
          {children}    
          <div>
            <span className="qualification__rounder"></span>
            <span className="qualification__line"></span>
          </div>     
          <div ></div>
      </div>
    )
  }
 return (
    <div className="qualification__data">
      <div>
      </div>
      <div>
            <span className="qualification__rounder"></span>
            <span className="qualification__line"></span>
      </div>
      {children}    
    </div>  
    
  )

}