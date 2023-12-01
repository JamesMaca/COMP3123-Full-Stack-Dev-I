import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import Employee from "./Employee";
import EmployeeContext from "../context/EmployeeContext";

export default function UserChild1() {
  const userContext = useContext(UserContext);
  const employeeContext = useContext(EmployeeContext);

  return (
    <div>
      <h3>UserChild1</h3>
      <UserContext.Consumer>
        {(user) => {
          return (
            <div>
              <p>User Name: {user.name}</p>
              <p>User City: {user.city}</p>
            </div>
          );
        }}
      </UserContext.Consumer>

      <EmployeeContext.Consumer>
        {(employee) => {
          return (
            <div>
              <p>Employee ID: {employee.eid}</p>
              <p>Employee Name: {employee.display()}</p>
              <p>Employee Salary: {employee.salary}</p>
            </div>
          );
        }}
      </EmployeeContext.Consumer>
    </div>
  );
}
