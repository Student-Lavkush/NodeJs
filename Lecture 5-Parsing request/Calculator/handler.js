const {sumRequestHandler} = require('./sum');
const requestHandler = (req,res)=>{
  console.log(req.url,req.method);
  if(req.url==='/'){
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
    <head><title>Practice set</title></head>
    <body><h1>Welcome to cal</h1>"
    <a href = '/calculator'>Go to calculator</a>
    </body>
    </html>
    `);
    return res.end();
  }
  else if (req.url === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
        <html>
        <head>
        <title>
        Calculator
        </title>
        </head>
        <body>
        
        <form action="/calculate-result" method="POST">
        <input type='number' name='first' placeholder='Enter the first number'>
        <input type='number' name='second' placeholder='Enter the Second number'>
        <button type= 'submit'>Sum</button>
        </form>

        </body>
        
        </html>
        `);
    return res.end();
  }
  else if(req.url==="/calculate-result"&&req.method==='POST'){
    return sumRequestHandler(req,res);
    
  }
  res.setHeader("Content-Type", "text/html");
    res.write(`<html>
    <head><title>Practice set</title></head>
    <body><h1>404 page does not exist</h1>
    <a href = '/'>Home page</a>
    </body>
    </html>
    `);
    return res.end();
}
exports.requestHandler=requestHandler;