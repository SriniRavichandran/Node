const hapi=require("@hapi/hapi")

const run =async()=>{

    const server=hapi.server({
        port:7680,
        host:'localhost'
    })

    server.route({
       method:"GET",
       path:'/',
       handler:()=>{
        return '<html><head><style> h1{color:red}</style></head><body><h1>hello node js </hello></body></html>';
       } 
    });


    await server.start();
    console.log("server running %s",server.info.uri);
    


}

process.on('rejectionHandled',(err)=>{
    console.log(err);
    process.exit(1);
})

run();