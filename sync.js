const fs=require("fs");


console.log("start");

const data=fs.readFileSync("./content.txt","utf-8")
console.log(data);

console.log("close")