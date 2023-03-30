require("dotenv").config(); 


//this file is main to connect to dtaabase
const mongoose = require("mongoose");

const connectDb = ()=>
{
    return mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = connectDb






