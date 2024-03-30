import React from "react";
import clearImage from "./Images/clearsky.png";
import cloudsImage from "./Images/cloud.png";
import rainImage from "./Images/rain.png";
import drizzleImage from "./Images/drizzle.png";
import thunderstormImage from "./Images/thunderstorm.png";
import snowImage from "./Images/snow.png";
import mistImage from "./Images/mist.png";
import smokeImage from "./Images/smoke.png";
import hazeImage from "./Images/haze.png";
import dustImage from "./Images/dust.png";
import fogImage from "./Images/fog.png";
import sandImage from "./Images/sand.png";
import ashImage from "./Images/ash.png";
import squallImage from "./Images/squall.png";
import tornadoImage from "./Images/tornado.png";

// import defaultImage from '../../../../assets/images/default.png';

const WeatherImage = ({ main }) => {
  let weatherImage;

  switch (main.toLowerCase()) {
    case "clear":
      weatherImage = clearImage;
      break;
    case "clouds":
      weatherImage = cloudsImage;
      break;
    case "rain":
      weatherImage = rainImage;
      break;
    case "drizzle":
      weatherImage = drizzleImage;
      break;
    case "thunderstorm":
      weatherImage = thunderstormImage;
      break;
    case "snow":
      weatherImage = snowImage;
      break;
    case "mist":
      weatherImage = mistImage;
      break;
    case "smoke":
      weatherImage = smokeImage;
      break;
    case "haze":
      weatherImage = hazeImage;
      break;
    case "dust":
      weatherImage = dustImage;
      break;
    case "fog":
      weatherImage = fogImage;
      break;
    case "sand":
      weatherImage = sandImage;
      break;
    case "ash":
      weatherImage = ashImage;
      break;
    case "squall":
      weatherImage = squallImage;
      break;
    case "tornado":
      weatherImage = tornadoImage;
      break;
    default:
      weatherImage = defaultImage;
      break;
  }

  return (
    <div className="text-white">
      <img src={weatherImage} alt="" />
    </div>
  );
};

export default WeatherImage;
