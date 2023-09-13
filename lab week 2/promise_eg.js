
function makePromiseCall(x){
    let p1 = new Promise((resolve, reject) => {
        if(x > 2){
            resolve({msg: "Promise GOT Success"})
        }else{
            reject("Promise Failed")
        }
    })
    return p1  
}

makePromiseCall(100).then((data) => {
    // console.log("Success: " + JSON.stringify(data))
    console.log("Success: " + data.msg)
}, (err) => {
    console.log("Error" + err)
})

makePromiseCall(1).then(success => {
    console.log(success)
}).catch(err => {
    console.log(err)
}).finally( ()=> {
    console.log("finally")
})

//Promise chain - Use return to send data
makePromiseCall(100).then( s=> {
    console.log("Call 1: " + s.msg)
    console.log("Call 11")
    return "I am from the 1st call"
}).then(y => {
    console.log("Call 2: " + y)
})