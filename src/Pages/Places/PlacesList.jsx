import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

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
          <NavLink key={place._id} to={`/places/${place._id}`} className="place-link">
            <div className="places">
              <img src={place.logo} alt={place.name} /> 
              <h2>{place.name}</h2>
              <p>{place.description}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </section>
 );
}

export default PlacesDisplay;

// O CÓDIGO ABAIXO É PARA TESTARMOS O FILTER


/* import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const API_URL = "http://localhost:5005";

function PlacesDisplay() {
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  useEffect(() => {
      axios.get(`${API}/search`)
          .then(response => {
              const filteredData = response.data.data.filter(place => 
                  place.type.includes('Bar') ||
                  place.type.includes('Restaurant') ||
                  place.type.includes('Hotel') ||
                  place.type.includes('Hostel')
              );
              setPlaces(filteredData);
              setFilteredPlaces(filteredData);
          })
          .catch(error => {
              console.error('Error fetching places:', error);
          });
  }, []);

  const handleFilterClick = (type) => {
    const filteredData = places.filter(place => place.type.includes(type));
    setFilteredPlaces(filteredData);
};


return (
  <div>
      <button onClick={() => handleFilterClick('Bar')}>Filter Bars</button>
      <button onClick={() => handleFilterClick('Restaurant')}>Filter Restaurants</button>
      <button onClick={() => handleFilterClick('Hotel')}>Filter Hotels</button>
      <button onClick={() => handleFilterClick('Hostel')}>Filter Hostels</button>

      {filteredPlaces.map((place, index) => (
          <div key={index}>

              <p>{place.name}</p>

          </div>
      ))}
  </div>
);
}

export default PlacesDisplay;
 */