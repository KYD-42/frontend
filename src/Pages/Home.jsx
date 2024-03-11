import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import Footer from "../Components/Footer";
import React from "react";
import SERVER from "../../data/server";

const server = SERVER;

function Home() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <section>
      <div className="hero">
        <img className="logo-main" src="" alt="tails-&-tables-logo" />
      </div>
      <div className="hero-text">
        <h1>Welcome to Tails & Tables</h1>
      </div>
      <div>
        {!isLoggedIn && ( // Render buttons if user is not logged in
          <>
            <Link to="/signup" className="signUP">
              <button>User sign up</button>
            </Link>
            <Link to="/business-signup" className="signUP">
              <button>Business sign up</button>
            </Link>
          </>
        )}
      </div>
      <Footer />
    </section>
  );
}

export default Home;