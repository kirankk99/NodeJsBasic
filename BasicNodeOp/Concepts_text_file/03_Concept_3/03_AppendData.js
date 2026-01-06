const fs=require('fs');

// append the file data
// parameters are 'path of the file and the content of the file
fs.appendFileSync('./BasicNodeOp/Concepts_text_file/03_Concept_3/test.txt',`Hey Updated ${new Date()} \n`,);
// code will update like this
// My num :0987654321Hey Updated Tue Jan 06 2026 20:14:50 GMT+0530 (India Standard Time) 
// Hey Updated Tue Jan 06 2026 20:15:03 GMT+0530 (India Standard Time) 
// Hey Updated Tue Jan 06 2026 20:15:09 GMT+0530 (India Standard Time) 