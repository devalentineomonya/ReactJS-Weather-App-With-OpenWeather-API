import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Main from "./Pages/Main";
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
 
  return (
    <div className="p-3 bg-[#111015] flex justify-center font-Titillium lg:h-screen h-full transition-all ease-in-out duration-300 ">
      <div className="lg:w-[90%] w-[100%] xl:w-[80%] flex flex-col">
      <Navbar />
      <Main />
      <SpeedInsights />

      </div>
    </div>
  );
}

export default App;
