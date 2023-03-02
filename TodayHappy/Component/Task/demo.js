const hapi=require('@hapi/hapi');
const Inert=require('@hapi/inert')
const mangobds=require('hapi-mongodb')
const Boom=require('@hapi/boom')


const run=async()=>{

const databaseoption={
    url: 'mongodb://localhost:27017/Register',
    // settings:{
    //     useUnifiedTopology:true
    // },
    decorate:true
}



    await server.register([{
        plugin:Inert
    },{
        plugin:mangobds,
        options:databaseoption
    }])
     

    server.route({
        method:'GET',
        path:'/',
        handler:(req,res)=>{
            return res.file('./index.html')
        }
    })

    server.route({
        method:"POST",
        path:'/register',
        handler:async(request,res)=>{
            const db=request.mongo.db;

            try{
                const result= await db.collection('reg').insertOne({name:request.payload.name, email:request.payload.Email, phno:request.payload.Number, age:request.payload.Age})
                console.log(result);
                console.log(request.payload.name)
                console.log(request.payload.email)
                console.log("hello");
                if(result){
                    return "okay"
                }else{
                    return "not okay"
                }
            } catch (err) {
                throw Boom.internal('Internal MongoDB error', err);
            }
        }
    })


    server.route({
        method:"PUT",
        path:'/register',
        handler:async(request,res)=>{
            const db=request.mongo.db;

            try{
                const result= await db.collection('reg').insertOne({name:request.payload.name, email:request.payload.Email, phno:request.payload.Number, age:request.payload.Age})
                console.log(result);
                console.log(request.payload.name)
                console.log(request.payload.Email)
                console.log("hello");
                if(result){
                    return "okay successfully"
                }else{
                    return "not okay"
                }
            } catch (err) {
                throw Boom.internal('Internal MongoDB error', err);
            }
        }
    })

    server.route( {
        method: 'GET',
        path: '/userdetails',
        async handler(request) {

            const db = request.mongo.db;
            // const ObjectID = request.mongo.ObjectID;

            try {
                const result = await db.collection('reg').findOne({  _id: Number(request.query.id) });
                return `<html><head><title>Document</title></head><body> <br/>Name  :  <input type="text" value=${result.name}><br/>
       Email: <input type="email" value=${result.email}><br/>
       Phone Number <input type="number" value=${result.phno}><br/>
      Age:  <input type="age"    value=${result.age} ><br/>
        

    
</body>
</html>`;
            }
            catch (err) {
                throw Boom.internal('Internal MongoDB error', err);
            }
        }
    });




await server.start();
console.log("running server",server.info.uri);
}

const server=hapi.server({
    port:3690,
    host:'localhost'
})




run();