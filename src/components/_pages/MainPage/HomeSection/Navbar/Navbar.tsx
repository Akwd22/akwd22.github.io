import SocialBar from "components/SocialBar/SocialBar";
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
      <SocialBar />
    </header>
  );
};

export default Navbar;
