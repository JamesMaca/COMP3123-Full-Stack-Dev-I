
function sum(a, b){
    console.log(a+b)
}

function makeCallback(x, y, fun){
    if(x >= y){
        fun(x, y)
    }else{
        console.log('x must be greater then y')
    }
}

// makeCallback(10, 2, sum)

makeCallback(10, 5, function(x, y){
    console.log(x-y)
})

//ARROW FUNCTION VERSION
makeCallback(10, 5, (x, y) => {
    console.log(x-y)
})