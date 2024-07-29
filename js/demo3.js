'use strict'

function runDemo() {
    doConfirm()
        .then(res => console.log('User Decided:', res))
}

function doConfirm(title = 'Are you sure?') {
    const res = confirm(title)
    return Promise.resolve(res)
}