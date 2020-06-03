import React, { useState, useEffect } from 'react';
import { getUserById, updateUser, register } from '../../services/UserService'
import './UserEdit.css'
import { Redirect } from 'react-router-dom';

export function UserEdit(props) {
    const [editedUser, setEditedUser] = useState({});   
    const [shouldRedirect, setShouldRedirect] = useState(false);
    

    const onInputChange = (event) => {
        event.persist();
        setEditedUser((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }

    useEffect(() => {
        if(props.computedMatch.params.id){
            getUserById(props.computedMatch.params.id).then((currentUser) => {
                setEditedUser(currentUser.data);
            })
        }       
    },[]);

    const onCheckBoxChange = (event) => {
        event.persist();
        setEditedUser((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.checked
        }))
    };


    const onSubmit = (event) => {
        event.preventDefault();
        if(props.computedMatch.params.id){
            updateUser(editedUser).then(() => {
                setShouldRedirect(true);            
            }).catch((err) => console.log(err));
        }
        else
        {
            register(editedUser).then(() => {
                setShouldRedirect(true);            
            }).catch((err) => console.log(err));
        }
    }
    return (
        <>
        {shouldRedirect && <Redirect to="/users"/>}
        <div className="user-edit-wrapper">
            <form className="user-edit-form" onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email address:</label>
                    <input type="email" className="form-control" id="email" name="email" placeholder="Your Email" onChange={onInputChange} value={editedUser.email} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" className="form-control" id="password" name="password" placeholder="Password" onChange={onInputChange} value={editedUser.password} />
                </div>
                <div className="form-group">
                    <label htmlFor="age">Name:</label>
                    <input type="text" className="form-control" id="name" name="name" placeholder="Name" onChange={onInputChange} value={editedUser.name} />
                </div>
                <div className="form-group">
                    <label htmlFor="age">Age:</label>
                    <input type="number" className="form-control" id="age" name="age" placeholder="Age" onChange={onInputChange} value={editedUser.age} />
                </div>
                <div className="form-group">
                    <label htmlFor="isActive">Is Active:</label>
                    <input type="checkbox" className="form-control" id="isActive" name="isActive" onChange={onCheckBoxChange}  checked={editedUser.isActive}/>
                </div>
                <div className="form-group">
                    <label htmlFor="isAdmin">Is Admin:</label>
                    <input type="checkbox" className="form-control" id="isAdmin" name="isAdmin" onChange={onCheckBoxChange} checked={editedUser.isAdmin}/>
                </div>
                <button type="submit" className="btn btn-primary">Edit</button>
            </form>
        </div>
        </>
    );
}