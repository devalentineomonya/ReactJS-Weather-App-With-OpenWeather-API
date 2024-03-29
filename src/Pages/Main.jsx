import React from "react";
import WeatherCards from "../components/WeatherCards/WeatherCards";
import WeatherMap from "../components/WeatherMap/WeatherMap";

const Main = () => {
  return (
    <>
      <div>
        <div className="flex flex-col w-[70%] mt-[50px]">
          <WeatherCards />
          <WeatherMap />
        </div>
        <div className="flex flex-col  w-[25%]"></div>
      </div>
    </>
  );
};

export default Main;
