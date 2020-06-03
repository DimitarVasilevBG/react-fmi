import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';

const apiUrl = "http://localhost:3005";

export function getLoggedUser(){
    return JSON.parse(localStorage.getItem("loggedUser"));
}

export function getAllUsers(){
    return axios.get(`${apiUrl}/users`);
}

export function getUserById(id)
{
    return axios.get(`${apiUrl}/users/${id}`);
}

export function updateUser(user)
{
    return axios.put(`${apiUrl}/users/${user.id}`,user);
}

export async function login(userData){
    const users = (await getAllUsers()).data;

    const loggedUser = users.find(u => u.email === userData.email && u.password.toString() === userData.password)
    if(!loggedUser)
        throw new Error("Invalid credentials, try again!");

    if(!loggedUser.isActive) throw new Error("User account is not active!")

    if(loggedUser){
        localStorage.setItem('loggedUser',JSON.stringify(loggedUser));
        return;
    }
}

export function logout(){
    localStorage.removeItem("loggedUser");    
}

export function deleteUser(id){
    return axios.delete(`${apiUrl}/users/${id}`);   
}


export async function register(userData){

    const users = (await getAllUsers()).data;

    if(users.find(u => u.email === userData.email))
    {
        throw new Error("User already exists!");
    }
    userData = {
        ...userData,
        isActive:true,
        isAdmin:false,
        id: uuidv4()
    }

   return await axios.post(apiUrl+'/users',userData)
}