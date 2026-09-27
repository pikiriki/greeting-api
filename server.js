const http = require("node:http");

const server = http.createServer((req, res) => {
  const url = new URL(req.url, "http://localhost:3000");
  const name = url.searchParams.get("name");

  if (name === null || name === "") {
    res.end("Please provide a name.");
    return;
  }

  const greeting = `Hello, ${name}!`;
  res.end(greeting);
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});