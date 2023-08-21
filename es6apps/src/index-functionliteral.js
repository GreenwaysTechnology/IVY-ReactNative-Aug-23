//function is literal 
function sayHello() {
    console.log('Hello')
}
//assign function into variable 
let hello = sayHello
hello()

// inline function declaration: anonmous function 
let hai = function () {
    console.log('hai')
}
hai()

let add = function (a = 0, b = 0) {
    return a + b
}
console.log(add(10,10))