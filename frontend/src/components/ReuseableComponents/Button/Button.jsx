import styles from "./Button.module.css";

export const Button = ({ buttonText, handleClick }) => {
  return (
    <div>
      <button
        aria-label="button"
        className={styles.button}
        onClick={handleClick}
      >
        {buttonText}
      </button>
    </div>
  );
};
