const hapi=require('@hapi/hapi');

const run=()=>{

    const server=hapi.server({
        port:8080,
        host:"localhost"
    })

    

    // server.route({
    //     method: "GET",
    //     path: '/',
    //     handler: function (request, h) {
        

           
    // return `hello ${request.query.user}`
           
    //     }
    // });
    

    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, h) {
    
            return request.query;
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