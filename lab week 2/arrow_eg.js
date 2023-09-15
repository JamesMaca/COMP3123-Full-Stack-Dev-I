function sayHello(name){
    return `Hello, ${name}`
}

sayHello = (name) => {
    return `Hello, ${name}`
}

sayHello = (name) => `Hello, ${name}`
sayHello = name => `Hello, ${name}`
sayHello = () => "Hello, James"

sayHello = (name) => {
    this.name = "James Mac"
    console.log(`This: ${this}`)
    return `Hello, ${name}`
}


let c = sayHello("James")
console.log(c)
console.log(typeof c)
