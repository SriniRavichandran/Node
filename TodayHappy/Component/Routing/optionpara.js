const hapi=require('@hapi/hapi');

const run=()=>{

    const server=hapi.server({
        port:8000,
        host:"localhost"
    })

    server.route({
        method: "GET",
        path: '/{user?}',
        handler: function (request, h) {
        
         const user=request.params.user ? request.params.user : 'stranger'
           
           return `hello ${user}`;
            
        }
    });
    

    server.start();
    console.log("server"+server.info.uri)
}

process.on("rejectionHandled",(err)=>{
    console.log(err);
    process.exit(1);
})


run();