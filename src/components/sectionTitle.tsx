interface Props {
  title: string;
  subtitle: string;
}
const SectionTitle = ({ title, subtitle }: Props) => {
  return (
    <>
      <h2 className="section-title">{title}</h2>
      <span className="section-subtitle">{subtitle}</span>
    </>
  );
};

export default SectionTitle;
