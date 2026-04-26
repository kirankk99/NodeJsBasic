const fs = require("fs");

(async () => {
  const open = (await import("open")).default;

  const flagFile = "./.browser-opened";

  // if (!fs.existsSync(flagFile)) {
  await open("http://localhost:3000");
  console.log(flagFile);
  fs.writeFileSync(flagFile, "opened");
  // }

  // console.log("--", flagFile);
})();
