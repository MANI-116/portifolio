import { ReactNode } from "react";

interface Props {
  title: string;
  value: string;
  children: ReactNode;
}
const ContactMeContactItem = ({ title, value, children }: Props) => {
  return (
    <div className="ContactMe-contact-item">
      <div>{children}</div>
      <div className="ContacMe-contact-item-info">
        <h3>{title}</h3>
        <h4>{value}</h4>
      </div>
    </div>
  );
};

export default ContactMeContactItem;
