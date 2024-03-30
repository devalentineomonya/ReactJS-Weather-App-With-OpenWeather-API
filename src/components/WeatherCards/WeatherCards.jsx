import React, { useState, useEffect } from "react";
import { fetchWeatherData } from "../WeatherAPI/WeatherApi"; // Adjust the path as necessary
import WeatherFilter from "../WeatherFilter/WeatherFilter";
import WeatherCard from "./WeatherCard/WeatherCard";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WeatherCards = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [activeCard, setActiveCard] = useState(0);

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
  return (
    <div className="flex justify-center items-center flex-col ">
      <div className="w-[100%]">
        <WeatherFilter />
        <div className="flex flex-row flex-nowrap gap-x-[14px] mt-5">
          {weatherData.length<=0 ? (
            <>
              <SkeletonTheme
                baseColor="#202020"
                highlightColor="#444"
                enableAnimation={true}
              >
                <Skeleton className="w-[200px] h-[200px] rounded-xl" />
                <Skeleton className="w-[100px] h-[200px] rounded-xl" />
                <Skeleton className="w-[100px] h-[200px] rounded-xl" />
                <Skeleton className="w-[100px] h-[200px] rounded-xl" />
                <Skeleton className="w-[100px] h-[200px] rounded-xl" />
                <Skeleton className="w-[100px] h-[200px] rounded-xl" />
                <Skeleton className="w-[100px] h-[200px] rounded-xl" />
              </SkeletonTheme>
            </>
          ) : (
            <>
              {weatherData.map((dayWeatherData, index) => (
                <WeatherCard
                  key={index}
                  weatherData={dayWeatherData}
                  setActiveCard={() => handleSetActiveCard(index)}
                  active={index === activeCard}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeatherCards;
