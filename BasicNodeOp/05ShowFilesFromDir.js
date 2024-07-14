
//this code shows the files in the same directory.
const fs=require("fs")
const path=require("path")
const dirPath=path.join(__dirname,'')
console.log(dirPath);
fs.readdir(dirPath, (error, files)=>{
    try{
        files.forEach(element => {
            console.log("fileName", element)
        });

    }
    catch{
        console.log(error)
    }
})
//output
// D:\Tut\Nodejs\NodeJsBasic
// fileName .git
// fileName .gitignore
// fileName 01NodejsStart.js
// fileName 02CreateBasicServer.js
// fileName 02DataFile.js
// fileName 03CreateBasicAPI.js
// fileName 04Createdfile.js
// fileName 04ReadFromDir.js
// fileName 05ShowFilesFromDir.js
// fileName README.md

// const dirPath=path.join(__dirname,'06MultiFileCreated')  // if the path joined inner folder.

//output 
// D:\Tut\Nodejs\NodeJsBasic\06MultiFileCreated
// fileName File_0.js
// fileName File_1.js
// fileName File_2.js
// fileName File_3.js
// fileName File_4.js
// fileName File_5.js