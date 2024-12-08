'use strict'

function runDemo() {
    const prm1 = Promise.resolve(18)
    const prm2 = askUser()
    const prm3 = Promise.resolve(11)
    
    const prms = [prm1, prm2, prm3]
    
    Promise.all(prms)
        .then(values => console.log('Values', values))
        .catch(() => console.log('User said no!'))
}

function askUser(title = 'Sure?') {
    const options = { title, showDenyButton: true }
    
    return Swal.fire(options)
        .then(({ value }) => {
            if (!value) throw new Error('User Canceled!')
            return value
        })
}