const express=require('express');
const app=express();
const path=require('path');

const publicpath=path.join(__dirname,'02Public');
//use is a middle wear.
//By using this we can access the html pages inside of 02public folder like 404, about etc
//But when we are rendering the pages in the path of browser url we need to give full name like about.html
app.use(express.static(publicpath));

app.listen(5000);