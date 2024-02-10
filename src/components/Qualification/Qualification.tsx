import { UilCalendarAlt } from "@iconscout/react-unicons";

interface Prop {
  title: string;
  subtitle: string;
  timeline: string;
  position: "left" | "right";
  status: boolean;
}

const Qualification = (props: Prop) => {
  return (
    <>
      {props.position === "left" ? (
        <>
          <div></div>
          <div className="qualification-hammer">
            <span className="qualification-rounder"></span>
            <span className="qualification-line"></span>
          </div>
        </>
      ) : (
        <></>
      )}

      <div>
        <h3 className="qualification-title">{props.title}</h3>
        <span className="qualification-subtitle">{props.subtitle}</span>
        <div className="qualification-calendar">
          <UilCalendarAlt />
          {props.timeline}
        </div>
      </div>

      {props.position === "right" ? (
        <>
          <div className="qualification-hammer">
            <span className="qualification-rounder"></span>
            <span className="qualification-line"></span>
          </div>
          <div></div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Qualification;
