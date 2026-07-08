import HomePage from "./pages/HomePage";
import NavigationBar from "./components/NavigationBar";
import AboutMeSection from "./pages/AboutMeSection";
import SkillsSection from "./pages/SkillsSection";
import QualificationSection from "./pages/QualificationSection";
import ContactMeSection from "./pages/ContactMeSection";
import { ServiceSection } from "./pages/ServicesSection"
import PortfolioSection from "./pages/Portfolio"
import TestimonialSection from "./pages/TestimonialSection";
import { UilMessage, UilFacebookF, UilInstagram, UilTwitterAlt, UilArrowUp } from "@iconscout/react-unicons"
import { useEffect, useState } from "react"
import 'swiper/css';
import "swiper/css/navigation"
import "swiper/css/pagination"
import "./App.css";
const App = () => {
  const [activeSec, setActiveSec ]=useState<string>("home");

  useEffect(()=>{
    const options:IntersectionObserverInit={
      rootMargin:"0px",
      threshold:0.55
    }
    const callback:IntersectionObserverCallback =(entries,observer)=>{
    
      entries.forEach((entry)=>{
        if(entry.isIntersecting){
          //
          setActiveSec(entry.target.id);
        }
      })

    }

    const sections = document.querySelectorAll(".section")
    const observer = new IntersectionObserver(callback,options);

    sections.forEach((section)=>observer.observe(section));
  },[])
  return (
  <>  
    <NavigationBar activeSection={activeSec}/>  
    <main className="main">
      <HomePage />
      <AboutMeSection />
      <SkillsSection />
      <QualificationSection />
      <ServiceSection />
      <PortfolioSection />
      <ProjectSection />
      <TestimonialSection />
      <ContactMeSection />
    </main>  
    <Footer />
   <ScrollTop />

    </>
   
  );
};

export default App;

function ScrollTop(){
 const [showScrollTop,setShowShowScrollTop] = useState<boolean>(false);

 useEffect(()=>{
  function handleScrollTop(){
    if(window.scrollY > 578){
      setShowShowScrollTop(true)
    }else{
      setShowShowScrollTop(false);
    }
  }
  document.addEventListener("scroll",handleScrollTop)
 },[])

  return  <a href="#" className={"scrollup " +(showScrollTop?"show__scrollup":"")} id="scrollup">
      <UilArrowUp className="scrollup__icon" />
    </a>
}

function Footer(){

  return <footer className="footer">
  <div className="footer__bg">
    <div className="container footer__container grid">
      <div>    
        <h1 className="footer__title">Mani</h1>
        <span className="footer__subtitle">Full Stack Developer</span>
      </div> 
      <ul className="footer__links">
        <li>
          <a href="#services" className="footer__link">Services</a>
        </li>
        <li>
          <a href="#portfolio" className="footer__link">Portifolio</a>
        </li>
        <li>
          <a href="#contact" className="footer__link">Contact Me</a>
        </li>
      </ul>
      <div className="footer__socials">
          <a href="https://www.facebook.com/" target="_blanket" className="footer__social">
            <UilFacebookF />
          </a>
          <a href="https://www.instagram.com/" target="_blanket" className="footer__social">
            <UilInstagram />
          </a>
          <a href="https://twitter.com/" target="_blanket" className="footer__social">
            <UilTwitterAlt/>
          </a>
      </div>
    </div>
  </div>

</footer> 
}
function ProjectSection(){
  return <section className="section project">
          <div className="project__bg">
            <div className="project__container container grid">
              <div className="project_data">
                <h2 className="project__title">You have a new project</h2>
                <p className="project__description">Contact me now and get a 35% discount
                  on your new project
                </p>
                <a href="#contact" className="button button--flex button--white">
                  Contact Me
                  <UilMessage />
                </a>
              </div>

              <img src="/project.png" alt="" className="project__img" />
            </div>
          </div>
      </section>
}
