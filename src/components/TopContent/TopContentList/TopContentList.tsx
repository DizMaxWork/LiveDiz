import React from "react";
import styles from './TopContentList.module.css'

export default function TopContentList() {
  return (
    <div>
      <ul className="flex -mx-2 pt-12 justify-center -mx-2 w-[90%]">
        <li className={styles.listBorder}>
          <span>Лендинги</span>
        </li>
        <li className={styles.listBorder}>
          <span>Корпоративные сайты</span>
        </li>
        <li className={styles.listBorder}>
          <span>Интернет магазины</span>
        </li>
        <li className={styles.listBorder}>
          <span>Сайты на Tilda</span>
        </li>
        <li className={styles.listBorder}>
          <span>Сервисы</span>
        </li>
      </ul>
    </div>
  );
}
