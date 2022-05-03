import React from "react";
import Options from "./Options";
import TodoList from "./TodoList";
import Buttons from "./Buttons";

import styles from "../styles/components/MainContainer.module.css";

function MainContainer() {
  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <h3 className={styles.text}>TODO LIST</h3>
        <div className={styles.container3}>
          <TodoList />
          <Options />
        </div>
        <Buttons />
      </div>
    </div>
  );
}

export default MainContainer;
