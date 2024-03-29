// import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Main from "./Pages/Main";

function App() {
 

  return (
    <div className="p-3 bg-[#111015] flex justify-center">
      <div className="lg:w-[90%] w-[100%] xl:w-[80%] flex justify-center items-center">
      <Navbar />
      <Main />

      </div>
    </div>
  );
}

export default App;
