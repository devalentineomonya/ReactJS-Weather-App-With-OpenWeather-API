import React from "react";

const mapLink = "https://map.worldweatheronline.com/temperature?lat=69.83516671142212&lng=-3.788767463537757";
function openFullMap (){
  window.open(mapLink, '_blank');
}
const WeatherMap = () => {
  return (
    <div className="flex flex-col relative">
      <div className="flex justify-between text-[#feffff] mt-[20px]">
        <div>Global Map</div>
        <div className="bg-[#1e1e1e] w-[110px] rounded-full px-[10px] py-[5px]">
          <p className="whitespace-nowrap cursor-pointer" onClick={openFullMap}>
            <span>
              View Wide <span>✨</span>
            </span>
          </p>
        </div>
      </div>
      <div className="h-[350px] bg-[#1b1b1d] rounded-xl mt-5">
        <iframe src={mapLink} className="w-[100%] h-[100%] overflow-hidden"></iframe>
      </div>
    </div>
  );
};

export default WeatherMap;
