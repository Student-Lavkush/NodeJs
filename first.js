const fs = require('fs');
fs.writeFile("hello.txt","hello world",(err)=>{
  if(err){
    console.log(err);
  }
  else{
    console.log("File created successfully");
  }
})