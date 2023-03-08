import React from "react";

function TopButtons() {
  const cities = [
    {
      id: 1,
      title: "Denver",
    },
    {
      id: 2,
      title: "Houston",
    },
    {
      id: 3,
      title: "Miami",
    },
    {
      id: 4,
      title: "Boston",
    },
    {
      id: 5,
      title: "Seattle",
    },
  ];
  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button key={city.id} className="text-white text-lg font-medium ">
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
