
import { UilAngleDown } from '@iconscout/react-unicons'
type Prop={
    domainName:string;
    domainSubTitle:string;
    iconComponent: React.ReactNode; 
    children ?: React.ReactNode;
    status:"skills-open" | "skills-close";
} & React.ComponentProps<"div">

const SkillDomain:React.FC<Prop> = (props:Prop) => {
  console.log(`domain status-${props.status}`)
  return (
              <div className={"skills-content "+props.status} onClick={props.onClick}>
                <div className="skills-header">
                   {props.iconComponent}
                   <div>
                    <h1 className="skills-title ">{props.domainName}</h1>
                    <span className="skills-subtitle">{props.domainSubTitle}</span>
                   </div>
                   <UilAngleDown className="skills-arrow"/>
                </div>

                <div className="skills-list">
                    {props.children}
                </div>
                
              </div>

  )
}

export default SkillDomain