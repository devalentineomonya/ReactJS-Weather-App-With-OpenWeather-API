import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../Context/ThemeContext/ThemeContext";
import { Monitor, MoonIcon, Sun } from "lucide-react";

const ModeToggler = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <div className="bg-[#1e1e1e] rounded-full flex justify-between items-center h-9 w-[100px] text-[#feffff] px-[5px] relative py-[10px] cursor-pointer">
        <Sun
          size={18}
          onClick={() => changeTheme("light")}
          className={`z-10 ${theme === "light" ? "text-[#1d1d1d]" : ""}`}
        />
        <MoonIcon
          size={18}
          onClick={() => changeTheme("dark")}
          className={`z-10 ${theme === "dark" ? "text-[#1d1d1d]" : ""}`}
        />
        <Monitor
          size={18}
          onClick={() => changeTheme("system")}
          className={`z-10 ${theme === "system" ? "text-[#1d1d1d]" : ""}`}
        />
        <div
          className={`bg-[#bbd7ec] h-9 w-9  rounded-full absolute  z-0  ${
            theme === "light"
              ? "left-[-3px]"
              : theme === "dark"
              ? "left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
              : theme === "system"
              ? "right-[-5px]"
              : null
          }`}
        ></div>
      </div>
    </div>
  );
};

export default ModeToggler;
