import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const API_URL = "http://localhost:5005";

function PlacesDisplay() {
  const [places, setPlaces] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/places`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });
        setPlaces(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching places.");
        setLoading(false);
      }
    };

    fetchPlaces();
  }, []);

  return (
    <section>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <div>
        <h1>PetFriendly Places</h1>
        {places.map((place) => (
          <div className="places" key={place.id}>
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
