//Muruga
const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 8000;
const errorHandler = require('./customMiddleware/errorHandling')
const app = express();

app.use(express.json())
app.use('/contact',require('./Routes/contactRoutes'));
app.use(errorHandler);
console.log("Executed");

app.listen(port,()=>{
    console.log(`The server is running in the port: ${port}`);
})