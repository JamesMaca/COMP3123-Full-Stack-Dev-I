import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import './viewEmployee.css'
import axios from 'axios';

export default function ViewEmployee() {
  const { _id } = useParams();
  const [employee, setEmployee] = useState({ _id: ' ', first_name: '', last_name: '', email: '', gender:' ', salary: '' });

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


  return (
    <div className='empDetails-container'>
        
        <h2>View Employee Details</h2>
        <p>Employee ID: {employee._id}</p>
        <p>Employee Name: {employee.first_name} {employee.last_name}</p>
        <p>Employee Emai: {employee.email}</p>
        <p>Employee gender: {employee.gender}</p>
        <p>Employee Password: {employee.salary}</p> 
    </div>
  )
}
