import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Button from '../components/Buttons'
import styles from '../styles/components/newTodo.module.css'

const newToDo = () => {

    const [content, setContent] = useState({
        title: '',
        done: false,
        createdAt: new Date(),
    })
    const onChange = (e) => {
        const { value, name } = e.target;
        setContent(prevState => ({ ...prevState, [name]: value }));
    }
    const onSubmit = async () => {
        const { title, body } = content;
        await axios.post('/api/tasks/post', { title });
    }
    return (

            <div className={styles.container}>
                <input
                    className={styles.title}
                placeholder={'New Todo'}

                type="text"
                name="title"
                value={content.title}
                onChange={onChange}
            />

                <select className={styles.status} >
                    <option>Status</option>
                    <option>Pending</option>
                    <option>In Progress</option>
                    <option>Done</option>
                </select>

                <Button cb={()=>{ alert('yyayyaya')}} text={'ADD'}/>
            </div>

    );
};

export default newToDo;

