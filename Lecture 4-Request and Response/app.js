// SIngly threaded
const http = require("http");

const server = http.createServer(function (req, res) {
  //1- request,response
  //2-createServer is a function
  //3- server me callback milti hai
  console.log(req.url, req.method, req.headers);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>my first server</title></head>");
    res.write("<body><h1>Welcome to home</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/products") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>my first server</title></head>");
    res.write("<body><h1>CheckOut the prodects</h1></body>");
    res.write("</html>");
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>my first server</title></head>");
  res.write("<body><h1>hello my name is Lavkush</h1></body>");
  res.write("</html>");
  return res.end();
});
const port = 3001;
server.listen(port, () => {
  console.log(`server is ${port}`);
});
