import React from "react";
import styles from "../styles/components/Buttons.module.css";

function Buttons() {
  return (
    <div className={styles.container}>
      <button className={styles.button}>ADD</button>
      <button className={styles.button}>MODIFY</button>
    </div>
  );
}

export default Buttons;
