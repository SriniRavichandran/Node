const fs = require('fs');
const http=require('http');

http.createServer(function(req,res){

    const url=req.url;
   const methods=req.method;

    if(url==='/'){
       
        res.setHeader("content-type","text/html")
        
        res.write("<html>")
        res.write("<head><title>Node</title></head>")
        res.write(`<body>
        <form action="/message" method="POST" > 
        <input type="text" name="message">
        <input type="submit" value ="submit" >
         </form> 
         </body>`)
        res.write("</html>")
        return res.end();
    }


    if(methods=='POST' && url=="/message"){
            const body=[]
        req.on("data",(data)=>{ 
           body.push(data);
            console.log(body);
            const parsedBody = Buffer.concat(body).toString().split("=");
     const message = parsedBody[1];
     console.log(message);
        })
        
        fs.appendFileSync("./hello.text","srinivasan")
         res.setHeader("Location","/");
         res.statusCode = 302;
          return res.end();
    }
        res.setHeader("content-type","text/html")
        
        res.write("<html>")
        res.write("<head><title>Node</title></head>")
        res.write("<body><h1>Hello world</h1></body>")
        res.write("</html>")
        

}).listen("3008")