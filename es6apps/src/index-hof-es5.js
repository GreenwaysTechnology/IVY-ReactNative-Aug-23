//higher order functions : since function is value, we can pass function as parameter to another function and also we can return from another function .

function add(a, b) {
    console.log(`a ${a} b ${b}`)
    let c = a + b
    console.log(`c ${a + b}`)
}
add(10, 10)
let x = 10;
let y = 10;
add(x, y)

//function as parameter.

function sayHello(hello) {
    hello()
}
sayHello(function () {
    console.log('Hello')
})
let myhello = function () {
    console.log('Hello')
}
sayHello(myhello)
//
//calc = function (a = 0, b = 0) {
    let c = a + b
    // console.log(c)
    return c
//}
function calculate(calc) {
    let result = calc()
    console.log(result)
}

calculate(function (a = 0, b = 0) {
    let c = a + b
    // console.log(c)
    return c
})
calculate(function (a = "ss", b = "bb") {
    let c = a + b
    // console.log(c)
    return c
})

function login(success, failure) {
    let isLoggedIn = false  
    if (isLoggedIn) {
        success('Login success')
    } else {
        failure('Login failed')
    }
}
login(function (status) {
    console.log(status)
}, function (err) {
    console.log(err)
})