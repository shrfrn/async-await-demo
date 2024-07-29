'use strict'

function runDemo() {

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