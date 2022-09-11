import { FunctionComponent } from "react";

import "./Navbar.css";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  return (
    <header className="nav-header">
      <nav className="nav-links">
        <a href="/" className="button">
          À propos
        </a>
        <a href="/" className="button">
          Projets
        </a>
        <a href="/" className="button">
          Curriculum vitæ
        </a>
      </nav>
      <nav className="nav-socials">
        <a href="https://www.linkedin.com/in/eddy-druet-b5b065207" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com/Akwd22" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="mailto:eddydruet93@gmail.com">E-mail</a>
      </nav>
    </header>
  );
};

export default Navbar;
