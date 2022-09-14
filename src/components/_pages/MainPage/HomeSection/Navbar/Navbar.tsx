import SocialBar from "components/SocialBar/SocialBar";
import { FunctionComponent, useRef, useState } from "react";
import { ReactComponent as AkwdIcon } from "assets/imgs/icons/akwd.svg";
import { ReactComponent as BurgerIcon } from "assets/imgs/icons/burger.svg";
import "./Navbar.css";
import ButtonIcon from "components/ButtonIcon/ButtonIcon";
import useOutsideClick from "hooks/useOutsideClick";

interface NavbarProps {}
interface NavbarDesktopProps {}
interface NavbarMobileProps {}

const LINKS = (
  <>
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
  </>
);

const NavbarDesktop: FunctionComponent<NavbarDesktopProps> = () => {
  return <header className="header">{LINKS}</header>;
};

const NavbarMobile: FunctionComponent<NavbarMobileProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>();
  useOutsideClick(menuRef, () => setIsMenuOpen(false));

  return (
    <header className="header-compact">
      <div className="header-icons">
        <ButtonIcon icon={<AkwdIcon />} href="/" />
        <ButtonIcon
          icon={<BurgerIcon />}
          onClick={(e) => {
            setIsMenuOpen(!isMenuOpen);
            e.stopPropagation();
          }}
        />
      </div>

      {isMenuOpen && (
        <div ref={menuRef} className="menu-burger">
          {LINKS}
        </div>
      )}
    </header>
  );
};

const Navbar: FunctionComponent<NavbarProps> = () => {
  return (
    <>
      <NavbarDesktop />
      <NavbarMobile />
    </>
  );
};

export default Navbar;
