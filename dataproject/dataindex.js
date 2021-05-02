const app = require('express')();
app.get('/', (req, res) => {
    res.send({
        message: 'data from other pod bro !😂 '
    })
})
app.get('/error', (req, res) => {
    process.exit(0)
})
const PORT = process.env.PORT || 9000
app.listen(PORT)