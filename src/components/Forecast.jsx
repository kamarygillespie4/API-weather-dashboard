import React from "react";
import { iconUrlFromCode } from "../server/server";

function Forecast({ title, items }) {
  console.log(items);
  return (
    <div>
      <div className="">
        <p className="">{title}</p>
      </div>
      <hr className="" />

      <div className="">
        {items.map((item, index) => (
          <div key={index} className="">
            <p className="">{item.title}</p>
            <img src={iconUrlFromCode(item.icon)} className="" alt="" />
            <p className="">{`${item.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
