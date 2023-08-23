
function blockMe(message) {
    console.log(message)
}
function delay(callback) {
  setTimeout(callback,5000)
}
blockMe('start')
delay(function () {
    console.log('delay')
})
blockMe('end')
