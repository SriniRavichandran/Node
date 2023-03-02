const http=require("http");

http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"plain/html"})

    res.write("hello");
    res.write(req.url)
}).listen(2020)