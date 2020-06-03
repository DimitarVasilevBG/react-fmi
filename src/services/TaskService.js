import axios from 'axios';
import { getLoggedUser } from './UserService';
import { v4 as uuidv4 } from 'uuid';

const apiUrl = "http://localhost:3005";

export function getAllTasks(){
    return axios.get(`${apiUrl}/tasks`);
}

export function createTask(taskData){
    const loggedUser = getLoggedUser();

    if(taskData.id){
        return axios.put(`${apiUrl}/tasks/${taskData.id}`,taskData)
    }
    taskData = {
        ...taskData,
        id: uuidv4(),
        userId: loggedUser.id,
        userName: loggedUser.name 
    }
    return axios.post(`${apiUrl}/tasks`,taskData);
}

export function getTaskById(id){
    return axios.get(`${apiUrl}/tasks/${id}`)
}

export function deleteTask(id){
    return axios.delete(`${apiUrl}/tasks/${id}`);   
}