import styles from "../css/link.module.css";
import { useState } from "react";

export const Input= ({ type, placeholder, onchange }) => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        className={styles.link}
      />
    </>
  );
};
