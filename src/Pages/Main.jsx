import React from "react";
import WeatherCards from "../components/WeatherCards/WeatherCards";
import WeatherMap from "../components/WeatherMap/WeatherMap";
import WeatherBarChart from "../components/WeatherBarChart/WeatherBarChart";
const Main = () => {

  return (
    <>
    <div className="flex flex-col lg:flex-row mt-[50px] gap-x-8 justify-center items-center">
      <div className="flex flex-col w-full lg:w-[70%]">
        <WeatherCards />
        <WeatherMap />
      </div>
      <div className="flex flex-col w-full lg:w-[30%]">
        <WeatherBarChart />
      </div>
    </div>
  </>
  
  );
};

export default Main;
