import { UilEstate } from "@iconscout/react-unicons";
import { UilUser } from "@iconscout/react-unicons";
import { UilFileAlt } from "@iconscout/react-unicons";
import { UilBriefcaseAlt } from "@iconscout/react-unicons";
import { UilMessage } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { UilApps } from "@iconscout/react-unicons";
import { UilScenery } from "@iconscout/react-unicons";
import NavItem from "./NavItem";
import { useState } from "react";
const NavigationBar = () => {
  const [closeCross, setCloseCross] = useState(true);
  const [appsOpen, setAppsOpen] = useState(false);

  const handleCrossClick = () => {
    console.log(closeCross);
    setCloseCross(!closeCross);
    setAppsOpen(!closeCross);
  };

  const handleAppsClicked = () => {
    console.log(appsOpen);
    setCloseCross(!appsOpen);
    setAppsOpen(!appsOpen);
  };

  return (
    <div>
      <header className="header">
        <nav
          className="nav container"
          style={{ bottom: appsOpen === true ? "-100%" : 0 }}
        >
          <a href="#" className="nav-title">
            Mani
          </a>
          <div
            className="nav-menu"
            style={{ bottom: closeCross === true ? "-100%" : 0 }}
          >
            <ul className="nav-list grid">
              <NavItem title="Home" sectionId="">
                <UilEstate className="nav-item-icon" />
              </NavItem>
              <NavItem title="About" sectionId="aboutme">
                <UilUser className="nav-item-icon" />
              </NavItem>
              <NavItem title="Skills" sectionId="skills">
                <UilFileAlt className="nav-item-icon" />
              </NavItem>
              <NavItem title="Services" sectionId="services">
                <UilBriefcaseAlt className="nav-item-icon" />
              </NavItem>
              <NavItem title="Portifolio" sectionId="portifolio">
                <UilScenery className="nav-item-icon" />
              </NavItem>
              <NavItem title="Contactme" sectionId="contactme">
                <UilMessage className="nav-item-icon" />
              </NavItem>
            </ul>

            <UilTimes className="nav-cross" onClick={handleCrossClick} />
          </div>

          <div className="nav-apps" onClick={handleAppsClicked}>
            <UilApps />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavigationBar;
