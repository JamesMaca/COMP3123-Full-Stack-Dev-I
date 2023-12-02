import axios from 'axios';
import './login.css'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Login({setLoggedInUser}) {
    const [username, setUsername] = useState(' ')
    const [password, setPassword] = useState(' ')
    const navigate = useNavigate()

    const login = async (e) => {
        e.preventDefault()

        try {
            const res = await axios.post(`http://localhost:3030/api/v1/user/login?username=${username}&password=${password}`)
            console.log(res.data)
            console.log(res.status)
            console.log(res.data.username)
            if(res.data){ //check if login was succesful
                setLoggedInUser({username: res.data.username})
                navigate('/employeeList')
            }else{
                alert('Username or password are incorrect')
            }
        } catch (error) {
            console.log("Error during login: " + error)
        }

    }

    return (
        <div className='login-container'>
            <h1>Login</h1>
            <form onSubmit={login}>
                <div className='form-group'>
                    <input type="text" id="username" placeholder="username/email" onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <br />
                <div className='form-group'>
                    <input type="text" id="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <br />
                <div className='form-group'>
                    <button type='submit'>Login</button>
                </div>
            </form>
        </div>
    )
}
