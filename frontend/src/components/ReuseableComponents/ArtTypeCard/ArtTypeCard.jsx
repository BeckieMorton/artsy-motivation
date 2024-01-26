import styles from "./ArtTypeCard.module.css";

export const ArtTypeCard = ({ cardText, handleClick, cardImage }) => {
  return (
    <div className={styles.artCardContainer}>
      <p className={styles.genreText}>{cardText}</p>
      <img className={styles.genreImage} src={`./assets/${cardImage}.jpg`} />
    </div>
  );
};
