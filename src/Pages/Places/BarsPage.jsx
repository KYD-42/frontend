import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const API_URL = "http://localhost:5005";

function BarsPage() {
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState("Bar");
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

  useEffect(() => {
    if (filterType) {
      const filtered = places.filter(place => place.type.includes(filterType));
      setFilteredPlaces(filtered);
    } else {
      setFilteredPlaces(places);
    }
  }, [filterType, places]);

  return (
    <section>
      <div>
        <h1 className="touSoAver">PetFriendly Places</h1>
        <div>
          <button onClick={() => setFilterType(null)}>All</button>
          <button onClick={() => setFilterType("Bar")}>Bars</button>
        </div>
        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        <div>
          {filteredPlaces.map((place) => (
            <NavLink key={place._id} to={`/places/${place._id}`}>
              <div className="places">
                <img src={place.logo} alt={place.name} />
                <h2>{place.name}</h2>
                <p>{place.description}</p>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BarsPage;
