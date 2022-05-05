import Head from "next/head";
import NavBar from "../components/NavBar";
import MainContainer from "../components/MainContainer";
import React, { useState } from "react";
import styles from "../styles/components/todoList.module.css";
import Button from "../components/Buttons";
import axios from "axios";
import { useEffect } from "react";
import ToDo from "../components/ToDo";

const url = "http://localhost:3000/api/task";

export default function Home(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [task, setTask] = useState({
    title: "",
    status: "",
  });

  useEffect((e) => {
    console.log(tasks);
  }),
    [tasks];

  const handleInputChange = (event) => {
    setTask({
      ...task,
      [event.target.name]: event.target.value,
    });
  };

  const Submit = (event) => {
    event.preventDefault();
    addTask(task);
    console.log(task);
    setTask({
      title: "",
      status: "",
    });
    // 		task._id ? "Update" : "Add";
  };

  //   useEffect(() => {
  //     first

  //     return () => {
  //       second
  //     }
  //   }, [third])

  const handleByStatus = (e) => {
    e.preventDefault();
    setTask({ ...task, status: e.target.value });
  };

  // const onChange = ({currenTarget: input}) => {
  //     // input.value ===''? setTask({title:''}):
  //     setTask((prevState) => ({ ...prevState, title: input.value }));
  // };
  const editTask = (id) => {
    const currentTask = tasks.filter((task) => task._id === id);
    setTask(currentTask[0]);
  };

  const addTask = async () => {
    try {
      if (task._id) {
        const [data] = await axios.post(url + task._id, { title: task.title });
        const originalTasks = [...tasks];
        const index = originalTasks.findIndex((t) => t.id === task.id);
        originalTasks[index] = data.data;
        setTasks(originalTasks);
        setTask({ title: "" });
        console.log(data.message);
      } else {
        const { data } = await axios.post(url, task);
        setTasks((prev) => [...prev, data.data]);
        setTask({ title: "" });
        console.log(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updateTask = async () => {
    try {
      const originalTasks = [...tasks];
      const index = originalTasks.findIndex((t) => t.id === t._id);
      const { data } = await axios.put(url + "/" + id, {
        completed: !originalTasks[index].completed,
      });
      originalTasks[index] = data.data;
      setTasks(originalTasks);
      console.log(data.message);
    } catch (e) {
      console.log(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      const { data } = await axios.delete(url + "/" + id);
      setTasks((prev) => prev.filter((task) => task._id !== id));
      console.log(data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="appContainer">
      <Head>
        <title>Next JS - Task Manager</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NavBar />

      <MainContainer>
        <div className={styles.container3}>
          {/* TODO RENDERED  */}
          <div className={styles.toDos}>
            {tasks.map((task, index) => (
              <ToDo key={index}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => {
                    updateTask(task._id);
                  }}
                />
                {/* <p
							className={
								task.completed
									? styles.task_text + "" + styles.line_through
									: styles.task_text
							}>
							{task.title}
						</p> */}

                <span className={styles.taskText}>{task.title}</span>

                <button
                  onClick={() => {
                    deleteTask(task._id);
                  }}
                  className={styles.remove_task}
                >
                  <h4>X</h4>
                </button>
              </ToDo>
            ))}

            {tasks.length === 0 && (
              <div className={styles.list}>
                <h3 className={styles.no_task}>No Tasks</h3>
              </div>
            )}
          </div>

          <form onSubmit={addTask} className={styles.formContainer}>
            <input
              className={styles.toDoInput}
              placeholder="New Todo"
              onChange={handleInputChange}
              name="title"
              value={task.title}
            />
            {/* --------------------------SELECT-------------- */}
            <select
              className={styles.status}
              onChange={(e) => handleByStatus(e)}
            >
              <option>Status</option>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>

            <Button cb={Submit} text={"ADD"} id="add" />
          </form>
        </div>
        <Button text="MODIFY" cb={() => editTask(task._id)} id="modify" />
      </MainContainer>
    </div>
  );
}

export const getServerSideProps = async () => {
  const { data } = await axios.get(url);
  return {
    props: {
      tasks: data,
    },
  };
};
