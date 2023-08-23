
function blockMe(message) {
    console.log(message)
}
const getUser = (success, failure) => {
    let user = 'admin'
    if (user) {
        setTimeout(success, 1000, user)
    } else {
        setTimeout(failure, 1000, 'user not found')
    }
}
const login = (user, success, failure) => {
    if (user === 'admin') {
        setTimeout(success, 1000, 'login success')

    } else {
        setTimeout(failure, 1000, 'login failed')

    }
}
const showdashboard = (status, success, failure) => {
    if (status === 'login success') {
        setTimeout(success, 1000, 'you are admin')

    } else {
        setTimeout(failure, 1000, 'you are guest')

    }
}

blockMe('start')
//callback hell : way of writing callback programs
getUser((user) => {
    console.log(user)
    login(user, (status) => {
        console.log(status)
        showdashboard(status, (adminPage) => {
            console.log(adminPage)
        }, (errPage) => {
            console.log(errPage)
        })
    }, (err) => {
        console.log(err)
    })
}, (err) => {
    console.log(err)
})
blockMe('end')
