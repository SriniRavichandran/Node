
const http=require('http');
const portno='127.0.0.1'
http.createServer(function (req, res) {
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end('Hello World!');
}).listen(8001,portno,()=>{
    console.log(`Server running at http://${portno}:${8001}/`)
});


