import React, { useEffect, useState } from "react";

const WeatherFilter = () => {
  const [weatherType, setWeatherType] = useState("focus");
  function changeWeatherType(weatherType) {
    setWeatherType(weatherType);
  }
  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-start gap-2 items-center text-[#feffff]">
        <div className="cursor-pointer">
          <span className="text-[#9c9c9c]">Today</span>
        </div>
        <div className="cursor-pointer">
          <span className="text-[#9c9c9c]">Tomorrow</span>
        </div>
        <div className="cursor-pointer">
          <span className="text-[#feffff]">Next 7 days</span>
        </div>
      </div>
      <div className="h-9 w-[150px] relative rounded-full bg-[#1e1e1e]  flex justify-between items-center px-[10px]">
        <div className="z-10 flex justify-center items-center cursor-pointer">
          <span
            className={`whitespace-nowrap text-[14px] ${
              weatherType === "focus" ? " text-[#111015]" : "text-[#9c9c9c]"
            }`}
            onClick={() => setWeatherType("focus")}
          >
            Focus
          </span>
        </div>
        <div className="z-10 flex justify-center items-center cursor-pointer">
          <span
            className={`whitespace-nowrap  text-[14px] ${
              weatherType === "quality" ? " text-[#111015]" : "text-[#9c9c9c]"
            }`}
            onClick={() => setWeatherType("quality")}
          >
            Air Quality
          </span>
        </div>
        <div
          className={`absolute w-[46%] h-full bg-[#bcd8ed] rounded-full transition-all duration-300 ease-in-out ${
            weatherType === "focus" ? "left-0" : "right-0 w-[54%]"
          } `}
        ></div>
      </div>
    </div>
  );
};

export default WeatherFilter;
