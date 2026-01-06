const fs=require('fs');
// it return and handle the try and catch or err from the node
// This is the sync menthod provide by the node and it is blocking function
const fileData=fs.readFileSync('./BasicNodeOp/Concepts_text_file/03_Concept_3/test.txt','utf-8');
console.log(fileData);

// const fileData1=fs.readFile('./BasicNodeOp/Concepts_text_file/03_Concept_3/test.txt','utf-8');
//# the above one give the error 
// node:internal/errors:540
//       throw error;
//       ^
// TypeError [ERR_INVALID_ARG_TYPE]: The "cb" argument must be of type function. Received type string ('utf-8')

// -------------- use asyc methodology to handle these
const fileData1=fs.readFile('./BasicNodeOp/Concepts_text_file/03_Concept_3/test.txt','utf-8',(err, res)=>{

});

