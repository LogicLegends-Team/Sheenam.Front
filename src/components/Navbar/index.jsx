import RoutePaths from "../../routes";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { HOME, LIST, ABOUT_US, SUPPORT, HOW_IT_WORKS } = RoutePaths;
  return (
    <nav>
      <li>
        <NavLink to={HOME}>Home</NavLink>
      </li>
      <li>
        <NavLink to={LIST}>List</NavLink>
      </li>
      <li>
        <NavLink to={ABOUT_US}>About Us</NavLink>
      </li>
      <li>
        <NavLink to={SUPPORT}>Support</NavLink>
      </li>
      <li>
        <NavLink to={HOW_IT_WORKS}>How It Works</NavLink>
      </li>
    </nav>
  );
};

export default Navbar;
