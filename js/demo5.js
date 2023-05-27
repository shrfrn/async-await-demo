getAns()

function getAns() {
    axios.get('https://yesno.wtf/api')
        .then(res => console.log('Ans:', res.data))
}