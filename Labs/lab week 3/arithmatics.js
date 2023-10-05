function add(a, b){
    return a + b
}

function sub(a, b){
    return a - b
}

function mul(a, b){
    return a * b
}

function div(a, b){
    return a/b
}

class Student{
    constructor(sid, snm){
        this.sid = sid
        this.snm = snm
    }

    print(){
        console.log(this.sid)
        console.log(this.snm)
    }
}

module.exports ={sum:add, sub, mul, div, Student}