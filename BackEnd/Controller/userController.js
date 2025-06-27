const asyncHandler = require("express-async-handler");
const User = require("../models/userSchema");
const bcrypt=require("bcrypt");
const jwt = require("jsonwebtoken");
//access public
const registerUser=asyncHandler(async(req,res)=>{
    const {username,email,password}=req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("All fields required");
    }
    const isUserExisits = await User.findOne({email});
    if(isUserExisits){
        res.status(400);
        throw new Error("User Already Exists");
    }
    
    const hashedPassword = await bcrypt.hash(password,10);
    const user = await User.create({
        username,
        email,
        password:hashedPassword,
    })

    if(user){
        console.log("User Created");
        res.status(201).json({id:user._id,email:user.email});
    }
    else{
        res.status(400);
        throw new Error("User Data is not Valid");
    }
})

//access private
const loginUser =asyncHandler(async(req,res)=>{
    const {email,password}=req.body;
    if(!email || !password){
        res.status(400);
        throw new Error("All fields required");
    } 
    const user = await User.findOne({email});
    if(user && await bcrypt.compare(password,user.password)){
        const accessToken = jwt.sign({
            user:{
                username:user.username,
                email:user.email,
                id:user._id,
            }
        },process.env.JWT_SECRET,{expiresIn:"30m"});
        res.json({AccessToken:accessToken})
    }
    else{
        res.status(401);
        throw new Error("email or password is incorrect");
    }
})

//access private
const currentUser = (req,res)=>{
    res.json(req.user);
}

module.exports={
    registerUser,
    loginUser,
    currentUser,
}