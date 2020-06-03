import React, { useState, useEffect } from 'react';
import { createTask, getTaskById } from '../../services/TaskService';
import { Redirect } from 'react-router-dom';
import './TaskEdit.css'



export function TaskEdit(props){
    const [currentTask,setTask] = useState({});
    const [shouldRedirect, setShouldRedirect] = useState(false);


    useEffect(() => {
        if (props.computedMatch.params.id) {
            getTaskById(props.computedMatch.params.id).then((result) => {
                setTask(result.data);
            });
        }
    }, [props.computedMatch.params.id])

    const onInputChange = (event) =>
    {
        event.persist();
        setTask((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        createTask(currentTask).then(() => {
            setShouldRedirect(true);
        })
    }

    return(
        <>
        { shouldRedirect && <Redirect to="/tasks" /> }
        <div className="task-edit-wrapper">
            <form className="task-edit-form" onSubmit={onFormSubmit}>
                <div className= "form-group">
                    <label labelFor="title">Title:</label>
                    <input type="text" className="form-control" id= "title" name="title" onChange={onInputChange} value = {currentTask.title}></input>
                </div>
                <div className= "form-group">
                    <label labelFor="description">Description:</label>
                    <textarea className="form-control" id= "description" name="description" onChange={onInputChange} value = {currentTask.description}></textarea>
                </div>
                <button type="submit" className="btn-primary">Create</button>
            </form>
        </div>
        </>
    )
}