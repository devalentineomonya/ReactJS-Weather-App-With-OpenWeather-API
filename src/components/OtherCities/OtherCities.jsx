import { ChevronRight } from "lucide-react";
import React from "react";
import OtherCityCard from "./OtherCityCard/OtherCityCard";

const OtherCities = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row justify-between mt-[20px]">
        <h2 className="text-[#feffff] cursor-pointer">Other large Cities</h2>
        <h3 className="text-[#9c9c9c] flex flex-row gap-x-1 cursor-pointer">
          <span>View More</span>
          <ChevronRight />
        </h3>
      </div>
      <div>
        <OtherCityCard />
      </div>
    </div>
  );
};

export default OtherCities;
