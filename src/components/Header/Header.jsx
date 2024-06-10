import './Header.scss';
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <nav className="header__nav">
        <NavLink to="/" className="header__link">
          Каталог
        </NavLink>
        <NavLink to="/second" className="header__link">
          Наши клиенты
        </NavLink>
      
      </nav>
    </>
  );
}