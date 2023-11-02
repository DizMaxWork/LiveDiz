import React from "react";
import styles from "./TopContentTitle.module.css";

export default function TopContentTitle() {
  return (
    <div className="relative flex justify-center">
      <div className={styles.arrows}></div>
      <div className="w-[85%]">
        <h2 className="text-[5.5rem] leading-tight">Аутсорс агентство для решения бизнес задач</h2>
      </div>
    </div>
  );
}
