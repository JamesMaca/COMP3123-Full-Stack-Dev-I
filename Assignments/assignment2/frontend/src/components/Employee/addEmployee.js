import React, { useEffect, useState } from 'react'
import './addEmployee.css'
import { Link, useNavigate  } from 'react-router-dom'
import axios from 'axios'

export default function AddEmployee() {
    const navigate = useNavigate()
    const [newEmployee, setNewEmployee] = useState({
        first_name: ' ',
        last_name: '',
        email: '',
        gender: '',
        salary: '',
    })

    const creatNewEmployee = (e) => {
        const { id, value } = e.target;
        setNewEmployee((prevEmployee) => ({
          ...prevEmployee,
          [id]: value,
        }))
      }
    
    // const addNewEmployee = async (e) => {
    //     e.preventDefault()
    //     try {
    //         await axios.post('http://localhost:3030/api/v1/emp/employees', newEmployee)
    //         navigate('/employeeList')
    //     } catch (error) {
    //         console.error('Error adding new employee: ' + error);
    //     }
    // }

    const addNewEmployee = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3030/api/v1/emp/employees', newEmployee);
            console.log('Response:', response.data); // Log the response data for debugging
            navigate('/employeeList');
        } catch (error) {
            console.error('Error adding new employee:', error);
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error('Server response data:', error.response.data);
                console.error('Server response status:', error.response.status);
                console.error('Server response headers:', error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                console.error('No response received from the server');
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error message:', error.message);
            }
        }
    }
    

  return (
    <div className='addEmployee-container'>
        <h1>Add Employee</h1>
        <form onSubmit={addNewEmployee}>
            <br />
            <div className='form-group'>
                <input type="text" id="first_name" placeholder="First Name" onChange={creatNewEmployee}/>
            </div>
            <div className='form-group'>
                <input type="text" id="last_name" placeholder="Last Name" onChange={creatNewEmployee}/>
            </div>
            <div className='form-group'>
                <input type="text" id="email" placeholder="Email" onChange={creatNewEmployee}/>
            </div>
            <div className='form-group'>
                <input type="text" id="gender" placeholder="Gender" onChange={creatNewEmployee}/>
            </div>
            <div className='form-group'>
                <input type="text" id="salary" placeholder="Salary" onChange={creatNewEmployee}/>
            </div>
            <div className='form-group'>
                <button type='submit'>Save</button>
                <Link to='/employeelist'>
                    <button id='cancelBtn'>Cancel</button>
                </Link>
            </div>
        </form>
    </div>
  )
}
