import "./App.css";
import Inputs from "./components/Inputs";
import TimeLocation from "./components/TimeLocation";
import Temperature from "./components/Temperature";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./server/server";
import { useEffect, useState } from "react";

function App() {
  const [query, setQuery] = useState({ q: "berlin" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location.";

      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  return (
    <div className="">
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

      {weather && (
        <div>
          <TimeLocation weather={weather} />
          <Temperature weather={weather} />

          <Forecast title="hourly forecast" items={weather.hourly} />
          <Forecast title="daily forecast" items={weather.daily} />
        </div>
      )}
    </div>
  );
}

export default App;
