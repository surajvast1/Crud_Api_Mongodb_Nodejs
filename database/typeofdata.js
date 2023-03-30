
//here the datatype is added

const mongoose = require("mongoose");
const productscema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    price:{
          type:Number,
          required:true, 
    },
    featured:{
        type:Boolean,
        default:false,
    },
    company:{
        type:String,
    }
}
);
module.exports = mongoose.model("Product",productscema)