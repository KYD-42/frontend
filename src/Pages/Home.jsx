import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import Footer from "../Components/Footer";
import React from "react";
import logo from "../assets/TNT_white.svg";
import DisplayWeather from "../Components/DisplayWeather";

const API_URL = "https://backend-g5k3.onrender.com/";
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
      <div className="places-buttons">
            <Link to="/places/restaurants">
              <button className="placesRest">Restaurants</button>
            </Link>
            <Link to="/places/bars">
              <button className="placesBars">Bars</button>
            </Link>
            <Link to="/places/hotels-hostels">
              <button className="placesHotl">Hotels & Hostels</button>
            </Link>
            </div>
        <div className="weather-display"><DisplayWeather/></div>
      <div>
        {!isLoggedIn && ( // Render buttons if user is not logged in
          <>
            <Link to="/signup">
              <button className="registerUser">User sign up</button>
            </Link>
            <Link to="/business-signup">
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