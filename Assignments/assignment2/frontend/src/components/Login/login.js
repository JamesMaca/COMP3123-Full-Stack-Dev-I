import React from 'react'
import './login.css'

export default function Login() {
  return (
    <div className='login-container'>
        <h1>Login</h1>
        <form onSubmit="#">
            <div className='form-group'>
                <input type="text" id="username" placeholder="username/email"/>
            </div>
            <br />
            <div className='form-group'>
                <input type="text" id="password" placeholder="password"/>
            </div>
            <br />
            <div className='form-group'>
                <button type='submit'>Login</button>
            </div>
        </form>
    </div>
  )
}
