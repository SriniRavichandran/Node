const hapi=require('@hapi/hapi');

const run=()=>{

    const server=hapi.server({
        port:8078,
        host:"localhost"
    })

    server.route({
        method: "GET",
        path: '/{user*2}',
        handler: function (request, h) {
        
         const user=request.params.user.split('/');
           
           return `hello ${user[0]}  and ${user[1]}`;
            
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