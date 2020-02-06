const mongoose = require('mongoose');
const passengerSchema = new mongoose.Schema({
    FullName:{
        type:String,
        required:true,
        unique:true
    },
    Email:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    Phone:{
        type:String,
        required:true


    },
    Password:{
        type:String,
        required:true
    },
    CnfPassword:{
        type:String,
        required:true

    }
    
},{timestamps:true});
module.exports= mongoose.model('Passenger',passengerSchema);