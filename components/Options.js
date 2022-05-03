import React from "react";
import styles from '../styles/components/Options.module.css'

function Options() {
  return (
    <div className={styles.container}>
      <input placeholder='New Todo'/>
      <select>
        <option>Status</option>
        <option>Pending</option>
        <option>In Progress</option>
        <option>Done</option>
      </select>
    </div>
  );
}

export default Options;
