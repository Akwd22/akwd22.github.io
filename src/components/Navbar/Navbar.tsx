import cn from "classnames";
import { FunctionComponent, useRef, useState } from "react";

import ButtonIcon from "components/ButtonIcon/ButtonIcon";
import SocialBar from "components/SocialBar/SocialBar";

import useIsDesktop from "hooks/useIsDesktop";
import useOutsideClick from "hooks/useOutsideClick";

import CurriculumVitae from "assets/files/cv-eddy-druet.pdf";
import { ReactComponent as AkwdIcon } from "assets/imgs/icons/akwd.svg";
import { ReactComponent as MenuIcon } from "assets/imgs/icons/menu.svg";
import "./Navbar.css";

/** Composant contenant les liens de la barre de navigation. */
const NavbarLinks: FunctionComponent = () => {
  return (
    <>
      <nav className="navbar-links">
        <a className="button" href="#accueil">
          À propos
        </a>
        <a className="button" href="#mes-projets">
          Projets
        </a>
        <a className="button" href={CurriculumVitae} target="_blank" rel="noreferrer">
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
  const [menuOpened, setMenuOpened] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);

  const menuRef = useRef<HTMLDivElement>();
  useOutsideClick(menuRef, () => setMenuClosing(true));

  /** Ouvrir le menu. */
  const openMenu = () => {
    setMenuClosing(false);
    setMenuOpened(true);
  };

  return (
    <>
      <div className="navbar-content">
        <ButtonIcon id="akwd-button" icon={<AkwdIcon />} href="/" tooltip="Aller à l'accueil" />
        <ButtonIcon id="menu-button" icon={<MenuIcon />} tooltip="Ouvrir le menu de navigation" onClick={openMenu} />
      </div>

      {menuOpened && (
        <div
          className={cn("navbar-menu", { closing: menuClosing })}
          ref={menuRef}
          onClick={(e) => e.target !== menuRef.current && setMenuClosing(true)}
          onAnimationEnd={() => menuClosing && setMenuOpened(false)}
        >
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
