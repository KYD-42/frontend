/* import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const API_URL = "https://backend-g5k3.onrender.com";

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

export default PlacesDisplay; */

// O CÓDIGO ABAIXO É PARA TESTARMOS O FILTER



/* 
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "https://backend-g5k3.onrender.com";

function PlacesDisplay() {
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  useEffect(() => {
      axios.get(`${API_URL}/api/places`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
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
            console.error('Error details:', error.response); // Log Axios error response
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





import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const API_URL = "https://backend-g5k3.onrender.com";

function PlacesDisplay() {
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState(null);

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
          <button onClick={() => setFilterType("Restaurant")}>Restaurants</button>
          <button onClick={() => setFilterType("Bar")}>Bars</button>
          <button onClick={() => setFilterType("Hotel")}>Hotels</button>
          <button onClick={() => setFilterType("Hostel")}>Hostels</button>
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
        <Link to="/business-register-place">
              <button className="businessUser">Business sign up</button>
            </Link>
      </div>
    </section>
  );
}

export default PlacesDisplay;