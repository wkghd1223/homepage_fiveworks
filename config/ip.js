module.exports = function () {
    const request = require('request');
    const deasync = require('deasync');
    var ip;
    (function () {
      request("http://169.254.169.254/latest/meta-data/public-ipv4", function (error, response, body) {
        if (!error && response.statusCode == 200) {
          ip = body;
        }
      }); 
      while (ip == undefined) {
        deasync.runLoopOnce();
      }
    })();
  
    return ip;
  }