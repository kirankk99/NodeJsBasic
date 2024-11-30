// in this code process.argv used to read the inputs from the command promt while exicution the code
// Always 0th argument is node and 1st element will be current exicuting file name
const arg = process.argv;
console.log("Entered 1st val is \n", arg[2]);
console.log("Entered 2nd val is \n", arg[3]);
if (arg[2] && arg[3]) {
  console.log("total is", arg[2] + arg[3]);
}

//output
// PS D:\Tut\Nodejs\NodeJsBasic> node 07ReadFromCMD_Arguments 3 6
// Entered 1st val is
//  3
// Entered 2nd val is
//  6
