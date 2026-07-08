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
          Full Stack Developer who built a real-time perpetual futures exchange from scratch — including a custom FIFO order matching engine, WebSocket streaming orderbook, Redis event-driven architecture, and a Next.js 16 trading interface with 208+ passing tests.
          I've also built a RaaS platform, Hospital Management System, and various end-to-end applications.
          I specialize in systems-level backend work and polished frontend interfaces, and I'm open to freelance and full-time roles.
          </p>
          <AboutMeCareer />
          <AboutMeCV />
        </div>
      </div>
    </section>
    
  );
};

export default AboutMeSection;
