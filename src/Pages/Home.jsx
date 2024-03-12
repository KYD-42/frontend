import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import Footer from "../Components/Footer";
import React from "react";
import logo from "../assets/TNT_white.svg";
import DisplayWeather from "../Components/DisplayWeather";

const API_URL = "http://localhost:5005/";
const WEATHER = "https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/1010500.json"


function Home() {
  const { isLoggedIn } = useContext(AuthContext);
    
  

  return (
    <section>
      <div className="hero">
        <h1 style={{ textAlign: 'left', fontSize: '100px' }}>Where your Buddy is welcome!
        <br/>Come and join us</h1>

      </div>
      <div className="hero-text">
      </div>
        <div className="weather-display"><DisplayWeather/></div>
      <div>
        {!isLoggedIn && ( // Render buttons if user is not logged in
          <>
            <Link to="/signup" className="signUP">
              <button className="registerUser">User sign up</button>
            </Link>
            <Link to="/business-signup" className="signUP">
              <button className="businessUser">Business sign up</button>
            </Link>
          </>
        )}
      </div>
      <Footer />
    </section>
  );
  }

export default Home;