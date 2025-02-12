const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");


// NOTE usually we get the client id from the protected route but it is being designedd to be used as a service therefore we need to make sure to put
const sendMessage = catchAsync(async (req, res, next)=>{
    const {content, chatId} =  req.body

    if (!content || !chatId){
        return next(new AppError("No content or chat id is passed", 400))
    }
})

module.exports = {sendMessage}