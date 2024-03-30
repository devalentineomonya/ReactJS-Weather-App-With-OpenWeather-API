import {
  Bell,
  LayoutGrid,
  MapPin,
  Monitor,
  MoonIcon,
  Search,
  Sun,
} from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import icon from "../../../DevalWeather.jpg";
import { IpContext } from "../../Context/IpContext/IpContext";

const Navbar = () => {
  const { ip, city, countryName } = useContext(IpContext);

  const [theme, setTheme] = useState("system");
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const changeTheme = (themeName) => {
    setTheme(themeName);
    localStorage.setItem("theme", themeName);
  };

  return (
    <div className="flex justify-between h-9 w-full">
      <div className="w-[70%] flex justify-between">
        <div className="flex w-[200px] justify-between items-center ">
          <div className="w-[30px] h-[30px]  rounded-full bg-[#1e1e1e] flex justify-center items-center text-[#feffff] p-1  cursor-pointer">
            <LayoutGrid size={12} />
          </div>
          <div className="w-[30px] h-[30px]  rounded-full bg-[#1e1e1e] flex justify-center items-center text-[#feffff] p-1 cursor-pointer ">
            <Bell size={12} />
          </div>
          {city && countryName && (
            <div className="flex items-center justify-center  text-[#feffff]  cursor-pointer relative">
              <MapPin size={12} />
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fa1e18] opacity-30"></span>
              <p className="ml-1 whitespace-nowrap  cursor-pointer">
                {city},<span className="text-[#9c9c9c]">{countryName}</span>
              </p>
            </div>
          )}
        </div>
        <div className="flex items-center justify-start w-1/2 bg-[#1e1e1e] h-9 rounded-full px-4 py-2 text-[#feffff] ">
          <Search />
          <input
            type="text"
            placeholder="Search city..."
            className="w-full bg-transparent text-[#feffff] ml-3 border-none outline-none font-semibold text-[18px]"
          />
        </div>
      </div>
      <div className="w-[30%] flex justify-end">
        <div className="flex just items-center">
          <div className="bg-[#1e1e1e] rounded-full flex justify-between items-center h-9 w-[100px] text-[#feffff] px-[5px] relative py-[10px] cursor-pointer">
            <Sun
              size={18}
              onClick={() => changeTheme("light")}
              className="z-10"
            />
            <MoonIcon
              size={18}
              onClick={() => changeTheme("dark")}
              className="z-10"
            />
            <Monitor
              size={18}
              onClick={() => changeTheme("system")}
              className="z-10"
            />
            <div
              className={`bg-[#bbd7ec] h-9 w-9  rounded-full absolute  z-0  ${
                theme === "light"
                  ? "left-0"
                  : theme === "dark"
                  ? "left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
                  : theme === "system"
                  ? "right-0"
                  : null
              }`}
            ></div>
          </div>
          <img
            src={icon}
            alt=""
            className="w-9 h-9 rounded-full ml-2 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
