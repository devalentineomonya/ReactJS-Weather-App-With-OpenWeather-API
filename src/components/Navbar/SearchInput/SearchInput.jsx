import React, { useContext, useState } from "react";
import { fetchWeatherData } from "../../WeatherAPI/WeatherApi";
import { toast } from "react-toastify";
import { WeatherContext } from "../../../Context/WeatherData/WeatherDataContext";
import { LocationContext } from "../../../Context/LocationContext/LocationContext";

const SearchInput = () => {
  const [inputValue, setInputValue] = useState("");
  const { setWeatherData, setFetching } = useContext(WeatherContext);
  const { setLocationInfo } = useContext(LocationContext);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async () => {
    const [city, country] = inputValue.split(",").map((item) => item.trim());

    if (!city || !country) {
      toast.error("Please enter both city name and country name.", {
        theme: "colored",
      });
      return;
    }

    setFetching(true);

    try {
      toast.success(
        `Weather data for ${city}, ${country} received successfully.`,
        { theme: "colored" }
      );
      const weatherData = await fetchWeatherData(city, country);
      setWeatherData(weatherData.list);
      setLocationInfo((prevLocationInfo) => ({
        ...prevLocationInfo,
        city: city,
        countryName: country,
      }));
      toast.success(
        `Weather data for ${city}, ${country} Fetched successfully.`,
        { theme: "colored" }
      );
    } catch (error) {
      toast.error(
        "Error occurred while fetching weather data. Please try again later.",
        { theme: "colored" }
      );
    } finally {
      setFetching(false);
    }
  };

  return (
    <div className="flex items-center justify-start w-1/2 bg-[#1e1e1e] h-9 rounded-full px-4 py-2 text-[#feffff] ">
      <input
        type="text"
        placeholder="Search city..."
        value={inputValue}
        onChange={handleChange}
        className="w-full bg-transparent text-[#feffff] ml-3 border-none outline-none font-semibold text-[18px]"
      />
      <button
        className="outline-none border-none bg-transparent col-[#feffff]"
        onClick={handleSubmit}
      >
        Search
      </button>
    </div>
  );
};

export default SearchInput;
