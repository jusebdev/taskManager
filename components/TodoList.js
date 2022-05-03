import React from "react";
import Todo from './ToDo';
import styles from'../styles/components/todoList.module.css'

function TodoList() {
  return <ul className={styles.list}>
    <Todo text='hola soy un todo1 '/>
    <Todo text='hola soy un todo 2'/>
    <Todo text='hola soy un todo 3'/>
    </ul>;
}

export default TodoList;
