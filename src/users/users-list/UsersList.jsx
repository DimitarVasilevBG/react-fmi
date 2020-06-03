import React, { useEffect, useState } from 'react';
import { getAllUsers, deleteUser, getLoggedUser } from '../../services/UserService';
import { UserCard } from '../UserCard/UserCard';

export function UsersList() {
    const [users, setUsers] = useState([]);
    const currentUserId = getLoggedUser().id;
    useEffect(() => {
        getAllUsers().then((apiUsers) => {
            setUsers(apiUsers.data);
        })
    }, []);

    const onUserDelete = (id) =>
    {
        deleteUser(id).then(()=> {


        }).catch((err) => console.log(err))
    }

    return (
        <div className="container">
            <div className="row">
                {users.filter(user => user.id != currentUserId).map((user) => <UserCard user={user} key={user.id} onDelete = {onUserDelete} ></UserCard>)}
            </div>
        </div>
    );
}