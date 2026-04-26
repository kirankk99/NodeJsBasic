// --------------
const fs = require("fs");
const open = require("open");

const flagFile = "./.browser-opened";

if (!fs.existsSync(flagFile)) {
  open("http://localhost:9000");
  fs.writeFileSync(flagFile, "opened");
}
