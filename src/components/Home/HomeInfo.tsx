import { UilMessage } from "@iconscout/react-unicons";

const HomeInfo = () => {
  return (
    <div className=" home__data home-grid-item-2">
      <h1 className="home__title">Hi, I'am Mani</h1>
      <h3 className="home__subtitle">Fullstack Developer</h3>
      <p className="home__description">
      High Level experience in MERN FullStack Development and knowledge, producing quality work
      </p>
    
    <a href="#contact" className="button button--flex">
    Contact Me <UilMessage className="button__icon" />
    </a>
     
    </div>
  );
};

export default HomeInfo;
