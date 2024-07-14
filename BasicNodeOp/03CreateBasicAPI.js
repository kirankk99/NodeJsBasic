
const http=require('http')
const data=require("./02DataFile");
http.createServer((req, res)=>{
    try{

        res.writeHead(200, {'Content-Type':"application\json"});
        res.write(JSON.stringify(data));
        console.log('server running....');
        res.end();
    }
    catch{
        console.log('error')
    }
}).listen(4000)