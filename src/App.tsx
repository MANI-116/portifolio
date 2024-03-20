import HomePage from "./pages/HomePage";
import NavigationBar from "./components/NavigationBar";
import AboutMeSection from "./pages/AboutMeSection";
import SkillsSection from "./pages/SkillsSection";
import QualificationSection from "./pages/QualificationSection";
import ServicesSection from "./pages/ServicesSection";
import PortifolioSection from "./pages/PortifolioSection";
import ContactMeSection from "./pages/ContactMeSection";
import "./App.css";
const App = () => {
  return (
    <>
      <NavigationBar />
      <menu className="menu">
        <HomePage />
        <AboutMeSection />
        <SkillsSection></SkillsSection>
        <QualificationSection />
        <ServicesSection />
        <PortifolioSection />
        <ContactMeSection />
      </menu>
      <footer></footer>
    </>
  );
};

export default App;
