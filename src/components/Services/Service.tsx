import { ReactNode, useState } from "react";
import { UilArrowRight } from "@iconscout/react-unicons";

interface Prop {
  icon: ReactNode;
  title: string;
  handler: () => void;
}

const ServiceCard = (props: Prop) => {
  return (
    <div className="service-card">
      <div className="service-content">
        {props.icon}

        <h2>{props.title}</h2>

        <div className="service-card-button" onClick={props.handler}>
          <span>View More</span>
          <UilArrowRight />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
