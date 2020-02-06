//--------for Airline Reservation System  WebApi-------//
const express = require ('express');
const mongoose = require('mongoose');

const PassengerRouter = require("./routes/passengers");

const url = 'mongodb://localhost:27017/Airline';
const PORT = 4000;

const app = express();
app.use(express.static(__dirname + "/public"));
mongoose.connect(url,{useNewUrlParser:true, useUnifiedTopology:true,use, useFindAndModify:false, useCreateIndex:true})
.then((db) =>{
    console.log("Connected to mongodb");

}, (err) =>console.log(err));

app.use('/airline/passenger', userRouter);

app.listen(PORT, ()=>{
    console.log(`App is running at localhost:${PORT}`);
});





