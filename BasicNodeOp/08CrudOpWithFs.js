// Create, Read, Update, Delete operations using the fs lib of the node js

// 1 create the file

const fs = require("fs");
const path = require("path");
const DName = path.join(__dirname, "08CreatedByCRUD");
const currentFile = path.join(__filename, "");
const filePath = DName + "/FileCreatedByCRUD.js";
console.log(DName, filePath);
const ch = process.argv;
switch (ch[2]) {
  case "Create":
    // Create the file inside of the new Dir
    //Create a directory if not exists
    if (!fs.existsSync(DName)) {
      fs.mkdirSync(DName);
    }
    fs.writeFileSync(filePath, `///The file is created by CRUD operation `);
    console.log("File created ......");
    break;
  //Delete the file inSide of the Dir
  case "Delete":
    if (!fs.existsSync(DName)) {
      console.log("Directory not exist");
    } else if (!fs.existsSync(filePath)) {
      console.log(`File doesn't exists`);
    } else {
      try {
        fs.unlinkSync(filePath);
        console.log("file deleted");
      } catch (err) {
        console.log("file not found");
      }
    }
    break;
  case "Append":
    fs.appendFile(filePath, "///Sample append data", (err, file) => {
      try {
        if (!err && file) {
          console.log(file);
        }
      } catch (err) {
        console.log("error");
      }
    });

    case "Read":
        if(fs.existsSync(filePath)){

            fs.readFile(filePath,'utf8',(err, file)=>{
                try{
                    console.log(file)
                }
                catch{
                    console.log("error")
                }
            })
        }
        else{
            console.log("file not exists")
        }
        break;
        case "Rename":
            if(fs.existsSync(filePath)){

                fs.rename(filePath, DName+"/CreatedFileRenamed1.js",(err, res)=>{
                    try{
                        
                      console.log('File Renamed')
    
                    }
                    catch{
                        console.log("Error")
                    }
                })
            }else{
                console.log("File not exists")
            }
            default: console.log("Enter correct argument among ['Create' , 'Delete' , 'Rename', 'Append', 'Read']");
            break;
}
