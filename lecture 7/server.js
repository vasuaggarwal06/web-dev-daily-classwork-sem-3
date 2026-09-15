const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<h1>welcome to home page </h1>");
    res.end();
  }
});
server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
