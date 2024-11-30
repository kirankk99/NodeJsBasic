const express=require('express');
const app=express();

app.get('',(req, res)=>{
    res.send('Hi this is the home page')
})
app.get('/about', (req, res)=>{
    res.send('Hi this is about page of the app')
})
 app.listen(5000)