const Hapi=require('@hapi/hapi');

const server = Hapi.server({
    port: 3000,
    host: 'localhost',
   
});

server.route({
    method:'GET',
    path:'/{any*}',
    handler:()=>{
         return ` Page not Found `
    }
})


const run=async()=>{
    await server.start();
    console.log("run server"+server.info.uri)
}

run();