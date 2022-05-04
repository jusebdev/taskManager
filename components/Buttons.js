import React from "react";
import styles from "../styles/components/Buttons.module.css";

function Buttons({cb ,text}) {


  return (
    <div className={styles.container}>
      <button onClick={cb} className={styles.button}>{text}</button>
    </div>
  );
}

export default Buttons;
