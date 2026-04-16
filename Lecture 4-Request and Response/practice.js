const http = require("http");
const server = http.createServer(function (req, res) {
  console.log(req.url, req.headers, req.method);
  if (req.url == "/men") {
    res.write("<h1>Welcome to men area</h1>");
    return res.end();
  } else if (req.url == "/women") {
    res.write("<h1>Welcome to women area</h1>");
    return res.end();
  } else if (req.url == "/kids") {
    res.write("<h1>Welcome to kid area</h1>");
    return res.end();
  } else if (req.url == "/cart") {
    res.write("<h1>Welcome to cart area</h1>");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write(`<html>
              <head>
                <title>Myntra</title>
              </head>
              <body>
               <head>
                <nav>
                  <ul>
                    <li><a href="/men">Men</a></li>
                    <li><a href="/women">Women</a></li>
                    <li><a href="/kids">Kid</a></li>                    <li><a href="/cart">Cart</a></li>
                    

                  </ul>
                </nav>
               </head>
              </body>
                </html>
                `);
  res.end();
});
const PORT = 3001;
server.listen(PORT);
