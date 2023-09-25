//TODO - Create Employee Module here and export to use in index.js
class Employee{
    constructor(id, firstName, lastName, email, Salary){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.Salary = Salary;
    }

}

module.exports = Employee;

let employees = [
    {id: 1, firstName: "Pritesh", lastName: "Patel", email: "pritesh@gmail.com", Salary:5000},
    {id: 2, firstName: "Krish", lastName: "Lee", email: "krish@gmail.com", Salary:4000},
    {id: 3, firstName: "Racks", lastName: "Jacson", email: "racks@gmail.com", Salary:5500},
    {id: 4, firstName: "Denial", lastName: "Roast", email: "denial@gmail.com", Salary:9000}
]


//Methods -----------------------------------------

Employee.allEmps = () => {
    return employees;
}

Employee.getNamesAscending = () => {
    return employees.map(employee => `${employee.firstName} ${employee.firstName}`).sort();
}

Employee.totalSalary = () =>{
    let sumSalary = 0;
    employees.forEach((emp) => {
        sumSalary += emp.Salary;
    });
    return `Sume of all salary = ${sumSalary}`;
}