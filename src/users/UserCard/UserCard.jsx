import React from 'react';
import './UserCard.css'

export function UserCard({ user, onDelete}) {
    return (
        <div className="column" style={{ margin: "20px" }}>
            <div className="card" style={{ width: '18rem' }}>
                <div className="card-header">
                    Name: {user.name}
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Email: {user.email}</li>
                    <li className="list-group-item">Age: {user.age}</li>
                </ul>
                <div className="card-body">
                    <a href = {`users/edit/${user.id}`} className="card-link">Edit</a>
                    <a href= "/users" className="card-link" onClick= {() => onDelete(user.id)}>Delete</a>
                </div>
            </div>
        </div>
    );
}