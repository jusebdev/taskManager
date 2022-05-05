import React from "react";

import Buttons from "./Buttons";

import styles from "../styles/components/MainContainer.module.css";


function MainContainer({children}) {
  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <h2 className={styles.text}>TODO LIST</h2>
            {children}
      </div>
    </div>
  );
}

export default MainContainer;
