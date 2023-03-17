import React from "react";
import { formatToLocalTime } from "../server/server";

function TimeAndLocation({ weather: { dt, timezone, name, country } }) {
  return (
    <div className="items-center justify-center bg-sky-100 p-4 mx-10 my-2 rounded-lg">
      <div className="flex items-center justify-center my-4">
        <p className=" text-2xl font-medium text-sky-800">{`${name}, ${country}`}</p>
      </div>
      <div className="flex items-center justify-center my-4 ">
        <p className=" text-xl font-extralight">
          {formatToLocalTime(dt, timezone)}
        </p>
      </div>
    </div>
  );
}

export default TimeAndLocation;
