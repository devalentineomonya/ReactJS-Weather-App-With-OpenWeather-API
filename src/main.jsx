import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { LocationContextProvider } from "./Context/LocationContext/LocationContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { WeatherProvider } from "./Context/WeatherData/WeatherDataContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer />
    <LocationContextProvider>
      <WeatherProvider>
        <App />
      </WeatherProvider>
    </LocationContextProvider>
  </React.StrictMode>
);
