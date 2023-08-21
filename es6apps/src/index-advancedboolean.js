let myvar //undefined

if (myvar) {
    console.log(`${myvar} is valid`)
} else {
    console.log(`${myvar} is invalid`)
}
myvar = 0
if (myvar) {
    console.log(`${myvar} is valid`)
} else {
    console.log(`${myvar} is invalid`)
}
