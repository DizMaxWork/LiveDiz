import React from "react";
import vodka from "../../../../../img/3.png";

export default function WhatWeCanCardFive() {
  return (
    <div>
      <div>
        <img src={vodka} alt="ГлавФинанс" />
      </div>
      <div className="pt-8">
        <div className="bg-red w-fit px-2 mb-4 text-white">
          <h4 className="italic">Интернет магазин</h4>
        </div>
        <h2 className="text-6xl">Lepsky Guitars</h2>
      </div>
    </div>
  );
}
