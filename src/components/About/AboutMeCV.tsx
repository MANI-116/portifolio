import { UilDownloadAlt } from "@iconscout/react-unicons";

const AboutMeCV = () => {
  return (
    <div className="about__buttons">
      <a download="" href="/cv.pdf" className="button button--flex">
      Download CV<UilDownloadAlt className="button__icon"/>
      </a>
    </div>
  )
};

export default AboutMeCV;
