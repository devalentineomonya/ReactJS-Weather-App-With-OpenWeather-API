// import "./App.css";
import GetRegion from "./components/GetLocation/GetRegion/GetRegion";
import Navbar from "./components/Navbar/Navbar";
import Main from "./Pages/Main";

function App() {
 

  return (
    <div className="p-3 bg-[#111015] flex justify-center font-Titillium h-screen">
      <div className="lg:w-[90%] w-[100%] xl:w-[80%] flex flex-col">
      <Navbar />
      <Main />
<GetRegion/>
      </div>
    </div>
  );
}

export default App;
