import React from "react";

const WeatherFilter = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-start gap-2 items-center text-[#feffff]">
        <div>
          <span className="text-[#9c9c9c]">Today</span>
        </div>
        <div>
          <span className="text-[#9c9c9c]">Tomorrow</span>
        </div>
        <div>
          <span className="text-[#feffff]">Next 7 days</span>
        </div>
      </div>
      <div className="h-9 w-[150px] relative rounded-full bg-[#1e1e1e]  flex justify-between items-center px-[10px]">
        <div className="z-10 flex justify-center items-center">
          <span className="whitespace-nowrap text-[#111015]">Focus</span>
        </div>
        <div className="z-10 flex justify-center items-center">
          <span className="whitespace-nowrap text-[#9c9c9c]">Air Quality</span>
        </div>
        <div className="absolute w-[46%] h-full bg-[#bcd8ed] left-0 rounded-full  "></div>
      </div>
    </div>
  );
};

export default WeatherFilter;
