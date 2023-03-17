import React from "react";
import { iconUrlFromCode } from "../server/server";

function Forecast({ title, items }) {
  console.log(items);
  return (
    <div className="flex items-center justify-center bg-sky-100 p-4 mx-10 my-2 rounded-lg">
      <div className="flex items-center justify-center mt-6">
        <p className=" font-medium uppercase">{title}</p>
      </div>
      <hr className="" />

      <div className="flex flex-row items-center justify-between ">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-sky-100 "
          >
            <p className="font-light text-sm">{item.title}</p>
            <img src={iconUrlFromCode(item.icon)} className="" alt="" />
            <p className="font-medium">{`${item.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
