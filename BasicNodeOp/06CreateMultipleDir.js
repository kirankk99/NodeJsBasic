//create mutliple file in directory,
const fs = require("fs");
const path = require("path");

let FileIndexval = 0;
let MaxFiles = 6;
const Dirpath = path.join(__dirname, "06MultiFileCreated");

if (!fs.existsSync(Dirpath)) {
    fs.mkdirSync(Dirpath);
}

while (FileIndexval < MaxFiles) {
    fs.writeFileSync(`${Dirpath}/File_${FileIndexval}.js`, `//Sample text added in the file${FileIndexval} out of ${MaxFiles}`);
    FileIndexval++;
}

console.log(Dirpath);
