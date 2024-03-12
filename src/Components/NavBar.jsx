import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import TNT_white from "../../src/assets/TNT_white.svg";

function NavBar() {
  const { isLoggedIn, logOutUser, user } = useContext(AuthContext);

  return (
    <div className="nav-bar">
      <NavLink to="/">
        <img
          src={TNT_white}
          alt="Tails-&-Tables-logo-white"
          style={{ width: "100px" }}
        />
      </NavLink>
      <div className="nav-buttons">
        {!isLoggedIn && (
          <NavLink to="/login" className="logIn">
            <button className="nav-button">Log In</button>
          </NavLink>
        )}
        {isLoggedIn && (
          <>
            <NavLink to={`/profile/${user._id}`}>
              <button className="nav-button">Profile</button>
            </NavLink>
            <button className="nav-button" onClick={logOutUser}>Log Out</button>
          </>
        )}
      </div>
    </div>
  );
}

export default NavBar;