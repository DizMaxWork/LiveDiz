import React from "react";
import styles from "./Layout.module.css";

export interface ILayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <div className={styles.mainBg}>
      <div className="container mx-auto px-4">{children}</div>
    </div>
  )
}
