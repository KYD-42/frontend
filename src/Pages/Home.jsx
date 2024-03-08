import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import React from 'react'
import SERVER from '../../data/server'

const server = SERVER


function Home() {
  return (
    <section>
      <div className="hero">
        <img className="logo-main" src="" alt="tails-&-tables-logo" />
      </div>
      <div className="hero-text">
        <h1>Welcome to Tails & Tables</h1>
      </div>
      <div>
        <Link to="/about">About</Link>
      </div>
      <Footer />
    </section>
  );
}

export default Home;