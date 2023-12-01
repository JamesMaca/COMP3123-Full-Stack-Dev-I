import React from 'react'
import './signup.css'

export default function Signup() {
  return (
    <div className='signup-container'>
        <h1>Sign Up</h1>
        <form onSubmit="#">
            <div className='form-group'>
                <input type="text" id="username" placeholder="Username"/>
            </div>
            <br />
            <div className='form-group'>
                <input type="text" id="email" placeholder="Email"/>
            </div>
            <br />
            <div className='form-group'>
                <input type="text" id="password" placeholder="Password"/>
            </div>
            <br />
            <div className='form-group'>
                <input type="text" id="confirm-password" placeholder="Confirm Password"/>
            </div>
            <br />
            <div className='form-group'>
                <button type='submit'>Sign Up</button>
            </div>
        </form>
</div>
  )
}
