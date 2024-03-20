import { ReactNode } from "react";

interface Props {
  title: string;
  value: string;
  children: ReactNode;
}
const ContactMeContactItem = ({ title, value, children }: Props) => {
  return (
    <div className="contactme-details-item">
      <div className="contactme-details-item-icon">{children}</div>
      <div className="contactme-details-item-info">
        <h3>{title}</h3>
        <h4>{value}</h4>
      </div>
    </div>
  );
};

export default ContactMeContactItem;
