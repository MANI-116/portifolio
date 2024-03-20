import { UilAngleRight } from "@iconscout/react-unicons";
import { UilAngleLeft } from "@iconscout/react-unicons";
import { UilArrowRight } from "@iconscout/react-unicons";

type Props = {
  title: string;
  imgPath: string;
  content: string;
  handleLeftClick: () => void;
  handleRightClick: () => void;
};

const PortifolioCard = (props: Props) => {
  return (
    <div className="portifolio-card">
      <div className="portifolio-direction-buttons">
        <UilAngleLeft onClick={props.handleLeftClick} />
      </div>
      <div className="portifolio-card-body">
        <img
          src={`/${props.imgPath}`}
          alt="project thumbnail"
          className="portifolio-image"
        />

        <div>
          <h4 className="portifolio-card-heading">{props.title}</h4>

          <p className="portifolio-card-content">{props.content}</p>

          <button className="portifolio-card-button">
            Demo <UilArrowRight />
          </button>
        </div>
      </div>

      <div className="portifolio-direction-buttons">
        <UilAngleRight onClick={props.handleRightClick} />
      </div>
    </div>
  );
};

export default PortifolioCard;
