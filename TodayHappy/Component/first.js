const hapi=require("@hapi/hapi");
const run =async()=>{


    const server=hapi.server({
        port:4000,
        host:'localhost'
    });
    await server.start();
    console.log("server running ",server.info.uri)
} 


process.on("rejectionHandled",(err)=>{
console.log(err);
process.exit(1);

}
)
run()