import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import TNT_white from "../../src/assets/TNT_white.svg";

function NavBar() {
  const { isLoggedIn, logOutUser } = useContext(AuthContext);

  return (
    <div className="nav-bar">
      <NavLink to="/">
        <img
          src={TNT_white}
          alt="Tails-&-Tables-logo-white"
          style={{ width: "100px" }}
        />
      </NavLink>
      {!isLoggedIn && ( // Display Log In button if not logged in
        <NavLink to="/login" className="logIn">
          <button>Log In</button>
        </NavLink>
      )}
      {isLoggedIn && ( // Display Log Out button if logged in
        <button onClick={logOutUser}>Log Out</button>
      )}
    </div>
  );
}

export default NavBar;