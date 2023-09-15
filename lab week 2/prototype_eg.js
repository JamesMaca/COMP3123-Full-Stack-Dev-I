function Student(sid, snm){
    this.sid = sid
    this.snm = snm
}

Student.prototype.display = function(){
    console.log(`Student ID: ${this.sid}`)
    console.log(`Student Name: ${this.snm}`)
}

//Not Allowed to access this pointer as its Arrow function
Student.prototype.print = () => {
    console.log(`Student ID: ${this.sid}`)
    console.log(`Student Name: ${this.snm}`)
}

var s1 = new Student(1, "Jimmy")
console.log(typeof s1)
console.log(typeof Student)
console.log(s1)

s1.display()
s1.print()

// function Student(sid, snm) {
//     if(!new.target){
//         throw "Must use new Keyword to create Student Object"
//     }
//     this.sid =sid
//     this.snm = snm
// }

// Student.prototype.display = function() {
//     console.log(`Student ID  : ${this.sid}`)
//     console.log(`Student Name: ${this.snm}`)
// }

// //NOT allowed to access this pointer as it's Arrow function
// Student.prototype.print = () => {
//     console.log(`Student ID  : ${this.sid}`)
//     console.log(`Student Name: ${this.snm}`)
// }

// var s1 = new Student(1, "Pritesh")
// console.log(typeof s1)
// console.log(typeof Student)
// console.log(s1)

// s1.display()
// s1.print()