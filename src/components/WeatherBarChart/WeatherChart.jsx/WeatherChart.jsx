import React, { useContext, useEffect, useState } from "react";
import { LocationContext } from "../../../Context/LocationContext/LocationContext";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { WeatherContext } from "../../../Context/WeatherData/WeatherDataContext";

const WeatherChart = () => {
  const [weatherData, setWeatherData] = useState(null);
  const { locationInfo } = useContext(LocationContext);
  const { fetching } = useContext(WeatherContext);
  const [reFretching, setReFetching] = useState(false);
  useEffect(() => {
    fetchWeatherData();
  }, [locationInfo]);

  const fetchWeatherData = async () => {
    try {
      setReFetching(true);
      if (locationInfo.city) {
        const response = await fetch(
          "https://api.weatherapi.com/v1/current.json?q=" +
            locationInfo.city +
            "&key=0bed83066d494196837153154240104"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }
        const data = await response.json();
        setWeatherData(data);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      setTimeout(() => {
        setReFetching(false);
      }, 2000);
    }
  };

  return (
    <div className="bg-[#1b1b1d] rounded-xl overflow-hidden shadow-lg h-full cursor-pointer hover:scale-95 transition-all ease-in-out duration-300">
      {weatherData && !fetching ? (
        <>
          <div className="grid grid-cols-3">
            <div className="px-6 py-4 grid col-span-2">
              <div className="font-bold   font-Chakra text-xl mb-2 text-[#feffff]">
                {weatherData.location.name}, {locationInfo.countryName}
              </div>
              <div className="text-[#feffff] text-base">
                Temperature:{" "}
                <span className="text-gray-400">
                  {weatherData.current.temp_c}°C
                </span>{" "}
                /{" "}
                <span className="text-gray-400">
                  {weatherData.current.temp_f}°F
                </span>
              </div>
              <div className="text-[#feffff] text-base">
                Local Time:{" "}
                <span className="text-gray-400">
                  {weatherData.location.localtime.split(" ")[1]}
                </span>
              </div>
              <div className="text-[#feffff] text-base">
                Condition:{" "}
                <span className="text-gray-400">
                  {weatherData.current.condition.text}
                </span>
              </div>
              <div className="text-[#feffff] text-base">
                Wind:{" "}
                <span className="text-gray-400">
                  {weatherData.current.wind_kph} kph
                </span>
                ,{" "}
                <span className="text-gray-400">
                  {weatherData.current.wind_dir}
                </span>
              </div>
              <div className="text-[#feffff] text-base">
                Humidity:{" "}
                <span className="text-gray-400">
                  {weatherData.current.humidity}%
                </span>
              </div>
            </div>
            <div className="px-6 py-4 flex flex-col justify-between items-center">
              <img
                src={`https:${weatherData.current.condition.icon}`}
                alt="Weather Icon"
                className="w-12 h-12 inline-block"
              />
              <button
                className={`hover:scale-105 transition-all ease-in-out duration-300 flex justify-center items-center bg-[#bbd7ec] text-[#1b1b1b] font-bold py-2 px-4 rounded mt-4 ${
                  reFretching
                    ? "cursor-not-allowed  disabled w-[85px] bg-gray-300"
                    : "cursor-pointer"
                }`}
                onClick={() => {
                  fetchWeatherData();
                }}
              >
                {reFretching ? (
                  <div className="h-[24px] w-[24px] border border-black rounded-full bg-transparent border-t-0 border-l-0 animate-spin">
                    {" "}
                  </div>
                ) : (
                  "Refresh"
                )}
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <SkeletonTheme
            baseColor="#202020"
            highlightColor="#444"
            enableAnimation={true}
          >
            <Skeleton className="w-full h-[200px] rounded-xl" />
          </SkeletonTheme>
        </>
      )}
    </div>
  );
};

export default WeatherChart;
