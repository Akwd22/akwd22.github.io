import { NavLink } from "react-router-dom";
import "./Header.css";

const LINKS = [
  { to: "/", label: "Accueil" },
  { to: "/projets", label: "Projets" },
];

function Header() {
  return (
    <header>
      <h1>Header</h1>
      <nav>
        {LINKS.map((link) => (
          <NavLink key={link.to} to={link.to} className={({ isActive }) => isActive ? "active" : null}>
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Header;
