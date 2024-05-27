const http = require("node:http");
const port = 3000;

function requestHandler(req, res) {
  res.setHeader("Content-Type", "text/plain");

  if (req.url === "/") {
    res.writeHead(200).end("Welcome to the homepage!");
  } else if (req.url === "/about") {
    res.writeHead(200).end("Welcome to the about page!");
  } else {
    res.writeHead(500) .end("Error! File not found.");
  }
}

const server = http.createServer(requestHandler);

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
