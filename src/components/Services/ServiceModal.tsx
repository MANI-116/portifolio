import { UilTimes } from "@iconscout/react-unicons";

interface Props {
  title: string;
  jobsList: string[];
  hadleCloseModal: () => void;
}

const ServiceModal = (props: Props) => {
  return (
    <div className="service-modal">
      <div className="service-modal-header">
        <h4>{props.title}</h4>
        <UilTimes onClick={props.hadleCloseModal} />
      </div>
      <div className="service-modal-content">
        {props.jobsList.map((i) => (
          <p>{i}</p>
        ))}
      </div>
    </div>
  );
};

export default ServiceModal;
