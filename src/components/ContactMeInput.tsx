import ContactMeInputItem from "./ContactMeInputItem";

const ContactMeInput = () => {
  return (
    <div className="ContactMe-input">
      <ContactMeInputItem title="Name"></ContactMeInputItem>
      <ContactMeInputItem title="Email" />
      <ContactMeInputItem title="Project" />
      <ContactMeInputItem title="Message" />
    </div>
  );
};

export default ContactMeInput;
