import { NavLink } from "react-router-dom";

function NavBarBusiness() {
  return (
    <div className="nav-bar">
      <NavLink to="/dashboard" className="navlink">
        HomePage
      </NavLink>
      <NavLink to="/signup" className="signUP"><button>signUp</button></NavLink>
      <NavLink to="/about" className="navlink">
        About
      </NavLink>
    </div>
  );
}

export default NavBar;