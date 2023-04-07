const http = require("http");
const port = 4000;

const server = http.createServer(function (req, res) {
  const url = req.url;
  const [path, query] = url.split("?");
  if (path === "/") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ url, path, query })); //write a response to the client
    res.end(); //end the response
    return;
  }
  if (path === "/hello") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("hello"); //write a response to the client
    res.end(); //end the response
    return;
  }
  console.log("after res");
});

server.listen(port, () => {
  console.log(`Example node app listening on port ${port}`);
});
