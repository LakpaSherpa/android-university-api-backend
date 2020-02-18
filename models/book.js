const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    to:{
        type:String,
        required:true
    },
    from:{
        type:String,
        required:true
    },
    destination:{
        type:String,
        required:true
    }

}, {timestamps:true});
module.exports.mongoose.module('User', userSchema);