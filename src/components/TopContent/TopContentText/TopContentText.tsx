import React from "react";

export default function TopContentText() {
  return (
    <div className="flex justify-between pt-44">
      <div className="w-1/2 pl-28">
        <h3 className="text-5xl">Коротко о нас</h3>
      </div>
      <div className="w-[42%] -my-3">
        <p className="py-3 text-xl">
          DizDiz — мы решаем задачи. Наш принцип заключается в эффективной
          коммуникации между командой разработчиков и бизнеса.
        </p>
        <p className="py-3 text-xl">
          Такая синергия дает непревзойденный результат для решения любой бизнес
          задачи.
        </p>
      </div>
    </div>
  );
}
