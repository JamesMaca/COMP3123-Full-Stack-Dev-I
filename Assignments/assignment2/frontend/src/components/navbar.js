import React from 'react'
import {  Link } from "react-router-dom";
import './Navbar/navbar.css';

export default function Navbar() {
    return(
        <nav className='navbar'>
            <ul className='navList'>
                <li className='navItem'><Link to="/">Home</Link></li>
                <li className='navItem'><Link to="signup">Sign Up</Link></li>
                <li className='navItem'><Link to="login">Login</Link></li>
            </ul>
        </nav>
    )
}