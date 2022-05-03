import React from "react";
import styles from "../styles/components/NavBar.module.css";

function NavBar() {
  return (
    <nav className={styles.container}>
      <h3 className={styles.text}>TODO LIST</h3>
    </nav>
  );
}

export default NavBar;
