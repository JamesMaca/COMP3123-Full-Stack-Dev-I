import React, { Component } from "react";
import EmployeeContext from "../context/EmployeeContext";
import UserContext from "../context/UserContext";
import UserChild1 from "./UserChild1";

const user = {
  name: "Julia Trusler",
  city: "Cwood",
};

export default class Employee extends Component {
  static contextType = EmployeeContext;

  componentDidMount() {
    console.log(this.context);
  }

  render() {
    return (
      <div>
        <h3>Employee</h3>
        <p>Employee ID: {this.context.eid}</p>
        <p>Employee Name: {this.context.display()}</p>
        <p>Employee Salary: {this.context.salary}</p>
        <UserContext.Provider value={user}>
          <UserChild1 />
        </UserContext.Provider>
      </div>
    );
  }
}
