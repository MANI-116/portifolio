import { UilLinkedinAlt } from "@iconscout/react-unicons";
import { UilGithubAlt, UilTwitterAlt } from "@iconscout/react-unicons";

const HomeProfileLinks = () => {
  return (
    <div className="home__social">
      <a href="https://www.linkedin.com/in/v-mani-484045196/" target="_blank" className="home__social-icon">
        <UilLinkedinAlt />
      </a>
      <a href="https://github.com/MANI-116" target="_blank" className="home__social-icon">
        <UilGithubAlt />
      </a>
      <a href="https://x.com/Mani_6016" target="_blank" className="home__social-icon">
        <UilTwitterAlt />
      </a>
    </div>
  );
};

export default HomeProfileLinks;
