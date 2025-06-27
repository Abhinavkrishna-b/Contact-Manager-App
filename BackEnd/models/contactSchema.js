const mongoose= require("mongoose");

const conSchema=new mongoose.Schema({
    user_id: {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    name:{
        type:String,
        required:[true,"Please Enter the Contact name"]
    },
    email:{
        type:String,
        required:[true,"Please Enter the contact Email ID"]
    },
    phone:{
        type:String,
        required:[true,"Please Enter the Contact Phone number"]
    }
},{
    timestamps:true,
});

module.exports=mongoose.model("Contact",conSchema);