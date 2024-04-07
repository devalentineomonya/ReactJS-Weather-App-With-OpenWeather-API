import { X } from "lucide-react";
import React, { useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const WeatherMapPopup = ({openFullMap}) => {
  const [ visible, setVisible] = useState(true);

  function localDateToUnixTimestamp(localDate) {
    var utcMilliseconds = localDate.getTime() + (localDate.getTimezoneOffset() * 60000);
    return Math.floor(utcMilliseconds / 1000);
}

var localDate = new Date(); 
var unixTimestamp = localDateToUnixTimestamp(localDate);
  return (
    
    <div className={`bg-[#feffff] rounded-2xl h-[200px] w-[200px] flex flex-col  items-center pt-[10px] relative transition-all ease-in-out duration-300 cursor-pointer ${visible ? "" : "hidden"} `}>
      <div className="absolute w-[30px] h-[30px] rounded-full bg-[#101010] 
      text-[#feffff] flex justify-center items-center top-[-5px] left-[-5px]
       cursor-pointer"
       onClick={()=>{setVisible(false)}}>
        <X />
      </div>

      <p className="text-center text-[12px] font-Titillium px-[20px] font-semibold cursor-pointer">
        Explore global map of wind, weather and oceans condition
      </p>
      <div className="w-[85%] h-[80px] bg-[#000] overflow-hidden rounded-lg">
        
          <img
          src={`http://maps.openweathermap.org/maps/2.0/weather/WND/1/1/1?date=${unixTimestamp}&appid=${import.meta.env.VITE_OPEN_API_KEY}`}
          alt="Cloud"
         
        />
        
      </div>
        <button className="w-[85%] h-[35px] bg-[#cbbbec] text-[#101010] rounded-lg mt-[8px] cursor-pointer " onClick={openFullMap}>Get Started</button>
    </div>
  );
};

export default WeatherMapPopup;
