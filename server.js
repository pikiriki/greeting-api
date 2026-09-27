const http = require("node:http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  const url = new URL(req.url, "http://localhost:3000");
  console.log(url.pathname);
  console.log(url.search);
  res.end("Hello Backend");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});