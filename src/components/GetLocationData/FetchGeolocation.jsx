import axios from "axios";
const FetchGeolocation = async () => {
    try {
      const response = await axios.get('https://ipapi.co/json/');
      return response.data;
    } catch (error) {
      console.error('Error fetching geolocation:', error);
      throw error;
    }
  };
export default FetchGeolocation;