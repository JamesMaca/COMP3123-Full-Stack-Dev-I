import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import EmployeeContext from "./context/EmployeeContext";
import Home from "./component/Home";
import HomeWithNoContext from "./component/HomeWithNoContext";
import Employee from "./component/Employee";

const employee = {
  eid: 1,
  firstName: "James",
  lastName: "Mac",
  salary: "5000",
  display: function () {
    return this.firstName + " " + this.lastName;
  },
  setName: function (fnm) {
    this.firstName = fnm;
  },
};

function App() {
  const [emp, setEmp] = useState(employee);

  return (
    <div>
      <h1>React Context API Example</h1>
      <EmployeeContext.Provider value={employee}>
        <Home />
        <Employee />
      </EmployeeContext.Provider>
      {/* <HomeWithNoContext /> */}
    </div>
  );
}

export default App;
