import ContactMeInput from "../components/Contact/ContactMeInput";
import ContactMeContact from "../components/Contact/ContactMeContact";
import SectionTitle from "../components/sectionTitle";
import { UilMessage } from "@iconscout/react-unicons"
const ContactMeSection = () => {
  return (
    <section className="contact section" id="contact">

       <SectionTitle title="Contact Me" subtitle="Get in touch" />
      <div className="contact__container container grid">
           
          <ContactMeContact />
          <form action="" className="contact__form grid">
            <ContactMeInput />
            
            <button className="button button--flex contact__btn">
              Send Message
              <UilMessage className="button__icon" /> 
              </button>
          </form>
        
      </div>
    </section>
  );
};

export default ContactMeSection;
