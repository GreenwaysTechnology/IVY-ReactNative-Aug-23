function sayHello() {
    //function body 
    console.log('Hello')
}
//function invocation
sayHello()

//args and params 
function sayHai(name) {
    console.log(`your name is ${name}`)
}
//params
sayHai('Subramanian')
sayHai();

//default value/default args 
function multiply(a = 0, b = 0) {
    let c = a * b
    console.log(`Result is ${c}`)
}
multiply(10, 10)
multiply()

//return value 
function add(a = 0, b = 0) {
    return a + b
}
console.log(add(10,10))