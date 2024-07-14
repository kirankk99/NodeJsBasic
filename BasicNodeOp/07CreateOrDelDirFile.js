
//the above code used to create or delete the file in the same directory. It is not taking any 
// path of the directory
const fs = require('fs');
const input = process.argv;
console.log(input);

if (input[2] == "add") {
    if(fs.existsSync(input[3])){
        console.log('File exist');
    }
    else{
        fs.writeFileSync(input[3], input[4]);
    }
} else if (input[2] == 'remove') {
    if (fs.existsSync(input[3])) {
        fs.unlinkSync(input[3]);
    } else {
        console.log(`File ${input[3]} does not exist.`);
    }
} else {
    console.log("Invalid operation. Use 'add' or 'remove'.");
}

//
// PS D:\Tut\Nodejs\NodeJsBasic> node 07CreateOrDelDirFile "add" "07CreatedByCMD" "Sample data after file created by CMD"
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'D:\\Tut\\Nodejs\\NodeJsBasic\\07CreateOrDelDirFile',
//   'add',
//   '07CreatedByCMD',
//   'Sample data after file created by CMD'
// ]

