import React from 'react'
import {  Link } from "react-router-dom";
import './navbar.css';

export default function Navbar({loggedInUser, setLoggedInUser}) {
    console.log('loggedInUser:', loggedInUser);
    const logout = () => {
        setLoggedInUser(null)
    }

    return(
        <nav className='navbar'>
            <ul className='navList'>
                {/* <li className='navItem'><Link to="/">Home</Link></li> */}
                {loggedInUser ? (
                    <>
                        <li className='navItem'><Link to="employeelist">Employee List</Link></li>
                        <li className='navItem'><Link to="login" onClick={logout}>Logout</Link></li>
                    </>
                ) : (
                    <>
                        <li className='navItem'><Link to="signup">Sign Up</Link></li>
                        <li className='navItem'><Link to="login">Login</Link></li>
                    </>
                )}
                
            </ul>
        </nav>
    )
}