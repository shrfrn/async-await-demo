'use strict'

const prm1 = Promise.resolve(18)
const prm2 = askUser()
const prm3 = Promise.resolve(11)

const prms = [prm1, prm2, prm3]

function runDemo() {
    Promise.all(prms)
        .then(values => console.log('Values', values))
    
}

function askUser(title = 'Sure?') {
    const options = { title, showDenyButton: true }
    
    return Swal.fire(options)
        .then(({ value }) => {
            if (!value) throw new Error('User Canceled!')
            return value
        })
}