import React from "react";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <img src="./assets/header-sml.png" alt="artsy motivation" />
    </div>
  );
};
