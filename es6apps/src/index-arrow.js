//anomous function in es 6

//es 5 style
let hello = function () {
    console.log('hello')
}
hello()
//es 6 style : arrow functions
hello = () => {
    console.log('hello')
}
hello()
//code refactoring : if function has only one line of body : we can remove {}
hello = () => console.log('hello')
hello()
//args and params 

let add = (a = 0, b = 0) => {
    let c = a + b
    console.log(`c ${c}`)
}
add(10, 10)

add = (a = 0, b = 0) => {
    return a + b
}
console.log(add(10, 10))

//if function has only return statement: we can remove {} and return statement 
add = (a = 0, b = 0) => a + b
console.log(add(10, 10))
console.log(add(undefined,10))


//if only single arg,without default value 
let getValue = (value) => {
    return value * 2
}
console.log(getValue(10))

//if single args without default , : we can remove () ,return statement
getValue = value => value * 2
console.log(getValue(10))