const fs=require('fs');

fs.writeFileSync("./BasicNodeOp/Concepts_text_file/03_Concept_3/FileToDelete.txt","File Added and deleted", 'utf-8');
console.log('File created with name FileToDelete.txt');
setTimeout(()=>{
console.log('Deleting ........');
fs.unlinkSync("./BasicNodeOp/Concepts_text_file/03_Concept_3/FileToDelete.txt");
console.log('Deleted successfully');
},1000)


// -----------------------------------------------------------------------
// file created and deleted by the above function
//  node BasicNodeOp/Concepts_text_file/03_Concept_3/03_DeleteFile.js 
// File created with name FileToDelete.txt
// Deleting ........
// Deleted successfully