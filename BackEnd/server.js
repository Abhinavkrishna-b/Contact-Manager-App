//Muruga
const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 8000;
const app = express();

app.use('/contact',require('./Routes/contactRoutes'));
console.log("Executed");

app.listen(port,()=>{
    console.log(`The server is running in the port: ${port}`);
})