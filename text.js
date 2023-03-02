const fs=require('fs');
fs.appendFile("./content.txt","hello srini",function(err,data){
    if (err) throw err;
    console.log("data is saved");
})