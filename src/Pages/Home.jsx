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
      <div className="places-buttons" style={{width: '500px' , height: '250px'}}>
            <Link to="/places/restaurants">
            <div className="registerUser">
            <img src="https://images.unsplash.com/photo-1568365994436-e2d079dc65cd?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style={{width:'100%'}} alt="Card image"/>
    <div className="registerUser__content">
      <p className="registerUser__title">Restaurants</p>
      <p className="registerUser__description"></p>
    </div>
  </div> 
            </Link>
            <Link to="/places/bars">
            <div className="registerUser">
  <img src="https://images.unsplash.com/photo-1469788700396-33787e74fac5?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style={{width:'100%'}} alt="Card image"/>
    <div className="registerUser__content">
      <p className="registerUser__title">Bars</p>
      <p className="registerUser__description"></p>
    </div>
  </div> 
            </Link>
            <Link to="/places/hotels-hostels">
 <div className="registerUser">
  <img src="https://images.unsplash.com/photo-1494256997604-768d1f608cac?q=80&w=3029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style={{width:'100%'}} alt="Card image"/>
    <div className="registerUser__content">
      <p className="registerUser__title">Hotels & Hostels</p>
      <p className="registerUser__description"></p>
    </div>
  </div> 
            </Link>




            </div>
        <div className="weather-display"><DisplayWeather/></div>
      <div>
        {!isLoggedIn && ( // Render buttons if user is not logged in
          <div className ="homeBTNreg" style={{marginBottom:'100px'}}>
            <Link to="/signup">
  <div className="registerUser">
  <img src="https://images.unsplash.com/photo-1415369629372-26f2fe60c467?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style={{width:'100%'}} alt="Card image"/>
    <div className="registerUser__content">
      <p className="registerUser__title">Register your account</p>
      <p className="registerUser__description">Unlock pet-friendly adventures, share your experiences, and connect with a community of fellow pet lovers. Register now for exclusive access!!</p>
    </div>
  </div>
</Link>
        {/*     <Link to="/business-signup">
              <button className="businessUser">Business sign up</button>
            </Link> */}
          </div>
        )}
      </div>
      <Footer />
    </section>
  );
  }

export default Home;