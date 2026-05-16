const fs = require("fs").promises;
const path = require("path");
const data = require("../data/leaveData.json");
const directryName = path.join(__dirname, "../data/leaveData.json");

//
async function readAlluserLeave() {
  const data = await fs.readFile(directryName, "utf-8");
  return JSON.parse(data);
}
async function editUserLeave(UpdatedData) {
  await fs.writeFile(directryName, JSON.stringify(UpdatedData, null, 2));
  return JSON.parse(UpdatedData);
}
//
module.exports = {
  readAlluserLeave,
  editUserLeave,
};
