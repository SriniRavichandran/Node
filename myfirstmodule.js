var http = require('http');
var dt = require('./date.js');

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write("The date and time is currently: " + dt.mycountrydate());
//     res.end();
//   }).listen(8000);

http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/plain'});
    res.write(dt.mycountrydate());

}).listen(3430)