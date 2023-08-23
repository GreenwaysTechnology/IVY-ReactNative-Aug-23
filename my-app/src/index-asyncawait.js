
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

// getUser().then(user => login(user))
//     .then(status => showdashboard(status))
//     .then(page => console.log(page))
//     .catch(err => {
//         console.log(err)
//     })
async function main() {
    try {
        const user = await getUser()
        const status = await login(user)
        const page = await showdashboard(status)
        console.log(user, status, page)
    }
    catch (err) {

    }

}
main()
blockMe('end')
