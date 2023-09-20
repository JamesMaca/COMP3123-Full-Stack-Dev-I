var msg = require("./message.js")

// console.log(msg)
// console.log(module)

// console.log(msg.college)
// console.log(msg.sayHello("James"))

var arit = require("./arithmatics")
var {mul, sub} = require("./arithmatics")

// console.log(arit)
// console.log(arit.sum(1, 1))
// console.log(mul(10, 2))

var Employee = require("./employee")
console.log(Employee)
console.log(typeof Employee)

var e1 = new Employee(1, "James")
e1.print()