import React from "react";
import styles from '../styles/components/Todo.module.css'


function ToDo({children}) {
  return (
    <div className={styles.toDo}>
      {children}
    </div>
  );
}

export default ToDo;
