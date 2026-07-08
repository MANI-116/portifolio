
import { UilAngleDown } from '@iconscout/react-unicons'
type Prop={
    domainName:string;
    domainSubTitle:string;
    iconComponent: React.ReactNode; 
    children ?: React.ReactNode;
    status:"skills__open" | "skills__close";
} & React.ComponentProps<"div">

const SkillDomain:React.FC<Prop> = (props:Prop) => {
  return (
              <div className={"skills__content "+props.status} onClick={props.onClick}>
                <div className="skills__header">
                   {props.iconComponent}
                   <div>
                    <h1 className="skills__title ">{props.domainName}</h1>
                    <span className="skills__subtitle">{props.domainSubTitle}</span>
                   </div>
                   <UilAngleDown className="skills__arrow"/>
                </div>

                <div className="skills__list grid">
                    {props.children}
                </div>
                
              </div>

  )
}

export default SkillDomain