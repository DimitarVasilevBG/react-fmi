import React, { useState } from 'react';
import {login} from '../../services/UserService'
import './Login.css'
import { Redirect, Link } from 'react-router-dom';

export function Login(props){
    const [userData,setUserData] = useState({});

    const [isUserLogged,setUserLogged] = useState(false);

    const onInputChange = (event) =>{
        event.persist();
        setUserData((prevState)=>({
            ...prevState,
            [event.target.name]: event.target.value
        }));
        document.getElementById("login-failed").innerText = "";

    };
    const onFormSubmit = (event) => {
        event.preventDefault();
        login(userData).then(()=>{
            setUserLogged(true);
        })
        .catch((err)=> document.getElementById("login-failed").innerText = err.message)
    };
    return (
        <>
        {isUserLogged && <Redirect to="/"/>}
        <div className="login-wrapper">
            <form className="login-form" onSubmit= {onFormSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" placeholder="Your Email" onChange={onInputChange} required/>               
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" name="password" placeholder="Password" onChange={onInputChange} required/>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Login</button>
                    
                </div> 
                <Link to ="/register">Don't have an account? Register here!</Link>  
                <div>
                    <span id="login-failed" style={{color: "red"}}></span>
                </div>            
            </form>
        </div>
        </>
    );
}