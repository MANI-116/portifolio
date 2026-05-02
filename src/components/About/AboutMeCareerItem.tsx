interface Props {
  number: string;
  type: string;
  unit: string;
}
const AboutMeCarrerItem = ({ number, type, unit }: Props) => {
  return (
    <div>
      <span className="about__info-title">{`${number}+`}</span>
      <span className="about__info-name">{type} <br />{unit} </span>
    </div>
  );
};

export default AboutMeCarrerItem;
