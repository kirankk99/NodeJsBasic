// de structured way of importing function by defult functions
const {Add, Sub, Multi, Divide, Reminer}=require("./02_AirtmeticOps");
console.log("addition val",Add(9,3));
console.log("Subtracted value is", Sub(9,3));
console.log("Divided value",Divide(9,3));
console.log("Multiplied value",Multi(9,3));
console.log("Reminder value", Reminer(9,3));

// output
// $ node ./02_codeF/02_cc.js 
// addition val 12
// Subtracted value is 6
// Divided value 3
// Multiplied value 27
// Reminder value 0