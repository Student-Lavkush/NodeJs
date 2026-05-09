// External module
const express = require("express");
const path = require('path');

//local module
const userRouter = require('./routes/userRouter')
const hostRouter = require('./routes/hostRouter');
const rootDir = require('./utils/pathutil');

const app = express();

// it match all  rotes
app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.use(express.urlencoded())
app.use(userRouter);
app.use(hostRouter);
app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(rootDir,'views','404.html'))

})



app.listen(3001);
