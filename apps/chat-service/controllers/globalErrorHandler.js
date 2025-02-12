const AppError = require("../utils/appError");

// check for the invalid types field
const sendDev = (err, res)=>{
    const statusCode = err.statusCode || 500;
    const status = err.status || 'error';

    res.status(statusCode).json({
        status: status,
        error: err,
        message: err.message,
        stack: err.stack
    })
}


const sendProd = (err, res)=>{
    const statusCode = err.statusCode || 500;

    const status = err.status || 'error';

    if (err.isOperational){
        res.status(statusCode).json({
            status: status,
            message: err.message
        })
    }else{
        console.log("ERROR: ", err);
        res.status(500).json({
            status: 'Error',
            message: 'Someting went wrong'
        })
    }
}

module.export = (err, req, res, next)=>{
     /*
    in express middlewares look like (req, res, next) but if the middleware func has (err, req, res, next), it is automatically treated as 
    error handler middleware
    */

    if (process.env.NODE_ENV==='development'){
        sendDev(err, res);
    }else if (process.env.NODE_ENV==="production"){
        sendProd(error, res);

    }

    next();
}