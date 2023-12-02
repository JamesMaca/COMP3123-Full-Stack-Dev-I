import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/navbar.js';
import Login from './components/Login/login';
import Signup from './components/Signup/signup';
import { render } from "react-dom";
import { Link, BrowserRouter as Router, Switch, Route, RouterProvider, Routes } from "react-router-dom";
import EmployeeList from './components/Employee/employeelist.js';
import AddEmployee from './components/Employee/addEmployee.js';
import UpdateEmployee from './components/Employee/updateEmployee.js';
import ViewEmployee from './components/Employee/viewEmployee.js';
import React, { useState } from 'react';




function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <Router>
      <Navbar loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>
      <Routes>        
        {/* <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login setLoggedInUser={setLoggedInUser}/>}/> */}
        
        {loggedInUser ? (
            <>
              <Route path='/employeeList' element={<EmployeeList setLoggedInUser={setLoggedInUser}/>} />
              <Route path="/addEmployee" element={<AddEmployee />} />
              <Route path="/updateEmployee/:_id" element={<UpdateEmployee />} />
              <Route path="/viewEmployee/:_id" element={<ViewEmployee />} />
            </>
        ) : (
          <>
            <Route path='/signup' element={<Signup />}/>
            <Route path='/login' element={<Login setLoggedInUser={setLoggedInUser}/>}/>
          </>
        )}

          {/* NAVBAR ROUTES ------------------------------ */}

        
      </Routes>
    </Router>
    

  );
}

export default App;
