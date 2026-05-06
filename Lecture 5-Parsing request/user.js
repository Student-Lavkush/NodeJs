// SIngly threaded
const fs = require('fs');

const userRequestHandler = (req, res)=>{
  //1- request,response
  //2-createServer is a function
  //3- server me callback milti hai
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>my first server</title></head>");
    res.write("<body><h1>Enter your details</h1>");
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" name="username" placeholder="Enter your name"/><br>')
    res.write('<label for="male">Male</label>')
    
    
    res.write('<input type="radio" id="male" name="gender" value="male"/>')
    res.write('<label for="female">female</label>')
    res.write('<input type="radio" id="female" name="gender" value="female"/>')
    res.write('<br><input type="submit" value="Submit"/>');
    res.write('</form>')
    res.write("</body>")
    res.write("</html>");
    return res.end();
  } else if (req.url === "/products") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>my first server</title></head>");
    res.write("<body><h1>CheckOut the prodects</h1></body>");
    res.write("</html>");
    return res.end();;
  }
else if(req.url.toLowerCase()==="/submit-details" && req.method  =="POST"){
  const body =[];
   req.on('data',chunk=>{//on means listen
    console.log(chunk);
    body.push(chunk);
   })
   req.on('end',()=>{
    const parseBody = Buffer.concat(body).toString();

    console.log(parseBody);
    const params = new URLSearchParams(parseBody);//decoded the parseBody
   const bodyObject =Object.fromEntries(params);
  //  for(const [key,value] of params.entries()){
  //   bodyObject[key]= value;
  //  }

   console.log(bodyObject);
   fs.writeFileSync('user.txt',JSON.stringify(bodyObject));
   });
   

res.statusCode =302;
res.setHeader('Location','/');
return res.end()
}
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>my first server</title></head>");
  res.write("<body><h1>hello my name is Lavkush</h1></body>");
  res.write("</html>");
  return res.end();
};
module.exports = userRequestHandler;

