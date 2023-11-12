import React, { Component, useState } from 'react'

export default function UserFormFunctions() {

    var [user, setUser] = useState({
        email: '',
        password: '',
        gender: '',
        country: ''
    })

    const countries = ['India', 'Canada', 'UK', 'USA']


    const onValueChanged = (event) => {
        event.preventDefault()
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
        console.log(user)
    }

    return (
        <div>
        <h1>UserFormFunctions</h1>
        <form onSubmit={(e) => onSubmitForm(e)} > 
                    <input 
                        name='email'
                        type="text"
                        onChange={(e) => onValueChanged(e)} 
                        placeholder="Enter Email" />

                    <input 
                        name='password'
                        type="password"
                        onChange={(e) => onValueChanged(e)} 
                        placeholder="Enter Password" />

                    <input 
                        name='gender'
                        type="radio"
                        value="Male"
                        onChange={(e) => onValueChanged(e)} /> Male
                    
                    <input 
                        name='gender'
                        type="radio"
                        value="Female"
                        onChange={(e) => onValueChanged(e)} /> Female
                    
                    <select name='country' onChange={(e) => onValueChanged(e)}>
                        {
                            countries.map((country) => (
                                    <option key={country} value={country}>{country}</option>
                            ))
                        }
                    </select>
                    
                    <input 
                        name='btnSubmit'
                        type="submit"
                        value="Login" />
                </form>    
    </div>
    )
    
}
