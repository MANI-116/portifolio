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
      <header >
        <nav >
          <a href="#" >
            Mani
          </a>
          <div >
            <ul >
              <NavItem title="Home" sectionId="">
                <UilEstate />
              </NavItem>
              <NavItem title="About" sectionId="aboutme">
                <UilUser/>
              </NavItem>
              <NavItem title="Skills" sectionId="skills">
                <UilFileAlt />
              </NavItem>
              <NavItem title="Services" sectionId="">
                <UilBriefcaseAlt />
              </NavItem>
              <NavItem title="Portifolio" sectionId="">
                <UilScenery/>
              </NavItem>
              <NavItem title="Contactme" sectionId="contactme">
                <UilMessage  />
              </NavItem>
            </ul>

            <UilTimes />
          </div>

          <div >
            <div >
              <UilApps />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavigationBar;
