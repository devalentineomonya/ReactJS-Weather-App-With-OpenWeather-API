import { Bell, LayoutGrid, MapPin, Monitor, MoonIcon, Search, Sun } from "lucide-react";
import React from "react";
import icon from "../../../DevalWeather.jpg";

const Navbar = () => {
  return (
    <div className="flex justify-between h-9 w-full">
      <div className="flex w-[200px] justify-between items-center ">
        <div className="w-[30px] h-[30px]  rounded-full bg-[#1e1e1e] flex justify-center items-center text-[#feffff] p-1  cursor-pointer">
          <LayoutGrid size={12} />
        </div>
        <div className="w-[30px] h-[30px]  rounded-full bg-[#1e1e1e] flex justify-center items-center text-[#feffff] p-1 cursor-pointer ">
          <Bell size={12} />
        </div>
        <div className="flex items-center justify-center  text-[#feffff]  cursor-pointer relative">
          <MapPin size={12} />
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fa1e18] opacity-10"></span>
          <span className="ml-1 whitespace-nowrap  cursor-pointer">Nairobi,<span className="text-[#9c9c9c]">Kenya</span></span>
       
        </div>
      </div>
      <div className="flex items-center justify-start w-1/2 bg-[#1e1e1e] h-9 rounded-full px-4 py-2 text-[#feffff] ">
        <Search />
        <input
          type="text"
          placeholder="Search city..."
          className="w-full bg-transparent text-[#feffff] ml-3 border-none outline-none font-semibold text-[18px]"
        />
      </div>
      <div className="flex just items-center">
        <div className="bg-[#1e1e1e] rounded-full flex justify-between items-center h-9 w-[100px] text-[#feffff] px-[5px] relative py-[10px]">
          <Sun size={18} className="z-10" />
          <MoonIcon size={18} className="z-10"/>
          <Monitor size={18} className="z-10"/>
          <div className="bg-[#bbd7ec] h-9 w-9  rounded-full absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-0"></div>
        </div>
        <img src={icon} alt="" className="w-9 h-9 rounded-full ml-2" />
      </div>
    </div>
  );
};

export default Navbar;
