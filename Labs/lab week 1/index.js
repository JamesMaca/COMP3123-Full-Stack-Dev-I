console.log("Hello World");

var a = 100; //global scope
let b = 100; //stay within that block
const c = 100; //cannot change value

console.log(typeof a);

stud = {
  sid: 1,
  snm: "James",
  city: "toronto",
  function(){
      console.log("Student");
  }
};

console.log(stud);
console.log(stud.sid);
console.log(stud["snm"]);

// stud.prototype.s = function(){

// }

// var {a1, a2, a3} = stud
// console.log(a1)

eid = 1,
enm = "James"

emp = {
    emp_id: eid,
    enm
}

console.log(emp)
