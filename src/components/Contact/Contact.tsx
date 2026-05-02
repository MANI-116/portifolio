import { ReactNode } from "react";

interface Props {
  title: string;
  value: string;
  children: ReactNode;
}
const Contact = ({ title, value, children }: Props) => {
  return (
    <div className="contact__information">
      {children}
      <div className="text-gray-500">
        <h3 className="contact__title">{title}</h3>
        <span className="contact__subtitle">{value}</span>
      </div>
    </div>
  );
};

export default Contact;
