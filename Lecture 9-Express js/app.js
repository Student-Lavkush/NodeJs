

// External module
const express = require("express");

const requestHandler  = require('./user');
const app = express();
// This is middleware one
app.use("/",(req,res,next)=>{
  console.log("Came in first middleWare",req.url,req.method);
  //res.send('<p> Welcome First complete coding</p>')
  next();
});
app.use("/",(req,res,next)=>{
  console.log("Came in another middleWare",req.url,req.method);
  res.send('<p> Welcome to another coding</p>')
  next();
});
//This is middleware two
app.use("/submit-details",(req,res,next)=>{
  console.log("Came in Second middleWare",req.url,req.method);
  res.send('<p> Welcome to complete coding</p>')
});

  const port = 3001;
app.listen(port, () => {
  console.log(`server is ${port}`);
});