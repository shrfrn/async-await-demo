var gKeepResolve

function onUserDecision(userDecision) {
    document.querySelector('.modal').hidden = true
    gKeepResolve(userDecision)
}

function askUser() {
    document.querySelector('.modal').hidden = false
    var prm = new Promise((resolve, reject) => {
        gKeepResolve = resolve
    })
    return prm
}

async function onRemoveAll() {
    const userDecision = await askUser()
    console.log('User Decided', userDecision)
}
