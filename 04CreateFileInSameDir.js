const fs=require("fs");
// create a file , accept the file name from the command promt and the value
const input = process.argv;
fs.writeFileSync(input[2]+".js" ,input[3]);
console.log(input[2] ,"= from the command prompt input");

//out put
//----------------------
// node 04ReadFromDir 05Createdfile '{kiran, 25,Bengaluru}'
// 04Createdfile = from the command prompt input