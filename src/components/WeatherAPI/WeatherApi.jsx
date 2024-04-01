import axios from 'axios';
import { toast } from "react-toastify";
import FetchGeolocation from "../GetLocationData/FetchGeolocation";

// Create an Axios instance
const instance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  params: {
    appid: import.meta.env.VITE_OPEN_API_KEY,
    units: 'metric',
    cnt: 42,
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

export const fetchOtherCities = async (cities) => {
  try {
    const promises = cities.map(async (city) => {
      const response = await instance.get('/forecast', { params: { q: city } });
      return { city, weatherData: response.data };
    });
    const cityWeatherData = await Promise.all(promises);
    return cityWeatherData;
  } catch (error) {
    throw error;
  }
};