const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Please Enter The UserName"],
    },
    email:{
        type:String,
        required:[true,"Please Enter The Email ID"],
        unique:[true,"Email address is already taken!"],
    },
    password:{
        type:String,
        required:[true,"Please Enter The Password"],
        minlength:[10,"Password must be atleast 10 charactes"],
    }
},{
    timestamps:true,
})

module.exports=mongoose.model("User",userSchema);