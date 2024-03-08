import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-bar">
      <NavLink to="/" className="navlink">
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