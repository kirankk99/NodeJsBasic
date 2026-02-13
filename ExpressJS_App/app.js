const fs = require("fs");
const express = require("express");
const http = require("http");

const apps = express(); //initialise express

apps.get("/", (re, rs) => {
  return rs.send("This is home page");
});

// about page
apps.get("/about", (re, rs) => {
  return rs.send("This is about page");
});

// help page
apps.get("/help", (re, rs) => {
  return rs.send("This is help page");
});

// now create server and listen on port

// const myServer = http.createServer(apps);

// myServer.listen(9000, () => {
//   console.log("Server started . . . .");
// });

// handle this with express js

apps.listen(9000); // the code in http and then listen replaced with express
