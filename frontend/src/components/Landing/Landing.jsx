import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import useArtworkStore from "../../stores/useArtworkStore";

import styles from "./Landing.module.css";

export const Landing = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/artworks");
  };

  return (
    <div>
      <p>""Ignite Creativity, Inspire Literacy"</p>
      <p>
        <p>Choose a genre to explore and to inspire</p>
        <div className={styles.genreContainer}>
          <div className={styles.genreBox}>box 1</div>
          <div className={styles.genreBox}>box 2</div>
          <div className={styles.genreBox}>box 3</div>
        </div>
        <button onClick={handleClick}>Display artwork</button>
      </p>
    </div>
  );
};
