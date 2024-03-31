import React, { useEffect, useState } from "react";
import OtherCityCard from "./OtherCityCard/OtherCityCard";
import { fetchOtherCities } from "../WeatherAPI/WeatherApi";
import { ChevronRight } from "lucide-react";
import GetRegion from "../GetLocation/GetRegion/GetRegion";

const OtherCities = () => {
  const [citiesWeather, setCitiesWeather] = useState([]);
  const cities = GetRegion();
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (cities[1].length > 0) {
          const cityWeatherData = await fetchOtherCities(cities[1]);
          setCitiesWeather(cityWeatherData);
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
    if (cities[1].length > 0) {
      fetchData();
    }
  }, [cities]);

useEffect(() => {
  console.log("Cities Weather", citiesWeather);
}, [citiesWeather]);
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row justify-between mt-[20px]">
        <h2 className="text-[#feffff] cursor-pointer">Other large Cities</h2>
        <h3 className="text-[#9c9c9c] flex flex-row gap-x-1 cursor-pointer">
          <span>View More</span>
          <ChevronRight />
        </h3>
      </div>
      <div className=" mt-3 overflow-y-scroll h-[350px] srollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
        <OtherCityCard />
        <OtherCityCard />
        <OtherCityCard />
        <OtherCityCard />
        <OtherCityCard />
        <OtherCityCard />
        <OtherCityCard />
        <OtherCityCard />
        <OtherCityCard />
        <OtherCityCard />
        <OtherCityCard />
        <OtherCityCard />
        <OtherCityCard />
        <OtherCityCard />
        <OtherCityCard />
        <OtherCityCard />
        <OtherCityCard />
      </div>
    </div>
  );
};

export default OtherCities;
