const express=require('express');
const app=express();
//call login html page
const path=require('path');
const dirPath=path.join(__dirname,'02Public')
//set template engine
app.get('/login',(req, res)=>{
    res.sendFile(`${dirPath}/login.html`)
    const { email, password } = req.body; 
})
app.set('view engine','ejs');
app.get('/profile',(req, res)=>{
    const user={
        name:"Kiran",
        mail:'kiran@gmail.com',
        country:'India',
        Skills:['java','C++', 'C','Python','C#', 'js']
    }
    res.render('profile',{user})
    })
app.listen(5000)