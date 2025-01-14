import styles from "./ShortenButton.module.css";

const ShortenButton = (props) => {
  return (
    <button
      className={styles.button}
      type="button"
      aria-label="Shorten link"
      title="Shorten link"
      {...props}
    >
      Shorten It!
    </button>
  );
};

export default ShortenButton;
