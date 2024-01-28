import { UilMessage } from "@iconscout/react-unicons";

const HomeInfo = () => {
  return (
    <div className=" home-data home-grid-item-2">
      <h1 className="home-title">Hi, I'am Mani</h1>
      <h3 className="home-subtitle">Fullstack Developer</h3>
      <p className="home-description">
      High Level experience in MERN FullStack Development and knowledge, producing quality work
      </p>
    
    <a href="#contactme" className="button button--flex">
    Contact Me <UilMessage className="button-icon" />
    </a>
     
    </div>
  );
};

export default HomeInfo;
