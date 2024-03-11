import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <p>® Tails & Tables. All rights reserved.</p>
      <NavLink to="/about" className="navlink">
        About
      </NavLink>
    </footer>
  );
}

export default Footer;