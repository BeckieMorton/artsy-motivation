import styles from "./GenreLandingCard.module.css";

export const GenreLandingCard = ({ cardText, handleClick, cardImage }) => {
  return (
    <div className={styles.artCardContainer}>
      <p className={styles.genreText}>{cardText}</p>
      <img className={styles.genreImage} src={`./assets/${cardImage}.jpg`} />
    </div>
  );
};
