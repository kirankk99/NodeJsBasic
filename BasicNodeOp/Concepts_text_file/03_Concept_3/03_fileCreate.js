const fs = require('fs');
// 
fs.writeFile('./BasicNodeOp/Concepts_text_file/03_Concept_3/test.txt', 'Hello Node.js', (err) => {
  if (err) throw err;
  console.log('File created');
});
