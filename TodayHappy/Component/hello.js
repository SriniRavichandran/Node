const hapi=require('@hapi/hapi');


const run =async()=>{

    const server= hapi.server({
        port :5678,
        host:"localhost"
    })

    server.route({
        method:"GET",
        path:'/hapi',
        handler:()=>{
            return 'Hapi is my new Framework'
        }
    })

    await server.start();
    console.log("running server %s",server.info.uri)
}

process.on('rejectionHandled',(err)=>{
    console.log(err);
    alert("error");
})

run();