interface Props {
  title: string;
}
const ContactMeInputItem = ({ title }: Props) => {
  return (
    <div className="contactme-input-item">
      <label htmlFor={title} className="contactme-input-item-label">
        {title}
      </label>
      <input type="text" className="contactme-input-item-input" />
    </div>
  );
};

export default ContactMeInputItem;
