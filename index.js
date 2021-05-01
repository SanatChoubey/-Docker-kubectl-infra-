const app = require('express')();
app.get('/', (req, res) => {
    res.send({
        message: 'learning kubectl!! ㉿ 🚀🚀🚀🚀🛸'
    })
})
const PORT = process.env.PORT || 8000
app.listen(PORT)