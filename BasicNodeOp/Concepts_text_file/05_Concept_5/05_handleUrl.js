const http = require("http");
const fs = require("fs");
const path = require("path");
const iurl = require("url");
//
const MyPageServer = http.createServer((req, res) => {
  // create a log file inside and store required info
  const log = `${Date.now()}: ${req.url} A new request recived ^`;
  fs.appendFile("log.txt", log, (errV, dataa) => {
    console.log(errV);
  });
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home Page");
  } else if (req.url === "/about" && req.method === "GET") {
    const aboutPage = path.join(__dirname, "05_aboutPage.html");
    fs.readFile(aboutPage, "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error loading page");
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page Not Found");
  }
});

MyPageServer.listen(8880, (re, rs) => {
  console.log("server started by kiran");
});
