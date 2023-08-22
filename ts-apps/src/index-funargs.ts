
function add(a: number = 0, b: number = 0): number {
    return a + b
}
console.log(add(10, 10))
//console.log(add())
//console.log(add(true,10))
console.log(add())


//optional args
function multi(a?: number, b?: number) {
    return a * b
}
console.log(multi(10, 10))
console.log(multi())