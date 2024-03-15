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
        <h1 style={{ textAlign: 'left', fontSize: '100px' }}>Where your buddy is welcome!
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
  <div className="registerUser">
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path></svg>
    <div className="registerUser__content">
      <p className="registerUser__title">Card Title</p>
      <p className="registerUser__description">Unlock pet-friendly adventures, share your experiences, and connect with a community of fellow pet lovers. Register now for exclusive access!!</p>
    </div>
  </div>
</Link>
        {/*     <Link to="/business-signup">
              <button className="businessUser">Business sign up</button>
            </Link> */}
          </>
        )}
      </div>
      <Footer />
    </section>
  );
  }

export default Home;