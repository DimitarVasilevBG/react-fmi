import React, { useState, useEffect } from 'react';
import { getTaskById } from '../../services/TaskService';
import { TaskCard } from '../task-card/TaskCard';

export function Task(props) {
    const [task, setEditedTask] = useState({});

    useEffect(() => {
        getTaskById(props.computedMatch.params.id).then((currentTask) => {
            setEditedTask(currentTask.data);
        })
    }, {});
    
    return (
        <TaskCard task={task}></TaskCard>
    );
}