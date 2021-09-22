const express= require('express');
const path = require('path');
const app=express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade"); 
console.log(__dirname);

app.use('/', (req, res)=>{
    res.render('index', {title: "Express"})
    res.sendFile(path.join(__dirname, "public/sasuke.jpg"),'text.jpg')
    // res.download(path.join(__dirname, "public/sasuke.jpg"),'text.jpg')

    // res
    // .status("token","test", {
    //     expire: new Date(Date.now()+8*3600000)
    // })
    // .cookie("hello", "hello")
    // .redirect(301,"/admin")
    
})  

app.listen(5000);