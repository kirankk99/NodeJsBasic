const { error } = require("console");
const fs = require("fs");
console.log("1: Start");

setTimeout(() => {
  console.log("2: setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("3: Promise");
});

const m = fs.readFile("../00_RoadMap.txt", "utf-8", (err, res) => {
  if (err) {
    console.log("error in readning file \n", err);
  } else {
    console.log("This is the file content:\n", res);
  }
});

console.log("4: End");

// just a console is considered non bloking statement and in even loop it will be executed first
// Then the priority is form the synchronus code block like file reader with sync
// Then the micro task are read and executed , here promises are considered as micro task and
// at the end the setTimeOut and the setInterval are used for the execuion and it is a macrotask
// Synchronization and the even handlig in node js is more important as node js is a single threaded
// execution system and it should identify the blocking and non blocking code to execute faster and quick response
