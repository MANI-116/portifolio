import AboutMeCV from "../components/About/AboutMeCV";
import AboutMeCareer from "../components/About/AboutMeCareer";
import AboutMeImg from "../components/About/AboutMeImg";
import SectionTitle from "../components/sectionTitle";

const AboutMeSection = () => {
  return (
    
    <section className="about section" id="about">
      <SectionTitle title="About me" subtitle="My Introduction" />
      <div className="about__container container grid">
        <AboutMeImg />
        <div className="about__data">
          <p className="about__description">
          Full Stack Developer with experience building scalable APIs and real-world applications, including a RaaS platform and a Hospital Management System.
          I specialize in developing end-to-end solutions — from backend logic to frontend interfaces — and I’m open to freelance and full-time opportunities to build and improve impactful products.
          </p>
          <AboutMeCareer />
          <AboutMeCV />
        </div>
      </div>
    </section>
    
  );
};

export default AboutMeSection;
