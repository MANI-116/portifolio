import { ReactNode } from "react";
interface Props {
  title: string;
  children: ReactNode;
  sectionId: string;
}
const NavItem = ({ children, title, sectionId }: Props) => {
  return (
    <li >
      <a href={`#${sectionId}`} className="nav-item">
        {children} {title}
      </a>
    </li>
  );
};

export default NavItem;
