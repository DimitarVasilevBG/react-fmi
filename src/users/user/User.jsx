import React, { useState, useEffect } from 'react';
import { getUserById } from '../../services/UserService';
import {UserCard} from '../UserCard/UserCard'

export function User(props) {
    const [user, setEditedUser] = useState({});

    useEffect(() => {
        getUserById(props.computedMatch.params.id).then((currentUser) => {
            setEditedUser(currentUser.data);
        })
    }, {});


    return (
        <UserCard user={user}></UserCard>
    );
}