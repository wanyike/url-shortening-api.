import styles from "./CopyButton.module.css";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
const CopyButton = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    let timeout;
    if (isCopied) {
      timeout = setTimeout(() => setIsCopied(false), 1500);
    }
    return () => clearTimeout(timeout);
  }, [isCopied]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`${styles.button} ${isCopied && styles["button--copied"]}`}
      type="button"
      disabled={isCopied}
    
    >
      {isCopied ? "Copied!" : "Copy"}
    </button>
  );
};

CopyButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default CopyButton;
