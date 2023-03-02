const Os=require('os');

console.log("platform os   :"+Os.platform());
console.log("arch :  "+Os.arch());
console.log("os release :"+Os.release());
console.log(Os.constants)
console.log(Os.hostname());
console.log(Os.homedir());
console.log("os free Memory : "+Os.freemem())
console.log("os type : "+Os.type());
console.log("os Time : "+Os.uptime());
console.log("os File : "+Os.tmpdir())