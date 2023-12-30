import { ReactNode } from "react";
interface Props {
  title: string;
  children: ReactNode;
  sectionId: string;
}
const NavItem = ({ children, title, sectionId }: Props) => {
  return (
    <li className="nav_item">
      <a href={`#${sectionId}`} className="nav_link">
        {children} {title}
      </a>
    </li>
  );
};

export default NavItem;
