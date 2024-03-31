import React, { useState, useContext } from "react";
import WeatherFilter from "../WeatherFilter/WeatherFilter";
import WeatherCard from "./WeatherCard/WeatherCard";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-toastify/dist/ReactToastify.css';
import { WeatherContext } from "../../Context/WeatherData/WeatherDataContext";

const WeatherCards = () => {
  const [activeCard, setActiveCard] = useState(0);
  const {weatherData,fetching} = useContext(WeatherContext);
  console.log(weatherData);

  const handleSetActiveCard = (index) => {
    setActiveCard(index);
  };

  return (
    <div className="flex justify-center items-center flex-col ">
      <div className="w-[100%]">
        <WeatherFilter />
        <div className="flex flex-row flex-nowrap gap-x-[14px] mt-5">
          {weatherData.length <=0 || fetching ? (
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

