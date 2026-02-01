const http = require("http");
// create a first serve
const myServer = http.createServer((req, res) => {
  console.log("new request received...");
  //   if you want to get the user data
  console.log(req.addListener());
  res.end("Hello from  my server..");
});
// once server created it should be listened on gthe port
// port is basically a door to access the server.
//  at a time a server can run on a single port

myServer.listen(8888, (err, res) => {
  console.log("server started listnenig....");
});
