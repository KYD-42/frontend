import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/1010500.json";

function DisplayWeather() {
  const [weatherData, setWeatherData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(API_URL);
        setWeatherData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message); 
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="weather-card">
          <h2>🌥️Weather Forecast☀️</h2>
          {weatherData && weatherData.data && weatherData.data.length > 0 && (
            <div className="forecast">
            <div className="day1">
              <p className="weather-card__day">Forecast Date: {weatherData.data[0].forecastDate}</p>
              <p className="weather-card__min-tempt">Min: {weatherData.data[0].tMin}</p>
              <p className="weather-card__max-tempt">Max: {weatherData.data[0].tMax}</p>
            </div>
            <div className="day2">
            <p>Forecast Date: {weatherData.data[1].forecastDate}</p>
              <p>Min: {weatherData.data[1].tMin}</p>
              <p>Max: {weatherData.data[1].tMax}</p>
              </div>
            <div className="day3">
            <p>Forecast Date: {weatherData.data[2].forecastDate}</p>
              <p>Min: {weatherData.data[2].tMin}</p>
              <p>Max: {weatherData.data[2].tMax}</p>
              </div>
            <div className="day4">
            <p>Forecast Date: {weatherData.data[3].forecastDate}</p>
              <p>Min: {weatherData.data[3].tMin}</p>
              <p>Max: {weatherData.data[3].tMax}</p>
              </div>
            <div className="day5">
            <p>Forecast Date: {weatherData.data[4].forecastDate}</p>
              <p>Min: {weatherData.data[4].tMin}</p>
              <p>Max: {weatherData.data[4].tMax}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default DisplayWeather;
