import React, {useEffect, useState} from "react";
import db from '../utils/db'
import styles from '../styles/components/todoList.module.css'
import ToDo from "./ToDo";



function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {


    },[])

  return(
      <ul className={styles.list}>
    {/*{todos.map(todo=>{*/}
    {/*  <div key = {todo.id} >{todo.title}</div>*/}

    {/*})}*/}

        <ToDo text={'hola1'}/>
        <ToDo text={'hola2'}/>
        <ToDo text={'hola3'}/>
        <ToDo text={'hola4'}/>

    </ul>
  );
}

export default TodoList;

