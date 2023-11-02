import React from 'react'
import greyBg from "../../../../../img/4.png";

export default function WhatWeCanCardFour() {
    return(
        <div>
          <div>
            <img src={greyBg} alt="ГлавФинанс" />
          </div>
          <div className="pt-8">
            <div className="flex -mx-2">
              <div className="bg-red w-fit px-2 mb-4 mx-2 text-white">
                <h4 className="italic">Корпоративный сайт</h4>
              </div>
              <div className="bg-red w-fit px-2 mb-4 mx-2 text-white">
                <h4 className="italic">Клиентский сервис</h4>
              </div>
            </div>
            <h2 className="text-6xl">Главфинанс</h2>
          </div>
        </div>
    )
};
