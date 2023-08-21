//higher order functions : since function is value, we can pass function as parameter to another function and also we can return from another function .

//function as parameter.

// function sayHello(hello) {
//     hello()
// }
let sayHello = hello => hello()

// sayHello(function () {
//     console.log('Hello')
// })

sayHello(() => console.log('Hello'))

// let myhello = function () {
//     console.log('Hello')
// }
let myhello = () => console.log('Hello')
sayHello(myhello)
//

// function calculate(calc) {
//     let result = calc()
//     console.log(result)
// }
let calculate = calc => {
    let result = calc()
    console.log(result)
}

calculate((a = 0, b = 0) => {
    let c = a + b
    return c
})

let login = (success, failure) => {
    let isLoggedIn = false
    if (isLoggedIn) {
        success('Login success')
    } else {
        failure('Login failed')
    }
}
// login(function (status) {
//     console.log(status)
// }, function (err) {
//     console.log(err)
// })

login(status => console.log(status), err => console.log(err))