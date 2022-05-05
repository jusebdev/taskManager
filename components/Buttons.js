import React from "react";
import styles from "../styles/components/Buttons.module.css";

function Buttons({cb ,text, id}) {


  return (
    <div className={styles.container} id={id}>
      <button onClick={cb} className={styles.button}>{text}</button>
    </div>
  );
}

export default Buttons;
