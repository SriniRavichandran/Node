const hapi=require('@hapi/hapi');

const run=()=>{

    const server=hapi.server({
        port:8060,
        host:"localhost"
    })

    // server.route({
    //     method:"GET",
    //     path:'/',
    //     handler:()=>{
    //         return ("hello world")
    //     }
    // })

    server.route({
        method: "GET",
        path: '/{user}',
        handler: function (request, h) {
        

           
        //    return  `Hello ${Hoek.escapeHtml(request.params.user)}!`;
             return `MY Name is ${request.params.user}  `;
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