import { CloudFog } from "lucide-react";
import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo/WeatherInfo";
import WeatherImage from "./WeatherImage/WeatherImage";

const WeatherCard = ({ setActiveCard, active, weatherData }) => {
  const handleClick = () => {
    setActiveCard();
  };

  if (weatherData) {
    console.log(weatherData);    
    const { main, weather, clouds, rain, sys, wind, dt_txt } = weatherData;
    const date = new Date(dt_txt);

    return (
      <div
        className={` h-[200px]  flex justify-center flex-col items-center rounded-xl overflow-hidden cursor-pointer relative transition-all duration-300 ease-in-out ${
          active ? " w-[200px]  bg-[#bbd7ec]  " : "w-[100px] bg-[#1b1b1d]"
        }`}
        onClick={handleClick}
      >
        <div className="flex w-full justify-center items-center  absolute px-1 cursor-pointer top-0 ">
          <div
            className={`flex items-center h-[35px] ${
              active
                ? " bg-[#aecadf] justify-between w-full"
                : "bg-[#1b1b1d] justify-center w-[70%] border-b border-black"
            }`}
          >
            <span
              className={`font-Titillium font-semibold text-[14px] ${
                active ? "" : "text-[20px] text-[#feffff]"
              }`}
            >
              {active
                ? date.toLocaleDateString("en-US", { weekday: "long" })
                : date
                    .toLocaleDateString("en-US", { weekday: "long" })
                    .slice(0, 3)}
            </span>
            <span
              className={`font-Chakra font-semibold text-[14px] ${
                active ? "" : "hidden"
              }`}
            >
              {date.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>
        </div>
        <div
          className={`py-[5px]  px-[5px] h-full mt-[40px] ${
            active ? "w-full" : "flex justify-between h-full"
          }`}
        >
          <div
            className={`flex items-center justify-between  ${
              active ? "" : "flex-col-reverse gap-y-8 "
            }`}
          >
            <div>
              <h1
                className={`font-Chakra font-bold text-[40px] ${
                  active ? "" : "text-[#feffff]"
                }`}
              >
                {main.temp.toFixed()}&deg;
              </h1>
            </div>
            <div className="text-white">
              <WeatherImage  main={weather[0].main}/>
            </div>
          </div>
          <div
            className={`grid grid-cols-2 justify-between ${
              active ? "" : "hidden"
            }`}
          >
            <WeatherInfo label="Humidity" value={`${main.humidity}%`} />
            <WeatherInfo label="Pressure" value={`${main.pressure} hPa`} />
            <WeatherInfo label="Rainfall" value={`${rain ? rain["3h"] : 0} mm`} />
            <WeatherInfo label="Clouds" value={`${clouds.all}%`} />
            <WeatherInfo label="Wind Speed" value={`${wind.speed} m/s`} />
            <WeatherInfo label="Sea Level" value={`${main.sea_level} hPa`} />
          </div>
        </div>
      </div>
    );
  }
};
export default WeatherCard;
