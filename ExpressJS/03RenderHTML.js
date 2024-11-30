const express = require("express");
const app = express();
const path = require("path");

const direpart = path.join(__dirname, "02Public");

app.get("", (rq, rs) => {
  rs.sendFile(`${direpart}/home.html`);
});
app.get("/profile", (rq, rs) => {
  rs.sendFile(`${direpart}/about.html`);
});
app.get("/*", (rq, rs) => {
  rs.sendFile(`${direpart}/404.html`);
});
app.listen(5000);
