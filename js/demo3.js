function onRemove() {
    delay(1500)
        .then(x => console.log('After time', x))
    
    // doConfirm()
    //     .then(res => console.log('User Decided:', res))
}

function doConfirm(title = 'Are you sure?') {
    const res = confirm(title)
    return Promise.resolve(res)
}

function delay(t) {
    const prm = new Promise((resolve, reject) => {
        setTimeout(resolve, t, t)
    })
    return prm
}