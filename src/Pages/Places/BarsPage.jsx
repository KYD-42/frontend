import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink , Link } from "react-router-dom";

const API_URL = "https://backend-g5k3.onrender.com";

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
          <Link to="/places"><button className="nav-button">All</button></Link>
        </div>
        {loading ? <div>Loading...</div> : error ? <div>{error}</div> : (
          <div>
            {filteredPlaces.length > 0 ? filteredPlaces.map((place) => (
              <NavLink key={place._id} to={`/places/${place._id}`}>
                <div className="places" style={{ gap: '30px' }}>
              <img src={place.logo} style={{ width: '780px', height: '360px', borderRadius: '20px' }} alt={place.name} />
                <br/>
                <button className="nav-button">{place.name}</button>
                <p>{place.description}</p>
                </div>
              </NavLink>
            )) : (
              <h2>Sorry but we don't have any partner yet 🐾 </h2>
            )}
          </div>
        )}
      </div>
    </section>
  );

}

export default BarsPage;
