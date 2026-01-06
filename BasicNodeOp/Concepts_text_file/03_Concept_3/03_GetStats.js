

const fs=require('fs');

fs.writeFileSync('./BasicNodeOp/Concepts_text_file/03_Concept_3/FileToDelete.txt','Sample content added','utf-8');

console.log("File created");

fs.stat('./BasicNodeOp/Concepts_text_file/03_Concept_3/FileToDelete.txt',(err, res)=>{
    if(err){
        console.log("Err while getting stats");
    }
    if(res){
        console.log("Log generated sucessfully .... \n", res);
        console.log(fs.statSync('./BasicNodeOp/Concepts_text_file/03_Concept_3/FileToDelete.txt').isFile());
    }
});
console.log("Completed")

// output 
// AzureAD+KiranKumar@KIRAN-K-D-L5420 MINGW64 /d/Tut (aru)
// $ node BasicNodeOp/Concepts_text_file/03_Concept_3/03_GetStats.js 
// File created
// Completed
// Log generated sucessfully ....
//  Stats {
//   dev: 1894713329,
//   mode: 33206,
//   nlink: 1,
//   uid: 0,
//   gid: 0,
//   rdev: 0,
//   blksize: 4096,
//   ino: 7036874417900569,
//   size: 20,
//   blocks: 0,
//   atimeMs: 1767712407598.618,
//   mtimeMs: 1767712407598.618,
//   ctimeMs: 1767712407598.618,
//   birthtimeMs: 1767712278113.3877
// }
// true