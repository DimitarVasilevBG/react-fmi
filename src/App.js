import React from 'react';
import './App.css';
import Layout from './components/layout/Layout';
import {Switch} from 'react-router-dom';
import {Login} from './auth/login/Login'
import {Register} from './auth/register/Register'
import { AuthenticatedRoute } from './guards/AuthenticatedRoute';
import { NonAuthenticatedRoute } from './guards/NonAuthenticatedRoute';

function App() {
  return (
    <div className="App">   
      <Switch>
        <NonAuthenticatedRoute exact path = "/login" component={Login}/>
        <NonAuthenticatedRoute exact path = "/register" component={Register}/>
        <AuthenticatedRoute path = "/" component={Layout}/>
      </Switch> 
    </div>
  );
}

export default App;
