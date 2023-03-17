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
    <>
      <h1 className="flex flex-row items-center justify-center">
        Weather Dashboard
      </h1>
      <div className="flex flex-row justify-center">
        <div className="flex flex-row items-center justify-center">
          <input
            value={city}
            onChange={(e) => setCity(e.currentTarget.value)}
            type="text"
            placeholder="Search for city...."
            className="p-2 w-3/4"
          />
          <UilSearch
            size={25}
            className="cursor-pointer transition ease-out hover:scale-125 m-2"
            onClick={handleSearchClick}
          />
          <UilLocationPoint
            size={25}
            className="cursor-pointer transition ease-out hover:scale-125 m-2"
            onClick={handleLocationClick}
          />
        </div>

        <div className="flex flex-row items-center justify-center">
          <button
            name="metric"
            className="text-xl  font-light transition ease-out hover:scale-12 m-1"
            onClick={handleUnitsChange}
          >
            °C
          </button>
          <p className="">|</p>
          <button
            name="imperial"
            className="text-xl font-light transition ease-out hover:scale-12 m-1"
            onClick={handleUnitsChange}
          >
            °F
          </button>
        </div>
      </div>
    </>
  );
}

export default Inputs;
