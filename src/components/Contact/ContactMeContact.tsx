import Contact from "./Contact";
import { UilPhoneAlt } from "@iconscout/react-unicons";
import { UilEnvelopeAlt } from "@iconscout/react-unicons";
import { UilMapMarkerAlt } from "@iconscout/react-unicons";

const ContactMeContact = () => {
  return (
    <div>
      <Contact title="Call Me" value="+91-9701836209">
        <UilPhoneAlt className="contact__icon" />
      </Contact>
      <Contact title="Email" value="111manikanta.v@gmail.com">
        <UilEnvelopeAlt className="contact__icon"/>
      </Contact>
      <Contact title="Location" value="Bengaluru-India">
        <UilMapMarkerAlt className="contact__icon"/>
      </Contact>
    </div>
  );
};

export default ContactMeContact;
