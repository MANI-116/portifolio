import ContactMeButton from "../components/Contact/ContactMeButton";
import ContactMeInput from "../components/Contact/ContactMeInput";
import ContactMeContact from "../components/Contact/ContactMeContact";
import SectionTitle from "../components/sectionTitle";

const ContactMeSection = () => {
  return (
    <div id="contactme" className="ContactMeSection">
      <SectionTitle title="Contact Me" subtitle="Get in touch" />
      <div className="ContactMe-content">
        <ContactMeContact />
        <div className="ContactMe-input-section">
          <ContactMeInput />
          <ContactMeButton />
        </div>
      </div>
    </div>
  );
};

export default ContactMeSection;
