import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <p style={{color: "white"}}>® Tails & Tables. All rights reserved.</p>
      <NavLink to="/about">
      <button className="footer-button">About</button>
      </NavLink>
    </footer>
  );
}

export default Footer;