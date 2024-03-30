import axios from 'axios';

const getLocation = async () => {
  try {
    const response = await axios.get('https://ipapi.co/json/');
    const { ip, city, country_name } = response.data;
    return { ip, city, countryName: country_name };
  } catch (error) {
    console.error('Error fetching IP address:', error);
    throw error; // Throw error to handle it in the component
  }
};

export default getLocation;
