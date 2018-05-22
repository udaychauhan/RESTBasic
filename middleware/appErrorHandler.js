const response = require('./../libs/responseLib');
const logger = require('./../libs/loggerLib');

let errorHandler = (err,req,res,next) => {
    let origin = "appErrorHandler : errorHandler";
    logger.error(err,errorHandler,10);

    let apiResponse = response.generate(true, 'Some error occured at global level',500, null)
    res.send(apiResponse)

}

let notFoundHandler = (req,res,next)=>{
    let origin = "appErrorHandler : notFoundHandler";
    logger.info("Global not found handler called",origin,10);
    let apiResponse = response.generate(true, 'Route not found in the application',404, null)
    res.status(404).send(apiResponse)
}

module.exports = {
    globalErrorHandler : errorHandler,
    globalNotFoundHandler : notFoundHandler
}
//just for change