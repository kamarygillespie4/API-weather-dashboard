import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { toast } from "react-toastify";

function Inputs({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      toast.info("Fetching users location.");
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success("Location fetched!");
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  return (
    <div className="items-center justify-center bg-sky-100 p-4 mx-10 my-2 rounded-lg">
      <h1 className="flex flex-row items-center justify-center  rounded-lg text-3xl tracking-wider p-4 font-medium mx-10 my-2 text-sky-900">
        Weather Dashboard
      </h1>
      <div className="p-4  rounded-lg">
        <div className="flex flex-row items-center justify-center  my-2">
          <input
            value={city}
            onChange={(e) => setCity(e.currentTarget.value)}
            type="text"
            placeholder="Search for city...."
            className="block text-sm rounded-lg outline-none  p-4"
          />
          <UilSearch
            size={25}
            className="cursor-pointer transition ease-out hover:scale-125 mx-1"
            onClick={handleSearchClick}
          />
          <UilLocationPoint
            size={25}
            className="cursor-pointer transition ease-out hover:scale-125 mx-1"
            onClick={handleLocationClick}
          />
        </div>

        <div className="flex flex-row items-center justify-center my-2">
          <button
            name="metric"
            className="text-xl mx-1 font-light transition ease-out hover:scale-12"
            onClick={handleUnitsChange}
          >
            °C
          </button>
          <p className="">|</p>
          <button
            name="imperial"
            className="text-xl mx-1 font-light transition ease-out hover:scale-12 "
            onClick={handleUnitsChange}
          >
            °F
          </button>
        </div>
      </div>
    </div>
  );
}

export default Inputs;
