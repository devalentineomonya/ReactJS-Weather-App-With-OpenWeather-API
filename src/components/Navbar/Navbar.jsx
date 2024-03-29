import { Bell, LayoutGrid, MapPin, MoonIcon, Search, Sun } from "lucide-react";
import React from "react";
import icon from "../../../DevalWeather.jpg";

const Navbar = () => {
  return (
    <div className="flex justify-between h-9 w-full">
      <div className="flex w-[200px] md:w-[250px] justify-between items-center ">
        <div className="w-[30px] h-[30px]  rounded-full bg-[#1e1e1e] flex justify-center items-center text-[#feffff] p-1">
          <LayoutGrid size={15} />
        </div>
        <div className="w-[30px] h-[30px]  rounded-full bg-[#1e1e1e] flex justify-center items-center text-[#feffff] p-1">
          <Bell size={15} />
        </div>
        <div className="flex items-center justify-center  text-[#feffff]">
          <MapPin size={15} />
          <span className="ml-1">Nairobi Kenya</span>
        </div>
      </div>
      <div className="flex items-center justify-start w-1/2 bg-[#1e1e1e] h-9 rounded-full px-4 py-2 text-[#feffff] ">
        <Search />
        <input
          type="text"
          placeholder="Search city..."
          className="w-full bg-transparent text-[#feffff] ml-3 border-none outline-none"
        />
      </div>
      <div className="flex just items-center">
        <div className="bg-[#1e1e1e] rounded-full flex justify-between items-center h-9 w-20 text-[#feffff] p-[2px] relative">
          <Sun className="z-10" />
          <MoonIcon className="z-10"/>

          <div className="bg-[#bbd7ec] h-9 w-9  rounded-full absolute right-0 z-0"></div>
        </div>
        <img src={icon} alt="" className="w-9 h-9 rounded-full ml-2" />
      </div>
    </div>
  );
};

export default Navbar;
