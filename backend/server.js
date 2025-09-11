require('dotenv').config()

const path = require('path');// package for path

const cors = require('cors');// packages to avoid CORS issues
const bodyParser = require('body-parser'); // packages to avoid CORS issues

const express = require('express'); // package
const app = express(); // package


app.use(cors()); 
app.use(bodyParser.json()); 


const PORT = process.env.PORT; // importing port from .env file

app.get('/' , (req,res) => {
    res.send('/ PATH');
}) ;//default path


app.get('/words', (req,res) => {
    const pathFile = path.join(__dirname,'words.json');
    res.sendFile(pathFile);
});// server sends words.json file to frontend


app.listen(PORT, () => {

    console.log(`listening to port :${PORT}`);

});// port listening