import React, {useEffect, useState} from "react";
import db from '../utils/db'
import styles from '../styles/components/todoList.module.css'
import ToDo from "./ToDo";
import Button from "./Buttons";


const url = ''
function TodoList() {
  const [todos, setTodos] = useState([]);
 const [content, setContent] = useState({
		title: "",
 });
 const onChange = (e) => {
		const { value, name } = e.target;
		setContent((prevState) => ({ ...prevState, [name]: value }));
 };
//  const onSubmit = async () => {
// 		const { title, body } = content;
// 		await axios.post("/api/tasks/post", { title });
//  };
  return (
		<>
			<div className={styles.container}>
				<input
					className={styles.title}
					placeholder={"New Todo"}
					type="text"
					name="title"
					value={content.title}
					onChange={onChange}
				/>

				<select className={styles.status}>
					<option>Status</option>
					<option>Pending</option>
					<option>In Progress</option>
					<option>Done</option>
				</select>

				<Button
					cb={() => {
						title._id ? "Update" : "Add";
					}}
					text={"ADD"}
				/>
			</div>

			{/* TODO RENDERED  */}
			{todos.map((task) => (
				<div key={task._id} className={styles.list}>
					<input type='checkbox' checked={task.completed }/>
					<P classname={task.completed ? styles.task_text + ''+ styles.line_through :  styles.task_text}  >
						{task.title}
					</P>
					<button className={styles.edit_task}>&#9998</button>
					<button className={styles.remove_task}>&#10006</button>
				</div>
			))}
			{todos.length === 0 && <h2 className={styles.no_task}>No Tasks</h2>}
		</>
	);
}

export default TodoList;

