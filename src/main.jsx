import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { LocationContextProvider } from "./Context/LocationContext/LocationContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { WeatherProvider } from "./Context/WeatherData/WeatherDataContext.jsx";
import { OtherCitiesProvider } from "./Context/OtherCitiesContext/OtherCitiesContext.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer />
    <LocationContextProvider>
      <OtherCitiesProvider>
        <WeatherProvider>
          <App />
        </WeatherProvider>
      </OtherCitiesProvider>
    </LocationContextProvider>
  </React.StrictMode>
);
