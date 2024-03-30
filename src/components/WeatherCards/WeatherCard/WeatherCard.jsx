import { CloudFog } from "lucide-react";
import React, { useState } from "react";

const WeatherCard = ({ setActiveCard, active }) => {
  const handleClick = () => {
    setActiveCard();
  };
  return (
    <div
      className={` h-[200px]  flex justify-center flex-col rounded-xl overflow-hidden cursor-pointer relative ${
        active ? " w-[180px]  bg-[#bbd7ec]  " : "w-[80px] bg-[#1b1b1d]"
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
            {active ? "Monday" : "Monday".slice(0, 3)}
          </span>
          <span
            className={`font-Chakra font-semibold text-[14px] ${
              active ? "" : "hidden"
            }`}
          >
            11:24{" "}
          </span>
        </div>
      </div>
      <div
        className={`p-[15px] ${active ? "" : "flex justify-between h-full"}`}
      >
        <div
          className={`flex items-center ${
            active ? "justify-between " : "flex-col-reverse gap-y-8"
          }`}
        >
          <div>
            <h1
              className={`font-Chakra font-bold text-[40px] ${
                active ? "" : "text-[#feffff]"
              }`}
            >
              18&deg;
            </h1>
          </div>
          <div className="text-white">
            <CloudFog size={30} />
          </div>
        </div>
        <div
          className={`grid grid-cols-2 justify-between ${
            active ? "" : "hidden"
          }`}
        >
          <p>
            <span className="text-[#55626b] text-[14px]">Temp</span>
            <span className="text-[#1e1e1e] font-Anta ml-1">16&deg;</span>
          </p>
          <p className="flex justify-end">
            <span className="text-[#55626b] text-[14px]">Temp</span>
            <span className="text-[#1e1e1e] font-Anta ml-1">16&deg;</span>
          </p>

          <p>
            <span className="text-[#55626b] text-[14px]">Temp</span>
            <span className="text-[#1e1e1e] font-Anta ml-1">16&deg;</span>
          </p>
          <p className="flex justify-end">
            <span className="text-[#55626b] text-[14px]">Temp</span>
            <span className="text-[#1e1e1e] font-Anta ml-1">16&deg;</span>
          </p>
          <p>
            <span className="text-[#55626b] text-[14px]">Temp</span>
            <span className="text-[#1e1e1e] font-Anta ml-1">16&deg;</span>
          </p>
          <p className="flex justify-end">
            <span className="text-[#55626b] text-[14px]">Temp</span>
            <span className="text-[#1e1e1e] font-Anta ml-1">16&deg;</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
