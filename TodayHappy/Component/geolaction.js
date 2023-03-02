



const hapi=require('@hapi/hapi');


const server=hapi.server({
    port:3690,
    host:'localhost'
})
const run=async()=>{

    await server.register({
        plugin: require('hapi-geo-locate'),
        options: {
          enabledByDefault: true
          
        }
      })


  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        const location = request.location
 
        // use client location
 
        return location
    }
})
    await server.start();
    console.log("running server",server.info.uri);
    }


    






run();