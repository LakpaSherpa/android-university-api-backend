const express =  require('express');

const Passenger = require('../models/passengers');
const router = express.Router();

router.post('/register',(req,res,next) =>{
    const router = express.Router();


    if(err){
        throw new Error ('Could not hash!');

    }
    Passenger.create({
        FullName:req.body.FullName,
        Email:req.body.Eamil,
        Address:req.body.Address,
        phone: req.body.Gender,
        Password: req.body.Password,
        CnfPassword: req.body.CnfPassword


    })
});

router.post('/login',(req,res,next) =>{
    Passenger.findOne({FullName:req.body.FullName})
    .then((passenger) =>{
        if(passenger == null){
            let error = new Error ('Passenger not found');
            err.status = 401;
            return next(err);

        }
    }).catch(next);
})



module.exports = router;