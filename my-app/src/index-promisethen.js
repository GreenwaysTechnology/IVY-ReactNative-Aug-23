
function blockMe(message) {
    console.log(message)
}
const getUser = () => {
    return new Promise((resolve, reject) => {
        let user = 'admin'
        if (user) {
            setTimeout(resolve, 1000, user)
        } else {
            setTimeout(reject, 1000, 'user not found')
        }
    })
}

const login = user => {
    return new Promise((resolve, reject) => {
        if (user === 'admin') {
            setTimeout(resolve, 1000, 'login success')

        } else {
            setTimeout(reject, 1000, 'login failed')

        }
    })
}

const showdashboard = status => {
    return new Promise((resolve, reject) => {
        if (status === 'login success') {
            setTimeout(resolve, 1000, 'you are admin')

        } else {
            setTimeout(reject, 1000, 'you are guest')

        }
    })
}

blockMe('start')
//callback hell : way of writing callback programs
// getUser((user) => {
//     console.log(user)
//     login(user, (status) => {
//         console.log(status)
//         showdashboard(status, (adminPage) => {
//             console.log(adminPage)
//         }, (errPage) => {
//             console.log(errPage)
//         })
//     }, (err) => {
//         console.log(err)
//     })
// }, (err) => {
//     console.log(err)
// })

// getUser().then(user => {
//     return login(user)
// }).then(status => {
//     return showdashboard(status)
// }).then(page => {
//     console.log(page)
// }).catch(err => {
//     console.log(err)
// })
getUser().then(user => login(user))
    .then(status => showdashboard(status))
    .then(page => console.log(page))
    .catch(err => {
        console.log(err)
    })

blockMe('end')
