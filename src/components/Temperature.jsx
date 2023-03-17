import React from "react";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from "../server/server";

function TemperatureAndDetails({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) {
  return (
    <div>
      <div className="">
        <p>{details}</p>
      </div>

      <div className="">
        <img src={iconUrlFromCode(icon)} alt="" className="w-20" />
        <p className="">{`${temp.toFixed()}°`}</p>
        <div className="">
          <div className="">
            <UilTemperature size={18} className="mr-1" />
            Real fell:
            <span className="">{`${feels_like.toFixed()}°`}</span>
          </div>
          <div className="">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="">{`${humidity.toFixed()}%`}</span>
          </div>
          <div className="">
            <UilWind size={18} className="mr-1" />
            Wind:
            <span className="">{`${speed.toFixed()} km/h`}</span>
          </div>
        </div>
      </div>

      <div className="">
        <UilSun />
        <p className="">
          Rise:{" "}
          <span className="">
            {formatToLocalTime(sunrise, timezone, "hh:mm a")}
          </span>
        </p>
        <p className="">|</p>

        <UilSunset />
        <p className="">
          Set:{" "}
          <span className="">
            {formatToLocalTime(sunset, timezone, "hh:mm a")}
          </span>
        </p>
        <p className="">|</p>

        <UilSun />
        <p className="">
          High: <span className="">{`${temp_max.toFixed()}°`}</span>
        </p>
        <p className="">|</p>

        <UilSun />
        <p className="">
          Low: <span className="">{`${temp_min.toFixed()}°`}</span>
        </p>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;
