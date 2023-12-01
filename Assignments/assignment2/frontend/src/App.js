import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar.js';
import Login from './components/Login/login';
import Signup from './components/Signup/signup';
import { render } from "react-dom";
import { Link, BrowserRouter as Router, Switch, Route, RouterProvider, Routes } from "react-router-dom";


function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login />}/>

      </Routes>
    </Router>

  );
}

export default App;
