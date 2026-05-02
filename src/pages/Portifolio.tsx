import { useState } from "react"
import SectionTitle from "../components/sectionTitle"
import { UilArrowRight, UilAngleRight, UilAngleLeft} from "@iconscout/react-unicons"
const PortifolioSection = ()=>{
    const [selectedPortfolio,setSelectedPortfolio]=useState<number>(0)

    const projects = [{title:"Hospital Management System" ,description:"Electron based desktop application for hospital to maintain records and give services digitally",imgPath:"/portfolio1.jpg"},
        {title:"SMK STONE TECH" ,description:"Regularize contruction methods and stream line process",imgPath:"/portfolio2.jpg"},
        {title:"RAAS PORTAL API" ,description:"build end to end API's for client onboarding to RAAS software",imgPath:"/portfolio3.jpg"}];
    
        function handleLeftClick(){
            if(selectedPortfolio === 0){
                setSelectedPortfolio(projects.length -1);
            }else{
                setSelectedPortfolio(selectedPortfolio-1);
            }
        }

        function handleRightClick(){
            if(selectedPortfolio === projects.length-1){
                setSelectedPortfolio(0);
            }else{
                setSelectedPortfolio(selectedPortfolio+1);
            }
        }

        function handleDotClick(index:number){
            setSelectedPortfolio(index);
        }


    return (
        <section className="section portifolio" id="portifolio">
            <SectionTitle title="Portifolio" subtitle="Most recent work" />

            <div className="portifolio__container container">
                <div className="portifolio__main grid">
                    <UilAngleLeft onClick={handleLeftClick} className="portifolio__swipe-icon portifolio__swiper-prev " size="5rem"/>
                    <Portifolio title={projects[selectedPortfolio].title} description={projects[selectedPortfolio].description} imgPath={projects[selectedPortfolio].imgPath} />
                    <UilAngleRight onClick={handleRightClick} className="portifolio__swipe-icon portifolio__swiper-next"/>
                </div>
                <div className="portifolio__pgn">
                    {projects.map((p,i)=><Dot key={p.title} index={i} active={selectedPortfolio===i} callback={handleDotClick} />)}
                  
                </div>
            </div>
            
        </section>
    )

}

const Portifolio = ({title,description,imgPath}:{title:string,description:string,imgPath:string})=>{
    return(
                    <div className="portifolio__content grid">

                        <img src={imgPath} alt="project1 image" className="portifolio__img" />
                        <div className="portifolio__data">
                            <h3 className="portifolio__title">{title}</h3>
                            <p className="portifolio__description">{description}</p>
                            <a href="#" className="button button--flex button--small portifolio__button">
                                Demo <UilArrowRight className="button__icon"/>
                            </a>
                            
                        </div>
                    </div>
        
    )
}

const Dot = ({active,index,callback}:{active:boolean,index:number,callback:(index:number)=>void})=>{

   return <button onClick={()=>callback(index)} className={"portifolio__pgn-dot " +(active?"active":"")}></button >

}

export default PortifolioSection;