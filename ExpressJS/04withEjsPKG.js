const express=require('express');
const app=express()
const path=require('path');
const dirPath=path.join(__dirname,'02Public');
//render the static html page using send file method
app.get('',(rq, rs)=>{
    rs.sendFile(`${dirPath}/home.html`)
})

//render the dynamic data passing to external file

//set the ejs pkg path to app

app.set('view engine', 'ejs');
app.get('/profile',(_,res)=>{
    const user={
        name:"Kiran",
        mail:'kiran@gmail.com',
        country:'India'
    }
    res.render('profile',{user})
})
app.get('*',(re, rs)=>{
    rs.sendFile(`${dirPath}/404.html`)
    })
app.listen(5000)