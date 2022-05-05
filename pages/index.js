import Head from "next/head";
import NavBar from "../components/NavBar";
import MainContainer from "../components/MainContainer";
import React, {useState} from "react";
import styles from "../styles/components/todoList.module.css";
import Button from "../components/Buttons";
import axios from 'axios'
const url = 'http://localhost:3000/api/task'


export default function Home(props) {
    const [todos, setTodos] = useState([props.tasks]);
    const [task, setTask] = useState({
        title: "",
    });
    const onChange = ({currenTarget: input}) => {
        input.value ===''?setTask({title:''}):
        setTask((prevState) => ({ ...prevState, title: input.value }));
    };
    const editTask=(id)=>{
        const currentTask = todos.filter((task =>task._id === id));
        setTask(currentTask[0]);

    }

    const addTask = async (e)=>{
        e.preventDefault();
        try{

            if (task._id){
                const [data] = await axios.put(url+ task._id ,{title:task.title})
                const originalTasks =[...todos];
                const index = originalTasks.findIndex(t=>t.id=== task.id);
                originalTasks[index]=data.data;
                setTodos(originalTasks);
                setTask({title:''});
                console.log(data.message)
            }else{
                const {data} = await axios.post(url,task);
                setTodos(prev=>[...prev,data.data]);
                setTask({title:''})
                console.log(data.message)
            }
        }catch (error){
     console.error(error)
        }
    }

const updateTask= async ()=>{
        try{
            const originalTasks=[...todos];
            const index =originalTasks.findIndex(t => t.id ===t._id)
            const {data} = await axios.put(url+'/'+id,{completed:!originalTasks[index].completed})
            originalTasks[index] = data.data;
            setTodos(originalTasks);
            console.log(data.message)

        }catch (e) {
        console.log(error)
        }

    }


    const deleteTask = async (id )=>{
        try{

            const {data} = await axios.delete(url+'/'+id);
            setTodos((prev=>prev.filter(task=>task._id!==id))
            )
            console.log(data.message)
        }catch (error){
        console.log(error)
        }
    }


  return (
    <div className="appContainer">
      <Head>
        <title>Next JS - Task Manager</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap" rel="stylesheet"/>
      </Head>
      <NavBar />
      <MainContainer>


          <div className={styles.container}>
              <form onSubmit={addTask}>
              <input
                  className={styles.title}
                  placeholder={"New Todo"}
                  type="text"
                  name="title"
                  value={task.title}
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
              </form>
          </div>

          {/* TODO RENDERED  */}
          {todos.map((task) => (
              <div key={task._id} className={styles.list}>
                  {/* <input type='checkbox' checked={task.completed } onChange={() =>{
                      updateTask(task._id);
                  }
                  } /> */}
                  <p classname={task.completed ? styles.task_text + ''+ styles.line_through :  styles.task_text}  >
                      {task.title}
                  </p>
                  <button onClick={()=>{editTask(task._id)}} className={styles.edit_task}>&#9998</button>
                  <button onClick={()=>{deleteTask(task._id)}} className={styles.remove_task}>&#10006</button>
              </div>
          ))}
          {todos.length === 0 && <h2 className={styles.no_task}>No Tasks</h2>}



      </MainContainer>
    </div>
  );
}

export const getServerSideProps = async ()=>{
    const {data} = await axios.get(url)
    return {
        props:{
            tasks:data
        }
    }
}
