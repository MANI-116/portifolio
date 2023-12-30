import ContactMeButton from "../components/ContactMeButton";
import ContactMeInput from "../components/ContactMeInput";
import ContactMeContact from "../components/ContactMeContact";
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
