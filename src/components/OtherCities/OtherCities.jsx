import React, { useContext, useEffect, useState } from "react";
import { fetchOtherCities } from "../WeatherAPI/WeatherApi";
import { ChevronRight } from "lucide-react";
import OtherCityCard from "./OtherCityCard/OtherCityCard";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { OtherCitiesContext } from "../../Context/OtherCitiesContext/OtherCitiesContext";

const OtherCities = () => {
  const [citiesWeather, setCitiesWeather] = useState([]);
  const { countries, capitals } = useContext(OtherCitiesContext);

  useEffect(() => {
    const fetchOtherCitiesWeather = async () => {
      try {
        const otherCitiesWeather = await fetchOtherCities(capitals);
        setCitiesWeather(otherCitiesWeather);
      } catch (err) {
        console.error("Error from OtherCities => Error Fetching Other Cities Weather",err);
      }
    };

    fetchOtherCitiesWeather();
  }, [capitals]);

  return (
    <div className="flex flex-col w-full mt-[30px] ">
      <div className="flex flex-row justify-between">
        <h2 className="text-[#feffff] cursor-pointer">Other large Cities</h2>
        <h3 className="text-[#9c9c9c] flex flex-row gap-x-1 cursor-pointer">
          <span>View More</span>
          <ChevronRight />
        </h3>
      </div>
      <div className="mt-3 lg:overflow-y-scroll lg:h-[365px] lg:scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 rounded-xl ">
        {citiesWeather.length > 0 ? (
          <>
            {citiesWeather.map((cityWeather, index) => (
              <OtherCityCard key={index} cityWeather={cityWeather} country={countries[index]} />
            ))}
          </>
        ) : (
          <>
            <SkeletonTheme
              baseColor="#202020"
              highlightColor="#444"
              enableAnimation={true}
            >
              <Skeleton
                className="lg:w-[95%] w-[100%] h-[110px] rounded-xl mb-[15px] mr-[10px]"
                count={5}
              />
            </SkeletonTheme>
          </>
        )}
      </div>
    </div>
  );
};

export default OtherCities;
