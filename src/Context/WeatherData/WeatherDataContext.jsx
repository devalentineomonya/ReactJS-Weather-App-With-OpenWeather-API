import { createContext, useEffect, useState } from "react";
import { fetchWeatherData } from "../../components/WeatherAPI/WeatherApi";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState([]);
  const [fetching, setFetching] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchWeatherData();
        setWeatherData(data.list);
      } catch (error) {
        console.error("Error from WeatherDataContext => fetching weather data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <WeatherContext.Provider value={{ weatherData, setWeatherData,fetching, setFetching }}>
      {children}
    </WeatherContext.Provider>
  );
};