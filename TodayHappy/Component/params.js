const hapi=require('@hapi/hapi');

const run=async()=>{

    const server=hapi.server({
        port:3690,
        host:'localhost'
    })

    server.route({
        method:'GET',
        path:'/{name}',
        handler:(request,err)=>{
            const value=request.params.name
            return 'hello '+value
        }

    

    })

    server.start();
    console.log("runing server "+server.info.uri);

}

run();