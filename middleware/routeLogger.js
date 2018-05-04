const appConfig = require ('./../config/appConfig');
const time = require('./../libs/timeLib');

// before post,put or get it browser makes an OPTION request
let requestIpLogger = (req,res,next) => {

    let remoteIp = req.connection.remoteAddress + '+//' + req.connection.remotePort;
    let realIp = req.headers['X-REAL-IP'];
    console.log( req.method + " Request made from " + remoteIp
 + " for route " + req.originalUrl + " at time " + time.now());

// CORS config
 if (req.method === 'OPTIONS') {
    console.log('!OPTIONS');
    var headers = {};
    // IE8 does not allow domains to be specified, just the *
    // headers["Access-Control-Allow-Origin"] = req.headers.origin;
    headers["Access-Control-Allow-Origin"] = "*";// anybody is allowed to use api
    headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";
    headers["Access-Control-Allow-Credentials"] = false;
    headers["Access-Control-Max-Age"] = '86400'; // 24 hours
    headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept";
    res.writeHead(200, headers);
    res.end();
} 
else{

 // enable or disable cors here 
 res.header("Access-Control-Allow-Origin", appConfig.allowedCorsOrigin);
 res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 //console.log(res.header)
 // end cors config
 
 next();
}

}

module.exports = {
    logIp: requestIpLogger
}
