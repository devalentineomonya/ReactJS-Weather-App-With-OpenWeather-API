// import "./App.css";
import { useContext } from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./Pages/Main";
import { ThemeContext } from "./Context/ThemeContext/ThemeContext";

function App() {
 const {theme} = useContext(ThemeContext);

  return (
    <div className={`p-3  flex justify-center font-Titillium lg:h-screen h-full transition-all ease-in-out duration-300 ${ theme === "dark" ? "bg-[#111015] " : "bg-[#feffff]"}`}>
      <div className="lg:w-[90%] w-[100%] xl:w-[80%] flex flex-col">
      <Navbar />
      <Main />
      </div>
    </div>
  );
}

export default App;
