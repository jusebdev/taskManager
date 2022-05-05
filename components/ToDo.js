import React from "react";
import styles from '../styles/components/Todo.module.css'


function ToDo({ title }) {
  return (
    <li className={styles.li}>
      <h3 className={styles.text}>{title}</h3>

    </li>
  );
}

export default ToDo;
