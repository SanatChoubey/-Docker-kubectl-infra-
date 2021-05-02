const app = require('express')();
const axios = require('axios');
app.get('/', (req, res) => {
    res.send({
        message: 'learning kubectl!! ㉿ 🚀🚀🚀🚀🛸'
    })
})
app.get('/data', async(req, res) => {
    try {
        const result  =  await axios.get(`http://${process.env.dataurl}`)
        res.send({
            data: result.data,
            success: "done",
            env : process.env.dataurl
        })
    } catch(e) {
        res.send({
            error: e.message,
            success: "fail",
            env : process.env.dataurl
        })
    }
    
})
app.get('/error', (req, res) => {
    process.exit(0)
})
const PORT = process.env.PORT || 8000
app.listen(PORT)