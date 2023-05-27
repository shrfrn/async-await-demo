demoUser()

function demoUser() {

    getUser('baba')
        .then(user => {
            console.log('User', user)
        })
        .catch(err => {
            console.log('Had error getting a user', err)
        })
}

function getUser(name) {
    const user = { id: 'u101', fullName: name }

    if (Math.random() > 0.5) {
        return Promise.resolve(user)
    } else {
        return Promise.reject('Not Now!')
    }
}

function demoBasics() {
    const prm1 = Promise.resolve(17)
    const prm2 = Promise.reject('Not Today!')
    
    // const val1 = await prm1
    // console.log('Got val:', val1)

    // try {
    //     val2 = await prm2
    // } catch (err) {
    //     console.log('Error:', err)
    // }

    prm1.then(val => {
        console.log('Got val:', val)
    })
    prm2.catch(err => {
        console.log('Had Error:', err)
    })
}