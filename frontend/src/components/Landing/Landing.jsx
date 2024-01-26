import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "../ReuseableComponents/Button";
import { ArtTypeCard } from "../ReuseableComponents/ArtTypeCard";

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
          <div className={styles.genreBox}>
            <ArtTypeCard cardText={"European Art"} cardImage={"european"} />
          </div>
          <div className={styles.genreBox}>
            <ArtTypeCard cardText={"African Art"} cardImage={"african"} />
          </div>
          <div className={styles.genreBox}>
            <ArtTypeCard cardText={"Photography"} cardImage={"photographs"} />
          </div>
          <div className={styles.genreBox}>
            <ArtTypeCard
              cardText={"Greek Roman Art"}
              cardImage={"greekroman"}
            />
          </div>
          <div className={styles.genreBox}>
            <ArtTypeCard cardText={"Asian Art"} cardImage={"asia"} />
          </div>
          <div className={styles.genreBox}>
            <ArtTypeCard cardText={"Medieval"} cardImage={"medieval"} />
          </div>
        </div>
        <Button handleClick={handleClick} buttonText={"Display artwork"} />
      </p>
      <p className="hover:text-red">hover over me</p>
    </div>
  );
};
