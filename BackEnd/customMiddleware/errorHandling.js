const Constants = require('../constants');
const errorHandler = (err,req,res,next)=>{
    const statusCode = req.statusCode ? req.statusCode : 500;
    switch(statusCode){
        case Constants.VALIDATION_ERROR:
            res.json({
                title:"Validation Error",
                Msg:err.message,
                stackTrace:err.stack,
            });
            break;
        case Constants.NOT_FOUND:
            res.json({
                title:"Error Not Found",
                Msg:err.message,
                stackTrace:err.stack,
            });
            break;

        case Constants.UNAUTHORIZED:
            res.json({
                title:"This is a Unauthorized request",
                Msg:err.message,
                stackTrace:err.stack,
            });
            break;
        case Constants.FORBIDDEN:
            res.json({
                title:"Access Denied",
                Msg:err.message,
                stackTrace:err.stack,
            });
            break;
        case Constants.INTERNAL_SERVER_ERROR:
            res.json({
                title:"Error",
                Msg:err.message,
                stackTrace:err.stack,
            });
            break;
        default:
            console.log("Success");
            break;
    }
}

module.exports=errorHandler;