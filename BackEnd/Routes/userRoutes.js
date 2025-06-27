const express=require("express");
const router = express.Router();
const {registerUser,loginUser,currentUser}=require("../Controller/userController");
const tokenValidator = require("../customMiddleware/validateToken");


router.post('/register',registerUser);

router.post('/login',loginUser);

router.get('/curUser',tokenValidator,currentUser);

module.exports=router;  //Important