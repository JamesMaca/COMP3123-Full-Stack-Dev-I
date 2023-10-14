//James MacAloney - 101362896
//Date: September 17th 2023
//Full Stack Dev - Lab exercise 2

// Q1 ------------------------------
console.log("Q1 -----------------------")
gretter = (myArray) => {
    const greetText = 'Hello ';
    for(var name of myArray){
        console.log(`${greetText}${name}`)
    }
}
gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3)

// Q2 ------------------------------
console.log("Q2 -----------------------")
function capitalize(string){
    const [firstLetter, ...restOfString] = string;
    return `${firstLetter.toUpperCase()}${restOfString.join('')}`;
};

console.log(capitalize('fooBar'))
console.log(capitalize('nodeJs'))

// Q3 ------------------------------
console.log("Q3 -----------------------")
const colors = ['red', 'green', 'blue']

function capitalizeColors(colors){
    return colors.map((c) => capitalize(c));
}

console.log(capitalizeColors(colors))

// Q4 -------------------------------
console.log("Q4 -----------------------")
var values = [1, 60, 34, 30, 20, 5]

const filterLessThan20 = (values) => {
    return values.filter((num) => num >= 20);
}

console.log(filterLessThan20(values))

// Q5 -------------------------------
console.log("Q5 -----------------------")
var array = [1, 2, 3, 4]

function calculateSum(array){
    let sum = array.reduce((accu, current) => accu + current, 0)
    return sum;
}

function calculateProduct(array){
    let product = array.reduce((accu, current) => accu * current, 1)
    return product
}

console.log(calculateSum(array))
console.log(calculateProduct(array))

// Q6 -------------------------------
console.log("Q6 -----------------------")

class Car{
    constructor(model, year){
        this.model = model;
        this.year = year;
    }
    details(){
        return `Model: ${this.model} Engine ${this.year}`;
    }
}

class Sedan extends Car {
    constructor(model, year, balance){
        super(model, year);
        this.balance = balance;
    }
    info(){
        return `${this.model} has a balance of $${this.balance}`
    }
    
}

const car2 = new Car('Pontiac Firebird', 1976)
console.log(car2.details())

const sedan = new Sedan('Volvo SD', 2018, 30000)
console.log(sedan.info());