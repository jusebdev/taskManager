import React from "react";
import TodoList from "./TodoList";
import Buttons from "./Buttons";

import styles from "../styles/components/MainContainer.module.css";


function MainContainer({children}) {
  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <h3 className={styles.text}>TODO LIST</h3>
        <div className={styles.container3}>
            {children}
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
