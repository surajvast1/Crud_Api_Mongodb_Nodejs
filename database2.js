
const connectDb = require('./db/connect')
const Product = require('./database/typeofdata')//the type of data is selected here


// connecting a file to database

const start = async()=>
{
    try
    {
        await connectDb()//this file is use to connect to database
        await Product.deleteMany();//this is use to remove previous data and add new files while uploading
        console.log("Details ready to be connected to the backend successfully");
    }
    catch(error)
    {
        console.log(error);
    }
}
start();
module.export = {start}

