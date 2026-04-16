// SIngly threaded 
const http = require('http');

const server = http.createServer(function(req,res){//1- request,response
  //2-createServer is a function
  //3- server me callback milti hai
  console.log(req);
  
});
const port = 3001;
server.listen(port,()=>{
  console.log(`server is ${port}`);
});


