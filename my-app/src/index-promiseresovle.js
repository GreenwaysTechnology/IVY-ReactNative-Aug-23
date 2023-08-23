
function blockMe(message) {
    console.log(message)
}
//
function delay() {
    return Promise.resolve('Success') //factory api 
    //Promise.reject ==factory to return error
}

blockMe('start')
delay().then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})
blockMe('end')
