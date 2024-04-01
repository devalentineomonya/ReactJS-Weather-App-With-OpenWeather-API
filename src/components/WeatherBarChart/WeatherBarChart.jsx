import React from "react";
import OtherCities from "../OtherCities/OtherCities";
import WeatherChart from "./WeatherChart.jsx/WeatherChart";

const WeatherBarChart = () => {
  return (
    <div className="flex flex-col">
      <div className=" mt-[56px]">
        <WeatherChart />
      </div>
      <div className=" mt-[28px]">
        <OtherCities />
      </div>
    </div>
  );
};

export default WeatherBarChart;
