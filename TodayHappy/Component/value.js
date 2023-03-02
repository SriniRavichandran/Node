const hapi=require('@hapi/hapi');


const run =async()=>{
    const server=hapi.Server({
        port:8090,
        host:"localhost"
    })

    server.route({
        method:"GET",
        path:'/',
        handler:function (req,h){
          const user={
            firstname:"srinivasan",
            lastname:"ravichandran",
            id:1
          }

          return user
            
        }
    })



    // server.ext('onRequest', function (request, h) {
      
    //     request.setUrl('test');
    //     return "hello"
    // });




    server.start();
    console.log("server riunning "+server.info.uri)
}

process.on('rejectionHandled',(err)=>{
    console.log("error");
    process.exit(1);
})

run();