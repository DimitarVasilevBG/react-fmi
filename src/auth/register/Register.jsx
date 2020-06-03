import React, { useState } from 'react';
import './Register.css'
import {Redirect, Link} from 'react-router-dom'
import {register} from '../../services/UserService'
export function Register(){
    const [userData,setUserData] = useState({});

    const [isUserLogged,setUserLogged] = useState(false);

    const onInputChange = (event) =>{
        event.persist();
        setUserData((prevState)=>({
            ...prevState,
            [event.target.name]: event.target.value
        }));
        document.getElementById("register-failed").innerText = ""
    };
    const onFormSubmit = (event) => {
        event.preventDefault();
        register(userData).then(()=>{
            setUserLogged(true);
        })
        .catch((err)=> document.getElementById("register-failed").innerText = err.message)
    };
    return (
        <>
        {isUserLogged && <Redirect to="/"/>}
        <div className="register-wrapper">
             <form className="register-form" onSubmit= {onFormSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" placeholder="Your Email" onChange={onInputChange} required />               
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" name="password" placeholder="Password" onChange={onInputChange} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input type="number" className="form-control" id="age" name="age" placeholder="Age" onChange={onInputChange} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="name" className="form-control" id="name" name="name" placeholder="Your Name" onChange={onInputChange} required/>
                    
                </div>
                <div>
                    <button type="submit" className="btn btn-primary">Register</button>
                </div>
                   
                <Link to="/login">Already have an account?</Link>
                <div>
                    <span id="register-failed" style={{color: "red"}}></span>
                </div>  
            </form>
        </div>
        </>
    )
}