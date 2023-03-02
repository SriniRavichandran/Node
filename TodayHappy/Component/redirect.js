const hapi=require('@hapi/hapi');


const run =async()=>{
    const server=hapi.Server({
        port:9090,
        host:"localhost"
    })

    server.route({
        method:"GET",
        path:'/home',
        handler:function (req,h){
          return  h.redirect('/');
            
        }
    })




    server.start();
    console.log("server riunning "+server.info.uri)
}

process.on('rejectionHandled',(err)=>{
    console.log("error")
})

run();