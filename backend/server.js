require('dotenv').config()

const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')


const express = require('express')
const app = express()


app.use(cors())
app.use(bodyParser.json())


const PORT = process.env.PORT

app.get('/' , (req,res) => {
    res.send('/ PATH')
})


app.get('/words', (req,res) => {
    const pathFile = path.join(__dirname,'words.json')
    res.sendFile(pathFile)
})


app.listen(PORT, () => {

    console.log(`listening to port :${PORT}`)

})