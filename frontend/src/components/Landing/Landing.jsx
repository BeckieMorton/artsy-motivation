import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { GenreLandingCard } from "../ReuseableComponents/GenreLandingCard/GenreLandingCard";

import styles from "./Landing.module.css";
import { MobileView } from "../../pages/MobileView/MobileView";

export const Landing = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/artworks");
  };

  return (
    <>
      <div className={styles.desktopView}>
        <p style={{ fontWeight: "bold" }}>
          "Ignite Creativity, Inspire Literacy"
        </p>
        <p>
          <p className={styles.genreTxt}>
            Choose a genre to explore and to inspire
          </p>
          <div className={styles.genreContainer}>
            <div className={styles.genreBox}>
              <Link to="/european">
                <GenreLandingCard
                  cardText={"European Paintings"}
                  cardImage={"european"}
                />
              </Link>
            </div>
            <div className={styles.genreBox}>
              <Link to="/african">
                <GenreLandingCard
                  cardText={"Africa, Oceania, and the Americas"}
                  cardImage={"african"}
                />
              </Link>
            </div>
            <div className={styles.genreBox}>
              <Link to="/photography">
                <GenreLandingCard
                  cardText={"Photography"}
                  cardImage={"photographs"}
                />
              </Link>
            </div>
            <div className={styles.genreBox}>
              <Link to="/greekroman">
                <GenreLandingCard
                  cardText={"Greek Roman Art"}
                  cardImage={"greekroman"}
                />
              </Link>
            </div>
            <div className={styles.genreBox}>
              <Link to="/asian">
                <GenreLandingCard cardText={"Asian Art"} cardImage={"asia"} />
              </Link>
            </div>
            <div className={styles.genreBox}>
              <Link to="/medieval">
                <GenreLandingCard
                  cardText={"Medieval"}
                  cardImage={"medieval"}
                />
              </Link>
            </div>
          </div>
        </p>
      </div>
      <div className={styles.mobileView}>
        <MobileView />
      </div>
    </>
  );
};
