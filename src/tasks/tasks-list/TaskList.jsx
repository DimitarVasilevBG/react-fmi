import React, { useState, useEffect } from 'react';
import { getAllTasks,deleteTask} from '../../services/TaskService';
import { TaskCard } from '../task-card/TaskCard';

export function TaskList(){
    const[tasks,setTasks] = useState([]);

    useEffect(() => {
        getAllTasks().then((apiTasks) => {
            setTasks(apiTasks.data);
        })
    },[]);

    const onTaskDelete = (id) =>
    {
        deleteTask(id).then(()=> {


        }).catch((err) => console.log(err))
    }

    return (
        <div className="container">
            <div className="row">
                {tasks.map((task) => <TaskCard task={task} key={task.id} onDelete = {onTaskDelete}></TaskCard>)}
            </div>
        </div>
    )
}