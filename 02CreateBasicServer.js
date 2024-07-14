const http=require('http');
 http.createServer((req, res)=>{
    try{
    console.log('Server running....');
        res.write(`<h1 color='red' align='center'>Hello welcome Kiran</h1>`);
        res.end();
    }catch(err){
console.log('error')
    }
    
 }).listen(4000)

 ///////////////////////
//  http.createServer((Request, Response)=>{
//     Response.write("<h1 style=text-align:center>Hello kiran, Welcome to node js basics</h1>");
//     Response.end();
// }).listen(4300);