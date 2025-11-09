import AboutMeCV from "../components/About/AboutMeCV";
import AboutMeCareer from "../components/About/AboutMeCareer";
import AboutMeImg from "../components/About/AboutMeImg";
import AboutMeIntro from "../components/About/AboutMeIntro";
import SectionTitle from "../components/sectionTitle";

const AboutMeSection = () => {
  return (
    
    <section className="about section" id="aboutme">
      <SectionTitle title="About me" subtitle="My Introduction" />
      <div className="about-container container grid">
        <AboutMeImg />
        <div className="about-data">
          <AboutMeIntro />
          <AboutMeCareer />
          <AboutMeCV />
        </div>
      </div>
    </section>
    
  );
};

export default AboutMeSection;
