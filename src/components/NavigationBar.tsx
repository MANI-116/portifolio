import { UilEstate } from "@iconscout/react-unicons";
import { UilUser } from "@iconscout/react-unicons";
import { UilFileAlt } from "@iconscout/react-unicons";
import { UilBriefcaseAlt } from "@iconscout/react-unicons";
import { UilMessage } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { UilApps } from "@iconscout/react-unicons";
import { UilScenery } from "@iconscout/react-unicons";
import NavItem from "./NavItem";

const NavigationBar = () => {
  return (
    <div>
      <header className="header" id="header">
        <nav className="nav container">
          <a href="#" className="nav_logo">
            Mani
          </a>
          <div className="nav_menu">
            <ul className="nav_list grid">
              <NavItem title="Home" sectionId="">
                <UilEstate className="nav_icon" />
              </NavItem>
              <NavItem title="About" sectionId="aboutme">
                <UilUser className="nav_icon" />
              </NavItem>
              <NavItem title="Skills" sectionId="skills">
                <UilFileAlt className="nav_icon" />
              </NavItem>
              <NavItem title="Services" sectionId="">
                <UilBriefcaseAlt className="nav_icon" />
              </NavItem>
              <NavItem title="Portifolio" sectionId="">
                <UilScenery className="nav_icon" />
              </NavItem>
              <NavItem title="Contactme" sectionId="contactme">
                <UilMessage className="nav_icon" />
              </NavItem>
            </ul>

            <UilTimes className="nav_close" />
          </div>

          <div className="nav_buttons">
            <div className="nav_toggle" id="nav-toogle">
              <UilApps />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavigationBar;
