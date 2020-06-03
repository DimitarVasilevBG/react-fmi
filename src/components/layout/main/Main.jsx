import React from 'react';
import { UsersList }from '../../../users/users-list/UsersList'
import {Switch} from 'react-router-dom'
import { User } from '../../../users/user/User';
import { AuthenticatedRoute } from '../../../guards/AuthenticatedRoute';
import { UserEdit } from '../../../users/user-edit/UserEdit';
import { TaskList } from '../../../tasks/tasks-list/TaskList';
import { TaskEdit } from '../../../tasks/task-edit/TaskEdit';
import { Task } from '../../../tasks/task/Task';
export default function Main(props){
    return (
        <div className="main-content">
            <Switch>
                
                <AuthenticatedRoute exact path='/users' admin={true} component = {UsersList}/>
                <AuthenticatedRoute exact path='/users/:id ' admin={true} component = {User}/>
                <AuthenticatedRoute exact path='/users/edit/:id' admin={true} component = {UserEdit}/>
                <AuthenticatedRoute exact path='/users/create' admin={true} component = {UserEdit}/>
                
                <AuthenticatedRoute exact path='/tasks' component = {TaskList}/>
                <AuthenticatedRoute exact path='/tasks/edit/:id' component = {TaskEdit}/>
                <AuthenticatedRoute exact path='/tasks/create' component = {TaskEdit}/>
                <AuthenticatedRoute exact path='/tasks/:id ' component = {Task}/>


            </Switch>
        </div>
    );
}