import React from "react";

const OtherCityCard = () => {
  return (
    <div className="w-[95%] h-[105px] bg-[#1b1b1d] rounded-xl overflow-hidden mb-[17px] mr-[10px] grid grid-cols-2 p-3">
      <div className="flex justify-start flex-col gap-y-1 text-[#feffff]">
        <p>Us</p>
        <h4>Califonia</h4>
        <p>Mostly Windly</p>
      </div>
      <div className="flex justify-center flex-col items-end text-[#feffff]">
        <img src="" alt="cloud" />
        <h2 className="font-Chakra text-[40px]">18&deg;</h2>
      </div>
    </div>
  );
};

export default OtherCityCard;
