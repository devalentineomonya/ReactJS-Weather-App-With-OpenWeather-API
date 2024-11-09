import React from "react";
import Visibility from "../widgets/Visibility";
import Humidity from "../widgets/Humidity";
import Feel from "../widgets/Feel";
const CurrentPrecipitation = () => {
  return (
    <div className="col-span-4 grid grid-cols-12 grid-rows-12 ml-4  h-full pt-6 ">
      <div className="row-span-6 grid grid-cols-12 col-span-12">
        <Visibility />
        <Humidity />
      </div>
      <Feel />
    </div>
  );
};

export default CurrentPrecipitation;
