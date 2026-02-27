const fs = require("fs").promises; // useed to handle file system in app
const path = require("path"); // used to access the file path

//
const userFilePath = path.join(__dirname, "../data/users.json");

async function readAllUsers() {
  const data = await fs.readFile(userFilePath, "utf-8");
  return JSON.parse(data);
}
async function writeUsers() {
  await fs.writeFile(filePath, JSON.stringify(users, null, 2));
}

module.exports = {
  readAllUsers,
  writeUsers,
};
