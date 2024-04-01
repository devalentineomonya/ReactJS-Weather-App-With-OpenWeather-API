import {
  Bell,
  LayoutGrid,
  MapPin,
  Monitor,
  MoonIcon,
  Search,
  SearchIcon,
  Sun,
} from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import icon from "../../../DevalWeather.jpg";
import { LocationContext } from "../../Context/LocationContext/LocationContext";
import SearchInput from "./SearchInput/SearchInput";
import ModeToggler from "./ModeToggler/ModeToggler";
import { ThemeContext } from "../../Context/ThemeContext/ThemeContext";

const Navbar = () => {
  const { locationInfo, _ } = useContext(LocationContext);
  const { city, countryName } = locationInfo;
  const [search, setSearch] = useState(false);
  const {theme} = useContext(ThemeContext);

  return (
    <div className="flex justify-between md:h-9 h-14 w-full md:relative fixed top-0 left-0 right-0 z-30 dark:bg-[#111015] bg-[#feffff]">
      <div className="w-[70%] flex justify-between">
        <div className="flex sm:w-[200px] w-[150px] justify-between items-center ">
          <div className="w-[30px] h-[30px]  rounded-full bg-[#1e1e1e] flex justify-center items-center text-[#feffff] p-1  cursor-pointer">
            <LayoutGrid size={12} />
          </div>
          <div className="w-[30px] h-[30px]  rounded-full bg-[#1e1e1e] flex justify-center items-center text-[#feffff] p-1 cursor-pointer ">
            <Bell size={12} />
          </div>
          {city && countryName && (
            <div className="flex items-center justify-center  dark:text-[#feffff] text-[#1b1b1b]  cursor-pointer relative">
              <MapPin size={12} />
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fa1e18] opacity-30"></span>
              <p className="ml-1 whitespace-nowrap  cursor-pointer">
                {city},<span className="text-[#9c9c9c]">{countryName}</span>
              </p>
            </div>
          )}
        </div>
        <SearchInput search={search} />
      </div>
      <div className="w-[30%] flex justify-end items-center">
        <div
          className="text-[#feffff] mr-2 md:hidden z-30 flex justify-center items-center cursor-pointer bg-[#1b1b1d] h-[35px] w-[35px] flex-shrink-0 rounded-full"
          onClick={() => {
            setSearch((prev) => !prev);
          }}
        >
          <SearchIcon />
        </div>
        <div className="md:flex just items-center flex-shrink-0">
          <ModeToggler />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
