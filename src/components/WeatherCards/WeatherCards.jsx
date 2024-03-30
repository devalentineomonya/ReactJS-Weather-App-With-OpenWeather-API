import React, { useState, useEffect } from "react";
import { fetchWeatherData } from "../WeatherAPI/WeatherApi"; // Adjust the path as necessary
import WeatherFilter from "../WeatherFilter/WeatherFilter";
import WeatherCard from "./WeatherCard/WeatherCard";

const WeatherCards = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [activeCard, setActiveCard] = useState(null);

  const handleSetActiveCard = (index) => {
    setActiveCard(index);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchWeatherData();
        setWeatherData(data.list);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(weatherData);

  // key={index}
  // setActiveCard={() => handleSetActiveCard(index)}
  // active={index === activeCard}

  return (
    <div className="flex justify-center items-center flex-col ">
      <div className="w-[100%]">
        <WeatherFilter />
        <div className="flex flex-row gap-x-[10px] mt-5">
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
        </div>
      </div>
    </div>
  );
};

export default WeatherCards;
