import { useRef,forwardRef, ForwardedRef } from "react"
import SectionTitle from "../components/sectionTitle"
import { UilWebGrid, UilArrowRight, UilTimes, UilCheckCircle, UilPen, UilBook, UilWorld} from "@iconscout/react-unicons"

type Service= {
    titleFirst: string;
    titleSecond: string;
    services: string[];
}
const service:Service[] = [
  {
    titleFirst: "Frontend",
    titleSecond: "Developer",
    services: [
      "Build responsive web interfaces using React",
      "Convert designs into pixel-perfect UI components",
      "Optimize performance for fast user experience",
      "Integrate APIs and manage client-side state"
    ]
  },
  {
    titleFirst: "Backend",
    titleSecond: "Developer",
    services: [
      "Design and develop RESTful APIs with Node.js",
      "Implement authentication and authorization systems",
      "Build scalable database schemas with MongoDB",
      "Optimize backend performance and data handling"
    ]
  },
  {
    titleFirst: "Full Stack",
    titleSecond: "Developer",
    services: [
      "Develop complete MERN stack applications",
      "Build dashboards for onboarding and configuration",
      "Integrate frontend with backend services",
      "Implement real-world features like payments and admin panels"
    ]
  }
]
export const ServiceSection:React.FC = ()=>{
   

    return (
        <section className="section services" id="services">
            <SectionTitle title="Services" subtitle="What i offer" />
            
            <div className="services__container container grid">
                <div className="services__content">
                    <ServiceCard service={service[0]}>
                        <UilWebGrid className="services__icon" />
                     </ServiceCard>
                </div>           
                <div className="services__content">
                   <ServiceCard service={service[1]}>
                        <UilPen className="services__icon" />
                     </ServiceCard>
                </div>
                <div className="services__content">
                    <ServiceCard service={service[2]}>
                        <UilBook className="services__icon" />
                     </ServiceCard>
                </div>
            </div>
        </section>
    )

}

const ServiceModal =forwardRef<HTMLDialogElement,{services:string[]}>(({services}:{services:string[]},ref:ForwardedRef<HTMLDialogElement>)=>{

return (
<dialog ref={ref}  className="services__modal" >
    <div className="services__modal-content">
            <h4 className="services__modal-title">Frontend <br/> Developer</h4>
            <form method="dialog" className="services__modal-close">
            <button className=" services__modal-close">
            <UilTimes />
            </button>
            </form>
    <ul className="services__modal-services grid">
        {services.map((s)=>  <li key={s} className="services__modal-service"> 
            <UilCheckCircle className="services__modal-icon"/>
            <p>{s}</p>
        </li>)}        
    </ul>
    </div>

</dialog>)})



const ServiceCard = ({children,service}:{children:React.ReactNode,service:Service})=>{
     const modal = useRef<HTMLDialogElement>(null);
     
     function handleShowModal(){
        
        if(modal.current)
        modal.current.showModal();
     }
   return(
 <>
    {children}
    <h3 className="services__title">{service.titleFirst}<br/> {service.titleSecond}</h3>
    
    <span className="button button--flex button--small button--link services__button" onClick={handleShowModal}>
         View More
         <UilArrowRight/>
     </span>
    <ServiceModal ref={modal} services={service.services} />
    
 </>)


   }
