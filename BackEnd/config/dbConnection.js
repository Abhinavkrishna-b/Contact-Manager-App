const mongoose = require("mongoose");

async function connectDB(){
    try{
        await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("DataBase Connected");
    }
    catch(e){
        console.log(e.message);
        process.exit(1);
    }
};
module.exports=connectDB;