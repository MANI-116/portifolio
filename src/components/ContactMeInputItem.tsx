interface Props {
  title: string;
}
const ContactMeInputItem = ({ title }: Props) => {
  return (
    <label htmlFor={title}>
      {title}
      <input type="text" />
    </label>
  );
};

export default ContactMeInputItem;
