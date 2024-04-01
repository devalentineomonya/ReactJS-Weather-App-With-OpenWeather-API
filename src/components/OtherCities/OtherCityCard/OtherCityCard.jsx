import React from "react";
import WeatherImage from "../../WeatherCards/WeatherCard/WeatherImage/WeatherImage";

const OtherCityCard = ({ cityWeather, country }) => {

  return (
    <div className="w-[95%] h-[105px] bg-[#1b1b1d] rounded-xl overflow-hidden mb-[17px] mr-[10px] grid grid-cols-2 pr-2">
      <div className="flex justify-start flex-col gap-y-1 text-[#feffff]">
        <div className="p-3">
          <p>{country}</p> {/* Display weather description */}
          <h4>{cityWeather.city}</h4>
          <p>{cityWeather.weatherData.list[0].weather[0].description}</p>
        </div>
      </div>
      <div className="flex justify-center flex-col items-end text-[#feffff]">
        <div className="flex justify-center flex-col items-center">
          <WeatherImage
            main={cityWeather.weatherData.list[0].weather[0].main}
            className="w-[40px] h-[40px]"
          />
          <h2 className="font-Chakra text-[40px]">
            {cityWeather.weatherData.list[0].main.temp.toFixed()}&deg;
          </h2>
        </div>
      </div>
    </div>
  );
};

export default OtherCityCard;
