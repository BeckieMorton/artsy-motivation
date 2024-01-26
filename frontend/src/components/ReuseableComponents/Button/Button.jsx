import styles from "./Button.module.css";

export const Button = ({ buttonText, handleClick }) => {
  return (
    <div>
      <button className={styles.button} onClick={handleClick}>
        {buttonText}
      </button>
    </div>
  );
};
