import React from "react";
import OtherCities from "../OtherCities/OtherCities";
import WeatherChart from "./WeatherChart.jsx/WeatherChart";

const WeatherBarChart = () => {
  return (
    <div className="flex flex-col">
      <div className=" mt-[50px]  mb-[10px] h-[200px]">
        <WeatherChart />
      </div>
      <div className=" pt-[10px]  ">
        <OtherCities />
      </div>
    </div>
  );
};

export default WeatherBarChart;
