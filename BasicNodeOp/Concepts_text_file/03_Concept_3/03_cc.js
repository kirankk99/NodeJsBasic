const fs = require("fs");
const path = require("path");

// const filePath = path.join(__dirname, "03_Concept.txt");

const res = fs.readFileSync("../03_Concept.txt", "utf-8");
console.log(res, "fetched res");
