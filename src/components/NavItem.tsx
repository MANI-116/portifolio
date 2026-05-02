import { ReactNode } from "react";
interface Props {
  title: string;
  children: ReactNode;
  sectionId: string;
  onNavIconClick:()=>void;
  active:boolean
}
const NavItem = ({ children, title, sectionId,onNavIconClick,active }: Props) => {
  return (
    <li className="nav__item" >
      <a href={`#${sectionId}`} className={"nav__link  " + (active ? " active":"")} onClick={onNavIconClick} >
        {children} 
       {title}
      </a>
    </li>
  );
};

export default NavItem;
