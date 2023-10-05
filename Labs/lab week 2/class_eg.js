

class Employee{
    constructor(eid, enm, sal){
        this.eid = eid
        this.enm = enm
        this.sal = sal
    }

    display(){
        console.log(`Employee ID: ${this.eid}`)
        console.log(`Employee Name: ${this.enm}`)
        console.log(`Employee Salary: ${this.sal}`)
    }

    print = () => {
        console.log(`Employee ID: ${this.eid}`)
        console.log(`Employee Name: ${this.enm}`)
        console.log(`Employee Salary: ${this.sal}`)
    }
}

var e1 = new Employee(1, "James", 5000)
e1.display()
e1.print()

console.log(typeof Employee)
console.log(typeof e1)

// //Class Declaration
// class Student{
//     constructor(sid, snm){
//         this.sid = sid
//         this.snm = snm,
//         this.res = "PASS"
//     }

//     display(){
//         console.log(`Student ID  : ${this.sid}`)
//         console.log(`Student Name: ${this.snm}`)
//         //get property
//         console.log(`Student Resu: ${this.result}`)
//     }

//     print = () => {
//         console.log(`Student ID  : ${this.sid}`)
//         console.log(`Student Name: ${this.snm}`)
//     }

//     //readonly
//     get result(){
//         return this.res
//     }
// }

// var s1 = new Student(1, "Adrain, Vargas")
// s1.display()
// s1.print()
// console.log(typeof s1.result) //string

// //Class Expression
// let Employee = class{
//     constructor(eid, enm, sal){
//         this.eid = eid
//         this.enm = enm
//         this.salary = sal
//     }

//     display(){
//         console.log(`Employee ID  : ${this.eid}`)
//         console.log(`Employee Name: ${this.enm}`)
//         console.log(`Salary       : ${this.salary}`)
//     }
//     print = () => {
//         console.log(`Employee ID  : ${this.eid}`)
//         console.log(`Employee Name: ${this.enm}`)
//         console.log(`Salary       : ${this.salary}`)
//     }
// }

// var e1 = new Employee(1, "Stefan Kepinsk", 5000)
// e1.display()
// e1.print()

// var e2 = new Employee(2, "Harlan Ferguson", 5500)
// e2.display()
// e2.print()

// console.log(typeof s1)  //object
// console.log(typeof e1)  //object
// console.log(typeof Student)  //function
// console.log(typeof Employee) //function

// class FullTimeStudent extends Student{
//     constructor(sid, snm, course){
//         super(sid, snm)
//         this.course = course
//     }

//     display(){
//         super.display()
//         console.log(`Course Name: ${this.course}`)
//     }
// }

// console.log("------ Full Time Student")
// var fs1 = new FullTimeStudent(10, "Kidus Woldeamlak Bewket", "CSAT")
// fs1.display()