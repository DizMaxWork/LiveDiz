import React from "react";
import finance from "../../../../../img/1.png";

export default function WhatWeCanCardOne() {
  return (
    <div>
      <div>
        <img src={finance} alt="ГлавФинанс" />
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
