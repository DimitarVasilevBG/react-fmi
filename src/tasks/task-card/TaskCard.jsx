import React from 'react';

const cardStyle = {
    maxWidth:'18rem'
}

export function TaskCard({ task, onDelete}) {

    return (
        <div className="column" style={{ margin: "20px" }}>
            <div className="card" style={{ width: '18rem' }}>
            <div className="card-header">
                Title: {task.title}
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Author: {task.userName}</li>
                <li className="list-group-item">Description: {task.description}</li>
            </ul>
            <div className="card-body">
                <a href = {`tasks/edit/${task.id}`} className="card-link">Edit</a>
                <a href= "/tasks" className="card-link" onClick= {() => onDelete(task.id)}>Delete</a>
            </div>
        </div>


    </div>
    )
}