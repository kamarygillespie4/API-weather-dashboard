import "./App.css";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeLocation from "./components/TimeLocation";
import Temperature from "./components/Temperature";
import Forecast from "./components/Forecast";

function App() {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fiy shadow-xl shadow-gray-400">
      <TopButtons />
      <Inputs />

      <TimeLocation />
      <Temperature />
      <Forecast title="Hourly Forecast" />
      <Forecast title="Daily Forecast" />
    </div>
  );
}

export default App;
