import React from "react";
import OtherCities from "../OtherCities/OtherCities";
import WeatherChart from "./WeatherChart.jsx/WeatherChart";

const WeatherBarChart = () => {
  return (
    <div className="flex flex-col">
      <div>
        <WeatherChart />
      </div>
      <div>
        <OtherCities />
      </div>
    </div>
  );
};

export default WeatherBarChart;
