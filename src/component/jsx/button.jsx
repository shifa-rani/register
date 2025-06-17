import styles from "../css/button.module.css";
export const Button = ({ text = "click Me", onClick }) => {
  return (
    <>
      <button onClick={onClick} className={styles.button}>
        {text}
      </button>
    </>
  );
};
