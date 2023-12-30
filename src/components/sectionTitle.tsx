interface Props {
  title: string;
  subtitle: string;
}
const SectionTitle = ({ title, subtitle }: Props) => {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
    </div>
  );
};

export default SectionTitle;
