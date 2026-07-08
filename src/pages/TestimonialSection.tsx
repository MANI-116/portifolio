import SectionTitle from "../components/sectionTitle";
import { UilStar} from "@iconscout/react-unicons"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation} from "swiper/modules"


const TestimonialSection = ()=>{
    return (
        <section className="testimonial section">
            <SectionTitle title="Testimonial" subtitle="My client saying" />
            <div className="testimonial__container container ">
            <Swiper modules={[Navigation,Pagination]}
            loop={true}
             grabCursor={true} 
             pagination={{
                
                clickable:true,
                dynamicBullets:true,
            }}
            breakpoints={{
                568:{
                    slidesPerView:2
                }
            }}
            spaceBetween={50} 
            slidesPerView={1} 
            onSlideChange={()=>{}} 
            onSwiper={()=>{}}>
                {clients.map((cli)=> <SwiperSlide key={cli.name}><TestimonialCard {...cli} /></SwiperSlide>)}
            </Swiper>
               
            </div>
           
        </section>
    )

}

const clients:{name:string,imagePath:string,clientAppreciation:string,client:string}[]= [
  
{
    name:"DR. Bhasha",
    imagePath:"/testimonial2.jpg",
    client:"Jamal Hospitals, COO",
    clientAppreciation:"Mani took ownership of the project and delivered high-quality work on time. Highly reliable and professional."
},
{
    name:"Srinivasa Reddy",
    imagePath:"/testimonial3.jpg",
    client:"SSPM Infra Founder",
    clientAppreciation:"Working with Mani was great. He has a strong understanding of backend systems and writes clean, maintainable code."
},
{
  name:"Sara Smith",
    imagePath:"/testimonial1.jpg",
    client:"Product Manager",
    clientAppreciation:"Mani delivered exactly what we needed. The application was well-structured, fast, and easy to use. Communication was smooth throughout the project."
}]



const TestimonialCard = ({name,imagePath,clientAppreciation,client}:{name:string,imagePath:string,clientAppreciation:string,client:string})=>{

    return (
        <div className="testimonial__content">
            <div className="testimonial__data ">
                <div className="testimonial__header">
                    <img src={imagePath} alt="client-image" className="testimonial__img"/>
                    <div className="">
                        <h3 className="testimonial__name ">{name}</h3>
                        <span className="testimonial__client">{client}</span>
                    </div> 
                </div>
            <div>
                <UilStar className="testimonial__icon-star" />
                <UilStar className="testimonial__icon-star" />
                <UilStar className="testimonial__icon-star" />
                <UilStar className="testimonial__icon-star" />
                <UilStar className="testimonial__icon-star" />
            </div>
            </div>
 
            <p className="testimonial__description">
               {clientAppreciation}
            </p> 
        </div>
    )
}

export default TestimonialSection;