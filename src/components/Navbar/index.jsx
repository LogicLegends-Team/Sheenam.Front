import { useState } from "react";
import "./style.scss";
// routes
import RoutePaths from "../../routes";
import { NavLink } from "react-router-dom";
// assets
import LogoImage from "../../assets/images/logo.png";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const { HOME, LIST, ABOUT_US, SUPPORT, HOW_IT_WORKS, GET_STARTED } =
    RoutePaths;

  const [showNavPanel, setShowNavPanel] = useState(false);

  return (
    <nav className="navbar">
      <picture className="logo-container">
        <img className="navbar__logo" src={LogoImage} alt="Logo Image" />
      </picture>
      <ul className={`navbar__list ${showNavPanel ? "navbar__panel" : ""}`}>
        <li className="navbar__item">
          <NavLink className="navbar__link" to={HOME}>
            Home
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink className="navbar__link" to={LIST}>
            List
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink className="navbar__link" to={ABOUT_US}>
            About Us
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink className="navbar__link" to={SUPPORT}>
            Support
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink className="navbar__link" to={HOW_IT_WORKS}>
            How It Works
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink className="navbar__link" to={GET_STARTED}>
            Get Started
          </NavLink>
        </li>
      </ul>
      <FontAwesomeIcon
        className="navbar__menu-icon"
        icon={faBars}
        onClick={() => {
          setShowNavPanel((prev) => !prev);
        }}
      />
    </nav>
  );
};

export default Navbar;
