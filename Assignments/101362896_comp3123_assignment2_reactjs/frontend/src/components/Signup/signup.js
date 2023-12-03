import React, { useEffect, useState } from 'react'
import './signup.css'
import axios from 'axios'

export default function Signup() {
    const [newUser, setNewUser] = useState({
        username: '',
        email:'',
        password: ''
    })

    const creatNewEmployee = (e) => {
        const {id, value} = e.target;
        setNewUser((prevUser) => ({
            ...prevUser,
            [id]: value,
        }))
    }

    const addNewUser = async (e) =>{
        e.preventDefault()
        try {
            await axios.post('http://localhost:3030/api/v1/user/signup', newUser)
            window.location.href = '/login';
        } catch (error) {
            console.error('Error signing up: ' + error);
        }
    }


    return (
        <div className='signup-container'>
            <h1>Sign Up</h1>
            <form onSubmit={addNewUser}>
                <div className='form-group'>
                    <input type="text" id="username" placeholder="Username" onChange={creatNewEmployee}/>
                </div>
                <br />
                <div className='form-group'>
                    <input type="text" id="email" placeholder="Email" onChange={creatNewEmployee}/>
                </div>
                <br />
                <div className='form-group'>
                    <input type="text" id="password" placeholder="Password" onChange={creatNewEmployee}/>
                </div>
                <br />
                <div className='form-group'>
                    <button type='submit'>Sign Up</button>
                </div>
            </form>
        </div>
    )
}
