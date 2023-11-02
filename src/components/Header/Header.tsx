import React from "react";
import styles from "./Header.module.css";
import logo from "./../../img/logo.svg";

export default function Header() {
  return (
    <header>
      <div className=" flex text-white pt-4">
        <div className="w-full flex justify-between">
          <div>
            <a href="#">
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <nav className="w-2/5">
            <ul className=" flex -mx-2">
              <li className="px-2">
                <a href="#">Сайты</a>
              </li>
              <li className="px-2">
                <a href="#">Услуги</a>
              </li>
              <li className="px-2">
                <a href="#">Команда</a>
              </li>
              <li className="px-2">
                <a href="#">Блог</a>
              </li>
              <li className="px-2">
                <a href="#">Контакты</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="w-1/6 flex justify-end">
          <a href="tel:+79284692061">8 928 469 20 61</a>
        </div>
      </div>
    </header>
  );
}
