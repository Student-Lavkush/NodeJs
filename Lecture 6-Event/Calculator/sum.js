const sumRequestHandler = (req, res) => {
  console.log("In sum request")
  const body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
  });
  req.on("end", () => {
    const param = Buffer.concat(body).toString();
    const paramBody = new URLSearchParams(param);
    const bodyObj = Object.fromEntries(paramBody);
    const result = Number(bodyObj.first)+Number(bodyObj.second);
    res.setHeader("Content-Type", "text/html");
    res.write(`
        <html>
        <head>
        <title>
        Calculator
        </title>
        </head>
        <body>
        
        <h1>the result is ${result}</h1>

        </body>
        
        </html>
        `)
       return res.end();
  });
};
exports.sumRequestHandler= sumRequestHandler;
 