import React, { useState, useEffect } from "react";

const apiKey = 'ea76d6ff36ff18c4cfdb2cb46488379d'; // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Example: Fetching weather data for cities using GeoNames
const fetchWeatherData = async (cityName) => {
  try {
    const geoNamesUrl = `http://api.geonames.org/searchJSON?q=${cityName}&maxRows=1&username=demo`;
    const response = await fetch(geoNamesUrl);
    const data = await response.json();
    console.log(data);

    // if (data.geonames.length > 0) {
    //   const city = data.geonames[0];
    //   const { lat, lng } = city;
    //   const weatherUrl = `${baseUrl}?lat=${lat}&lon=${lng}&appid=${apiKey}`;
    //   const weatherResponse = await fetch(weatherUrl);
    //   const weatherData = await weatherResponse.json();
    //   return weatherData;
    // } else {
    //   throw new Error('City not found');
    // }
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
};

const cities = ['London', 'New York', 'Paris', 'Tokyo']; // Example list of cities

const WeatherApp = () => {
  useEffect(()=>{
    fetchWeatherData();
  },[])
  
  // const [weatherData, setWeatherData] = useState([]);

  // useEffect(() => {
  //   const fetchDataForCities = async () => {
  //     const promises = cities.map(city => fetchWeatherData(city));
  //     const results = await Promise.all(promises);
  //     setWeatherData(results.filter(data => data !== null));
  //   };

  //   fetchDataForCities();
  // }, []);

  return (
    <>
    <h1>True</h1>
    </>
    // <div>
    //   <h1>Weather App</h1>
    //   <div>
    //     {weatherData.map((cityData, index) => (
    //       <div key={index}>
    //         <h2>{cityData.name}</h2>
    //         <p>Temperature: {cityData.main.temp}°C</p>
    //         <p>Humidity: {cityData.main.humidity}%</p>
    //         <p>Weather: {cityData.weather[0].description}</p>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default WeatherApp;
