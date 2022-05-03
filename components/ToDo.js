import React from "react";
import styles from '../styles/components/Todo.module.css'


function ToDo({ text }) {
  return (
    <li className={styles.li}>
      <h3 className={styles.text}>{text}</h3>
      <button className={styles.button}>X</button>
    </li>
  );
}

export default ToDo;
