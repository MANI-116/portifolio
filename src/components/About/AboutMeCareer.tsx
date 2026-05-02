import AboutMeCarrerItem from "./AboutMeCareerItem";

const AboutMeCareer = () => {
  return (
    <div className="about__info">
      <AboutMeCarrerItem number="03" type="Years" unit="experience" />
      <AboutMeCarrerItem number="4" type="Completed" unit="Projects" />
      <AboutMeCarrerItem number="2" type="Companies" unit="Worked" />
    </div>
  );
};

export default AboutMeCareer;
