import React, { useState } from 'react';
import {Link, Redirect} from 'react-router-dom'
import { logout, getLoggedUser } from '../../../services/UserService';

export default function Header(){
    const [isLoggedOut,setLogoutFlag] = useState(false); 
    const loggedUser = getLoggedUser();
    const onLogout = (event) => {
        logout();
        setLogoutFlag(true);

    }


    return(
    <>
    {isLoggedOut && <Redirect to="/login"/>}
    <div className="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">           
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link to='/' className='nav-link'>Home</Link>
                </li>
                {loggedUser && loggedUser.isAdmin && 
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Users
                    </a>                    
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">                    
                        <Link to ='/users' className="dropdown-item">List</Link>
                        <Link to ='/users/create' className="dropdown-item">Create User</Link>                 
                    </div>                    
                </li>
                }
                
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Tasks
                    </a>                    
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">                    
                        <Link to ='/tasks' className="dropdown-item">List</Link>
                        <Link to ='/tasks/create' className="dropdown-item">Create Task</Link>                 
                    </div>                    
                </li>                
                </ul>
                <span className="logout btn" onClick={onLogout} >Logout</span>
            </div>
        </nav>
    </div>
    </>
    );
}
