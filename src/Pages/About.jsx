import React from "react";
import SERVER from "../../data/server";

const server = SERVER;

function About() {
  return (
    <div className="about-text">
      <h1>Welcome to Tails and Tables</h1>
      <p>
        Are you tired of scouring the web for pet-friendly spots where you and
        your furry friend can hang out? Look no further! With Tails and Tables,
        discovering the perfect restaurant, bar, hotel, or hostel that welcomes
        your beloved pet is now easier than ever.
      </p>

      <p>
        Sign up today and join our ever-growing community of pet lovers! By
        registering, you unlock a world of possibilities. Not only can you
        explore and review pet-friendly venues through comments and ratings, but
        you also gain access to exclusive features like checking the weather
        forecast to plan the perfect outing with your pet.
      </p>
      <p>
        But wait, there's more! Are you a business owner looking to attract
        pet-loving customers? Tails and Tables offers a seamless registration
        process for businesses like yours. Showcase your establishment to our
        community of passionate pet owners and watch your clientele grow!
      </p>
      <p>
        Join Tails and Tables today and embark on unforgettable adventures with
        your furry companion. Discover new places, meet fellow pet enthusiasts,
        and create lasting memories—all with the convenience of a single app.
        Let's make every outing with your pet a tail-wagging success!
      </p>
    </div>
  );
}

export default About;