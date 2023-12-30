import AboutMeCarrerItem from "./AboutMeCareerItem";

const AboutMeCareer = () => {
  return (
    <div className="aboutme-career">
      <AboutMeCarrerItem number="08" type="Years" unit="experience" />
      <AboutMeCarrerItem number="20" type="Completed" unit="Projects" />
      <AboutMeCarrerItem number="05" type="Companies" unit="Worked" />
    </div>
  );
};

export default AboutMeCareer;
