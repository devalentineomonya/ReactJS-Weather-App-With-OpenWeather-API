import axios from 'axios';

// Create a new Axios instance with base URL and API key
const instance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  params: {
    appid: 'ea76d6ff36ff18c4cfdb2cb46488379d',
    q: 'Nairobi, Kenya',
    units: 'metric', // Use metric units for temperature
    cnt: 7, // Fetch weather for 7 days
  },
});

// Function to fetch weather data for Nairobi, Kenya for 7 days
export const fetchWeatherData = async () => {
  try {
    const response = await instance.get('/forecast');
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error; // Throw error to handle it in the component
  }
};
