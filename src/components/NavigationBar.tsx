import { UilEstate } from "@iconscout/react-unicons";
import { UilUser } from "@iconscout/react-unicons";
import { UilFileAlt } from "@iconscout/react-unicons";
import { UilBriefcaseAlt } from "@iconscout/react-unicons";
import { UilMessage } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { UilApps } from "@iconscout/react-unicons";
import { UilScenery, UilMoon, UilSun} from "@iconscout/react-unicons";
import "../App.css"
import NavItem from "./NavItem";
import { useState,useEffect } from "react";
const NavigationBar= ({activeSection}:{activeSection:string}) => {
  const [showNavList,setShowNavList] = useState<boolean>(false);
  const [scrollHeader,setScrollHeader] = useState<boolean>(false);
  const [theme,setTheme] = useState<"dark-theme"|"light-theme">("light-theme");
  useEffect(()=>{
      document.body.classList.remove("dark-theme","light-theme");
      document.body.classList.add(theme);
  },[theme])
 useEffect(()=>{
  function handleScrollHeader(){

    if(window.scrollY > 100 ){
      setScrollHeader(true);
    }else{
      setScrollHeader(false);
    }
  }
  document.addEventListener("scroll",handleScrollHeader)
 })
  const handleCloseClick = ()=>{
    setShowNavList(false)
  }
  
  const handleAppsClicked = ()=>{
    setShowNavList(true)
  }

  function handleNavIconclick(){
    setShowNavList(false);
  }

  function handleThemeChange(){
    if(theme === "dark-theme"){
      setTheme("light-theme")
    }else{
      setTheme("dark-theme")
    }
  }
  
  return ( 
      <header className={"header "+(scrollHeader?"scroll__header":"")} id="header">
        <nav className="nav container" >
          <a href="#" className="nav__logo">
            Mani
          </a>
          <div className={"nav__menu "+(showNavList ? "show-menu":"")} id="nav-menu" >
            <ul className="nav__list grid " >
              <NavItem active={activeSection === "home" ? true :false}  title="Home" sectionId="" onNavIconClick={handleNavIconclick} >
                <UilEstate className="nav__icon" />
              </NavItem>
              <NavItem active={activeSection === "about" ? true :false} title="About" sectionId="about" onNavIconClick={handleNavIconclick}>
                <UilUser className="nav__icon" />
              </NavItem>
              <NavItem active={activeSection === "skills" ? true :false} title="Skills" sectionId="skills" onNavIconClick={handleNavIconclick}>
                <UilFileAlt className="nav__icon"/>
              </NavItem>
              <NavItem active={activeSection === "services" ? true :false} title="Services" sectionId="services" onNavIconClick={handleNavIconclick}>
                <UilBriefcaseAlt className="nav__icon" />
              </NavItem>
              <NavItem active={activeSection === "portfolio" ? true :false} title="Portfolio" sectionId="portfolio" onNavIconClick={handleNavIconclick}>
                <UilScenery className="nav__icon" />
              </NavItem>
              <NavItem active={activeSection === "contact" ? true :false} title="Contactme" sectionId="contact" onNavIconClick={handleNavIconclick}>
                <UilMessage className="nav__icon"  />
              </NavItem>
            </ul>
            <UilTimes   onClick={handleCloseClick} className="nav__close" id="nav-close"/>
          </div>

          <div className="nav__btns" > 
           {theme==="light-theme"?  <UilMoon className="change-theme" id="theme-button" onClick={handleThemeChange}/>:<UilSun className="change-theme" id="theme-button" onClick={handleThemeChange}/>}
            <div className="nav__toggle" id="nav-toggle" onClick={handleAppsClicked}>
              <UilApps/>
            </div>
          </div>
        </nav>
      </header>
    
  );
};

export default NavigationBar;
