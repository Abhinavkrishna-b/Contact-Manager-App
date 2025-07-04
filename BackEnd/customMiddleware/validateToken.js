const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const tokenValidator = asyncHandler(async(req,resizeBy,next)=>{
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;
    if(authHeader && authHeader.startsWith("Bearer")){
        token = authHeader.split(" ")[1];
        jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{
            if(err){
                res.status(401);
                throw new Error("User is not authorized");
            }
            req.user = decoded.user;
            next();
        })
        if(!token){
            resizeBy.status(401);
            throw new Error("The token is missing");
        }
    }
})

module.exports=tokenValidator;