const express=require('express');
const app=express();
//create one Middleware function

const reqFilterMW=(req, res, next)=>{
    if(!req.query.age){
// alert("provide your age in url parameter like ?age='12'");
// above alert message is use in server side application is not possible. Because alert used to display
// message in browser environment which run in the browser environment. Express is running in server environment
res.status(400).json({ error: "Please provide your age in the URL parameter: ?age='12'" });
//By doing this we will able to provide error info in json format
    }
    else{
        next();
    }
}
//call that Middleware function before your routing;
app.use(reqFilterMW);
// http://localhost:5000/?age=23 if we add parameter in url then only we are able to route , else we get err msg
app.get('/',(req, res)=>{
    res.send('Welcome to home page');
})
app.get('/help',(req, res)=>{
    res.send('<h1>This is the <b>help</b> page</h1>')
})
app.listen(5000);