



const hapi=require('@hapi/hapi');
const Inert = require('inert'); 

const run=async()=>{
    await server.start();
    console.log("running server",server.info.uri);
    }


const server=hapi.server({
    port:3690,
    host:'localhost'
})
    
server.register(Inert, (err) => {

    if (err) {
        throw err;
    }


server.route({
    method: 'GET',
    path: '/register',
    handler: function (request, reply) {
        reply.file('./index.html');
    }
});

})

run();