import React from "react";
import styles from "./Header.module.css";
import logo from "./../../img/logo.svg";

export default function Header() {
  return (
    <div>
      <div className=" flex text-white">
        <div className=" flex">
          <div>
            <img src={logo} alt="Logo" />
          </div>
          <nav>
            <ul className=" flex">
              <li>
                <a href="#">Сайты</a>
              </li>
              <li>
                <a href="#">Услуги</a>
              </li>
              <li>
                <a href="#">Команда</a>
              </li>
              <li>
                <a href="#">Блог</a>
              </li>
              <li>
                <a href="#">Контакты</a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <a href="tel:+79284692061">8 928 469 20 61</a>
        </div>
      </div>
    </div>
  );
}
