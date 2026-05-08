// Core module
const http = require("http");

const requestHandler = require("./user");
express();
const server = http.createServer(requestHandler);
const port = 3001;
server.listen(port, () => {
  console.log(`server is ${port}`);
});
