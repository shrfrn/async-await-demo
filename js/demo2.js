'use strict'

function runDemo() {
    delay(1500)
        .then(x => console.log('After time', x))
    
}

function delay(t) {
    const prm = new Promise((resolve, reject) => {
        setTimeout(resolve, t, t)
    })
    return prm
}