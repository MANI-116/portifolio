interface Props {
  number: string;
  type: string;
  unit: string;
}
const AboutMeCarrerItem = ({ number, type, unit }: Props) => {
  return (
    <div>
      <span className="about-info-title">{`${number}+`}</span>
      <span className="about-info-name">{type} <br />{unit} </span>
    </div>
  );
};

export default AboutMeCarrerItem;
