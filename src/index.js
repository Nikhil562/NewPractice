const express=require("express");
const app=express();
const {PORT}=require('./config/serverSetup');
app.listen(PORT,()=>{
    console.log(`Connection at port no ${PORT}`)
})