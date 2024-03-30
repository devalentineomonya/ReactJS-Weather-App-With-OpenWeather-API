import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Function to fetch user's geolocation
const fetchGeolocation = async () => {
  try {
    const response = await axios.get('https://ipapi.co/json/');
    return response.data;
  } catch (error) {
    console.error('Error fetching geolocation:', error);
    throw error;
  }
};


const instance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  params: {
    appid: 'ea76d6ff36ff18c4cfdb2cb46488379d',
    units: 'metric', 
    cnt: 7, 
  },
});


export const fetchWeatherData = async () => {
  try {
    const geolocationData = await fetchGeolocation();
    const { city, country } = geolocationData;
    instance.defaults.params.q = `${city},${country}`;
    const response = await instance.get('/forecast');
    return response.data;
  } catch (error) {

    console.error('Error fetching weather data:', error);
    const errorCode = error.code;
    toast.error('There was  ' + errorCode.toLowerCase() + '. Please try again later.', { theme: "colored" });
    throw error;
  }
};
