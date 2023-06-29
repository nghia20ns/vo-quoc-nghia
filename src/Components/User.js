import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserItem from './UserItem';
import { v4 as uuidv4 } from 'uuid';
const User = () => {
    const [userState, setUserState] = useState([]);
    const addUser = (username, password) =>{
        const newUser = [...useState,{ 
                id: uuidv4(),
                username,
                password 
            }]
            // = const newtodo = [{viec 1}, {viec 2}, {viec 3}, {id: 4. title, complete: false}]
            setUserState(newUser)
            
    }
    useEffect(()=>{
        const getUsers = async ()=>{
            try {
                const res = await axios.get(
                    'https://jsonplaceholder.typicode.com/users?_limit=10'
                )
                setUserState(res.data)
            } catch (error) {
                console.log(error.message)    
            }
        }
        getUsers()
    },[])

    return (
        <div>
            <section className='product'>
                <div className='container'>
                    <div className="row">

            {userState.map(user =>{
            return <UserItem 
                        key= {user.id} 
                        userProps ={user} 
                        />
           })}
                   </div>
            </div>
        </section>

        </div>

    );
};

export default User;