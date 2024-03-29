import { CloudFog } from "lucide-react";
import React from "react";

const WeatherCard = () => {
  return (
    <div className="w-[180px] h-[200px] flex justify-center flex-col bg-[#bbd7ec] rounded-xl overflow-hidden cursor-pointer">
      <div className="flex justify-between items-center bg-[#aecadf] relative px-[15px]">
        <span className=" font-Titillium font-semibold text-[18px]">
          Monday
        </span>
        <span className="font-Chakra font-semibold text-[18px]">11:24 </span>
      </div>
      <div className=" p-[15px]">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-Chakra font-bold text-[40px]">
              18 <sup>.</sup>{" "}
            </h1>
          </div>
          <div className="text-white">
            <CloudFog size={30} />
          </div>
        </div>
        <div className="grid grid-cols-2 justify-between">
          <p>
            <span className="text-[#55626b] text-[14px]">Temp</span>
            <span className="text-[#1e1e1e] font-Anta ml-1">16*</span>
          </p>
          <p className="flex justify-end">
            <span className="text-[#55626b] text-[14px]">Temp</span>
            <span className="text-[#1e1e1e] font-Anta ml-1">16*</span>
          </p>

          <p>
            <span className="text-[#55626b] text-[14px]">Temp</span>
            <span className="text-[#1e1e1e] font-Anta ml-1">16*</span>
          </p>
          <p className="flex justify-end">
            <span className="text-[#55626b] text-[14px]">Temp</span>
            <span className="text-[#1e1e1e] font-Anta ml-1">16*</span>
          </p>
          <p>
            <span className="text-[#55626b] text-[14px]">Temp</span>
            <span className="text-[#1e1e1e] font-Anta ml-1">16*</span>
          </p>
          <p className="flex justify-end">
            <span className="text-[#55626b] text-[14px]">Temp</span>
            <span className="text-[#1e1e1e] font-Anta ml-1">16*</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
