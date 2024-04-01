// import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Main from "./Pages/Main";

function App() {
 
console.log(import.meta.env.VITE_WEATHER_API);
  return (
    <div className="p-3 dark:bg-[#111015] bg-[#feffff] flex justify-center font-Titillium lg:h-screen h-full transition-all ease-in-out duration-300 ">
      <div className="lg:w-[90%] w-[100%] xl:w-[80%] flex flex-col">
      <Navbar />
      <Main />
    
      </div>
    </div>
  );
}

export default App;
