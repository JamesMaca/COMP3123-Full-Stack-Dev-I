async function sayHello(){
    console.log("Hello World - START")
    let c = await makePromiseCall(100)
    console.log(c)

    try{
        c = await makePromiseCall(100)
        console.log(c)
    }catch(e){
        console.log(e)
    }



    console.log("Hello World - END")

}

async function makePromiseCall(x){
    let p1 = new Promise((resolve, reject) => {
        //Make API call here
        if(x > 2){
            resolve({msg: "Promise GOT Success"})
        }else{
            reject("Promise Failed")
        }
    })
    return p1  
}



sayHello().then(() => {
    console.log("sayHello")
})