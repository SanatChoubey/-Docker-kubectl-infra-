const app = require('express')();
app.get('/', (req, res) => {
    res.send({
        message: 'learning kubectl!! ㉿ 🚀🚀🚀🚀🛸'
    })
})
app.get('/error', (req, res) => {
    process.exit(0)
})
const PORT = process.env.PORT || 8000
app.listen(PORT)