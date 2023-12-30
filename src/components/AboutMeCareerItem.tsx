interface Props {
  number: string;
  type: string;
  unit: string;
}
const AboutMeCarrerItem = ({ number, type, unit }: Props) => {
  return (
    <div>
      <h2>{`${number}+`}</h2>
      <h4>{type}</h4>
      <h4>{unit}</h4>
    </div>
  );
};

export default AboutMeCarrerItem;
