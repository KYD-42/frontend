import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const API_URL = "http://localhost:5005";

function PlacesDisplay() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchPlaces = () => {
      axios
        .get(`${API_URL}/api/places`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        })
        .then((response) => {
          setPlaces(response.data);
        })
        .catch((error) => {
          console.error("Error fetching places:", error);
        });
    };

    fetchPlaces();
  }, []);

  return (
    <section className="touSoAver">
      <div>
        <h1>PetFriendly Places</h1>
        {places.map((place) => (
          <div>
            <img src={place.logo} alt={place.name} />
            <h2>{place.name}</h2>
            <p>{place.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PlacesDisplay;