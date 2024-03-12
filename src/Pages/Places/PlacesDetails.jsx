import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const API_URL = "http://localhost:5005";

function PlaceDetails() {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlaceDetail = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/places/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });
        setPlace(response.data);
        setLoading(false); 
      } catch (error) {
        setError("Error fetching place.");
        setLoading(false); 
      }
    };

    fetchPlaceDetail();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div>{error}</div>; 
  }


  return (
    <div>
      <h1>{place.name}</h1>
      <div>
        <section>
          <h3>Type: {Array.isArray(place.type) ? place.type.join(", ") : place.type}</h3>
          <h3>Address: {place.address}</h3>
          <h3>Rating: {place.rating}</h3>
          <h3>Price Level: {place.priceLevel}</h3>
          <h3>Phone: {place.phone}</h3>
          <h3>Email: {place.email}</h3>
          <h3>Comments: {place.comments}</h3>
          <Link to="/places">
            <button>
              <span>
                <span>Back</span>
              </span>
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
}

export default PlaceDetails;