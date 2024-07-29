'use strict'

function runDemo() {
    axios.get('https://yesno.wtf/api')
        .then(res => console.log('Ans:', res.data))
}