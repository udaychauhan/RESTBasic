const express = require('express');
const logger = require('./libs/loggerLib');
const appConfig = require('./config/appConfig');
const fs = require('fs');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const globalErrorMiddleware = require('./middleware/appErrorHandler');
const routeLoggerMiddleware = require('./middleware/routeLogger');
const helmet = require('helmet');
const http = require('http');


// creating an application instance
const app = express();

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(globalErrorMiddleware.globalErrorHandler);
app.use(routeLoggerMiddleware.logIp);
app.use(helmet());
// boostrapping models
let modelsPath = './model';
fs.readdirSync(modelsPath).forEach(
    function (file) {
        if (~file.indexOf('.js')) {
            require(modelsPath + '/' + file);
        }
    }
);
// end bootstraping models

//Bootstrap route
let routesPath = './routes'
fs.readdirSync(routesPath).forEach(function (file) {
    if (~file.indexOf('.js')) {
        console.log("including the following file");
        console.log(routesPath + '/' + file)
        let route = require(routesPath + '/' + file);
        route.setRouter(app);
    }
});
// end bootstrap route
app.use(globalErrorMiddleware.globalNotFoundHandler);

/**
 * Create HTTP server.
 */

const server = http.createServer(app)
// start listening to http server
console.log(appConfig)
server.listen(appConfig.port)
server.on('error', onError)
server.on('listening', onListening)

// end server listening code

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        logger.error(error.code + ' not equal listen', 'serverOnErrorHandler', 10)
        throw error
    }

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            logger.error(error.code + ':elavated privileges required', 'serverOnErrorHandler', 10)
            process.exit(1)
            break
        case 'EADDRINUSE':
            logger.error(error.code + ':port is already in use.', 'serverOnErrorHandler', 10)
            process.exit(1)
            break
        default:
            logger.error(error.code + ':some unknown error occured', 'serverOnErrorHandler', 10)
            throw error
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    var addr = server.address()
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    ('Listening on ' + bind)
    logger.info('server listening on port' + addr.port, 'serverOnListeningHandler', 10)
    let db = mongoose.connect(appConfig.db.uri)
}

process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at: Promise', p, 'reason:', reason)
    // application specific logging, throwing an error, or other logic here
})


mongoose.connection.on('open',function(err){
    if(err){
        console.log("databse error");
        console.log(err);
    }else{
        console.log("database open");
    }
});

mongoose.connection.on('error',(err) => {
    console.log("database connection error");
    console.log(err);
});
