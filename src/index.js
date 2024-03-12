const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require('./config/serverSetup');
const ApiRoutes = require('./routes/index');
const {Airport, City}=require('./models/index')
const sequelize= require('sequelize')
const db= require('./models/index')
const city=require('./models/city')


const setupAndStartServer = async () => {

//     // create the express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', ApiRoutes);

//     // app.listen(PORT, async () => {
//     //     console.log(`Server started at ${PORT}`);
//     // const airports=await Airport.findAll({
//     //     include:[
//     //         {
//     //             model:City
//     //         }
//     //     ]
//     // })
//     // db.sequelize.sync({alter:true})
//     // const city=await City.findOne({
//     //         where:{
//     //             id: 107
//     //         }
//     // });
//     // const airports= await city.getAirports()
//     // console.log(city, airports)//onnce we hv synchromised it we are getting this data 



//     // const newAirport=await Airport.create({
//     //     name:"Jinal Viajynagar Airport",
//     //     cityId:3
//     // })  // added into airport table 
//     // console.log(city.airports)
//     // });
    app.listen(PORT, async () => {
        console.log(`Server started at ${PORT}`);
        if(process.env.SYNC_DB) {
            db.sequelize.sync({alter: true});//we need to sync all time  bs of synching we hv func slike getAirports, addAirports etc 
        }
    });

}

setupAndStartServer();

