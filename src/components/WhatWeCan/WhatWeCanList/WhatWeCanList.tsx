import React from "react";

export default function WhatWeCanList() {
  return (
    <div className="flex justify-end pt-20 -mx-5">
      <div className="px-5">
        <div className=" border-b-2 border-b-red w-[448px]">
          <h3 className="text-3xl pb-2">Разработка сайтов</h3>
        </div>
        <ul className="text-2xl pt-8 -my-1">
          <li className="py-1">Аналитика бизнеса</li>
          <li className="py-1">Прототипирование</li>
          <li className="py-1">UI UX дизайн</li>
          <li className="py-1">Front-end разработка</li>
          <li className="py-1">Back-end разработка</li>
        </ul>
      </div>
      <div className="px-5">
        <div className=" border-b-2 border-b-red w-[448px]">
          <h3 className="text-3xl pb-2">Дополнительные услуги</h3>
        </div>
        <ul className="text-2xl pt-8 -my-1">
          <li className="py-1">Фирменный стиль и брендинг</li>
          <li className="py-1">Продвижение и реклама</li>
          <li className="py-1">Внедрение AMOcrm</li>
        </ul>
      </div>
    </div>
  );
}
