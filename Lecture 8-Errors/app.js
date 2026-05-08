const http = require("http");
const testing = require("./testing");
const logical = require('./logical')
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  testing();
  logical();
});
const PORT = 3001;
server.listen(PORT);
  