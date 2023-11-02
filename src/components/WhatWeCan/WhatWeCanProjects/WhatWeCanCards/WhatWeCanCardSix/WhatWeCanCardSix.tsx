import React from "react";
import headphones from "../../../../../img/5.png";

export default function WhatWeCanCardSix() {
  return (
    <div className="w-fit ml-auto pt-56">
      <div>
        <img src={headphones} alt="ГлавФинанс" />
      </div>
      <div className="pt-8">
        <div className="bg-red w-fit px-2 mb-4 text-white">
          <h4 className="italic">Сервис по микрозаймам</h4>
        </div>
        <h2 className="text-6xl">Главфинанс</h2>
      </div>
    </div>
  );
}
