import ContactMeContactItem from "../ContactMeContactItem";
import { UilPhoneAlt } from "@iconscout/react-unicons";
import { UilEnvelopeAlt } from "@iconscout/react-unicons";
import { UilMapMarkerAlt } from "@iconscout/react-unicons";

const ContactMeContact = () => {
  return (
    <div className="ContactMeContact">
      <ContactMeContactItem title="Call Me" value="1234567890">
        <UilPhoneAlt />
      </ContactMeContactItem>
      <ContactMeContactItem title="Email" value="111manikanta.v@gmail.com">
        <UilEnvelopeAlt />
      </ContactMeContactItem>
      <ContactMeContactItem title="Location" value="Bengaluru-India">
        <UilMapMarkerAlt />
      </ContactMeContactItem>
    </div>
  );
};

export default ContactMeContact;
