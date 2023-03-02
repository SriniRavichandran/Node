
  

  const hapi=require('@hapi/hapi');

const run=()=>{

    const server=hapi.server({
        port:8060,
        host:"localhost"
    })

 

    server.route({  
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
          var payload = request.payload   
      
          console.log(payload)
      
          reply(payload)
        }
      })
    

    server.start();
    console.log("server"+server.info.uri)
}




run();
