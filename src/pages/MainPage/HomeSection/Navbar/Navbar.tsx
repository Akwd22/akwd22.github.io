import { FunctionComponent, useRef, useState } from "react";

import ButtonIcon from "components/ButtonIcon/ButtonIcon";
import SocialBar from "components/SocialBar/SocialBar";

import useIsDesktop from "hooks/useIsDesktop";
import useOutsideClick from "hooks/useOutsideClick";

import { ReactComponent as AkwdIcon } from "assets/imgs/icons/akwd.svg";
import { ReactComponent as BurgerIcon } from "assets/imgs/icons/burger.svg";
import "./Navbar.css";

/** Composant contenant les liens de la barre de navigation. */
const NavbarLinks: FunctionComponent = () => {
  return (
    <>
      <nav className="navbar-links">
        <a href="#accueil" className="button">
          À propos
        </a>
        <a href="#mes-projets" className="button">
          Projets
        </a>
        <a href="/" className="button">
          Curriculum vitæ
        </a>
      </nav>
      <SocialBar />
    </>
  );
};

/** Composant de la barre de navigation large pour grand écran. */
const NavbarDesktop: FunctionComponent = () => {
  return <NavbarLinks />;
};

/** Composant de la barre de navigation compacte pour petit écran. */
const NavbarMobile: FunctionComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>();
  useOutsideClick(menuRef, () => setIsMenuOpen(false));

  return (
    <>
      <div className="navbar-content">
        <ButtonIcon id="akwd-button" icon={<AkwdIcon />} href="/" tooltip="Aller à l'accueil" />
        <ButtonIcon id="menu-button" icon={<BurgerIcon />} tooltip="Ouvrir le menu de navigation" onClick={() => setIsMenuOpen(!isMenuOpen)} />
      </div>

      {isMenuOpen && (
        <div ref={menuRef} className="navbar-menu">
          <NavbarLinks />
        </div>
      )}
    </>
  );
};

/** Composant de la barre de navigation vers les sections du site et mes réseaux sociaux. */
const Navbar: FunctionComponent = () => {
  const isDesktop = useIsDesktop();

  return <div className="navbar">{isDesktop ? <NavbarDesktop /> : <NavbarMobile />}</div>;
};

export default Navbar;
