import AboutMeCV from "../components/AboutMeCV";
import AboutMeCareer from "../components/AboutMeCareer";
import AboutMeImg from "../components/AboutMeImg";
import AboutMeIntro from "../components/AboutMeIntro";
import SectionTitle from "../components/sectionTitle";

const AboutMeSection = () => {
  return (
    <div className="aboutme-section" id="aboutme">
      <SectionTitle title="About me" subtitle="My Introduction" />
      <div className="aboutme-content">
        <AboutMeImg />
        <div className="aboutme-content-data">
          <AboutMeIntro />
          <AboutMeCareer />
          <AboutMeCV />
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
