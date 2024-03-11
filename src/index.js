const express=require("express");
const app=express();
const {City}=require('./models/index')
const {PORT}=require('./config/serverSetup');
const CityRepository=require('./repository/city-repository');
app.listen(PORT,()=>{
    console.log(`Connection at port no ${PORT}`)
    const repo=new CityRepository();
    repo.createCity({name:"York"})
}) 