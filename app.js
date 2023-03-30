// to connect to the database id
require("dotenv").config(); 

//app.js files//
const express = require("express");
const app = express(); 
const mongoose = require("mongoose");
const port = 5000;
            

// taking from database
const product_route = require('./routes/poductdetails')

app.use(express.json());

app.get("/",(req,res)=>
{
    res.send('I am here on home page');
})

// displaying api from the database
app.use('/api',product_route)

const start = async () =>
{
    try{
            app.listen(port, () => {
                console.log(`Website is live listening on 5000`)
            });
    } 
    catch(error){
        console.log(error);
    }
};

start()
