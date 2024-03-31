import axios from 'axios';
import { toast } from "react-toastify";
import FetchGeolocation from "../GetLocationData/FetchGeolocation";

// Create an Axios instance
const instance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  params: {
    appid: 'ea76d6ff36ff18c4cfdb2cb46488379d',
    units: 'metric',
    cnt: 7,
  },
});

export const fetchWeatherData = async (city = '', country = '') => {
  try {
    if (!city || !country) {
      const geolocationData = await FetchGeolocation();
      city = geolocationData.city;
      country = geolocationData.country;
    }

    const params = {
      q: `${city},${country}`
    };
    const response = await instance.get('/forecast', { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    const errorCode = error.message;
    toast.error('There was a ' + errorCode.toLowerCase() + '. Please try again later.', { theme: "colored" });
    throw error;
  }
};

export const fetchOtherCities = async () => {
  try {
    const cities = ["London", "Paris", "New York", "Tokyo", "Moscow", "Sydney", "Berlin", "Rome", "Beijing", "Dubai", "Mumbai", "Rio de Janeiro", "Toronto", "Los Angeles", "Cairo"];
    const promises = cities.map(async (city) => {
      const response = await instance.get('/forecast', { params: { q: city } });
      return response.data;
    });
    const weatherData = await Promise.all(promises);
    return weatherData;
  } catch (error) {
    throw error;
  }
};

