const fs=require('fs');

// -------------- use asyc methodology to handle these
fs.readFile('test.txt','utf-8',(err, res)=>{
if(err){
    console.log("Error catched", err);
}else{
    console.log("result of the file \n", res);
}
});
// it return and handle the try and catch or err from the node
// This is the sync menthod provide by the node and it is blocking function
const fileData=fs.readFileSync('test.txt','utf-8');
console.log("fetched quick after read \n",fileData);

// The above function will not return anything and it should be handled with passing a call back functions
// ------------- Get the out like this in console
// AzureAD+KiranKumar@KIRAN-K-D-L5420 MINGW64 /d/Tut (aru)
// $ node BasicNodeOp/Concepts_text_file/03_Concept_3/03_cc.js
// Hello Node.js
// My num :0987654321
// result of the file Hello Node.js
// My num :0987654321
