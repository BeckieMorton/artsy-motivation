import React from "react";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <p>
        <img src="./assets/header.png" alt="artsy motivation" />
      </p>
    </div>
  );
};
