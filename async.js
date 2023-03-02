const fs=require("fs");


console.log("start");

fs.readFile("./content.txt","utf-8",(err,data)=>{
    if(err) throw err;
    console.log(data);
})


console.log("close")