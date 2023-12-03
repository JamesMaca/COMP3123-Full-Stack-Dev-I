import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate  } from 'react-router-dom'
import './updateEmployee.css'
import axios from 'axios';


export default function UpdateEmployee() {
  const { _id } = useParams();
  console.log(_id)
  const [employee, setEmployee] = useState({ _id: ' ', first_name: '', last_name: '', email: '', gender:' ', salary: '' });
  const navigate = useNavigate()

  useEffect(() => {
    const fetchAllEmployeeByID = async () => {
      try {
        const res = await axios.get(`http://localhost:3030/api/v1/emp/employees/${_id}`)
        setEmployee(res.data)
      } catch (error) {
        console.error("Error finding employee by id: " + error)
      }
      
    }
    fetchAllEmployeeByID()
  }, [_id])

  const updateEmployee = (e) => {
    const { id, value } = e.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [id]: value,
    }))
  }

  const submitChange = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3030/api/v1/emp/employees/${_id}`, employee)
      navigate('/employeeList')
    } catch (error) {
      console.error('Error updating employee: ' + error);
    }
  }

  return (
  <div className='updateEmp-container'>
    <h2>Update Employee</h2>
    <form onSubmit={submitChange}>
      <div className='form-group'>
        <label htmlFor="first_name">First Name:</label>
        <input type="text" id="first_name" value={employee.first_name} onChange={updateEmployee}/>
      </div>
      <div className='form-group'>
        <label htmlFor="last_name">Last Name:</label>
        <input type="text" id="last_name" value={employee.last_name} onChange={updateEmployee}/>
      </div>
      <div className='form-group'>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" value={employee.email} onChange={updateEmployee}/>
      </div>
      <div className='form-group'>
        <label htmlFor="gender">Gender:</label>
        <input type="text" id="gender" value={employee.gender} onChange={updateEmployee}/>
      </div>
      <div className='form-group'>
        <label htmlFor="salary">Salary:</label>
        <input type="text" id="salary" value={employee.salary} onChange={updateEmployee}/>
      </div>
      <div className='form-group'>
        <button type='submit'>Update</button>
        <Link to='/employeelist'>
          <button id='cancelBtn'>Cancel</button>
        </Link>
      </div>
    </form>
  </div>
  )
}
