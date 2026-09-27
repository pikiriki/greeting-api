const http = require("node:http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  
  const url = new URL(req.url, "http://localhost:3000");
  
  console.log(url.pathname);
  console.log(url.search);
  
  const name = url.searchParams.get("name");
  console.log(name);
  
  const greeting = `Hello, ${name}!`;
  res.end(greeting);
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});