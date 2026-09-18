
import React from "react";
import styles from "./Button.module.css";

const Button = ({ title, onClick, type = "blue" }) => {
  return (
    <button
      className={`${styles.button} ${styles[type]}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;

