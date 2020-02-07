const express =  require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserRouter = require('../models/users');
const router = express.Router();

router.post('/register',(req,res,next) =>{
    let Password = req.body.Password;
    bcrypt.hash(Password,10,function(err,hash){
        if(err){
            throw new Error('Could not hash!');
        }
    
    user.create({
        FullName:req.body.FullName,
        Email:req.body.Eamil,
        Address:req.body.Address,
        Phone: req.body.Phone,
        Password: req.body.Password,
        CnfPassword: req.body.CnfPassword


    }).then((user) =>{
        let token = jwt.sign({_id:user._id},'secretKey');
        res.json({status: "Register Successfully", user:user._id, token:token});
        }).catch(next);
    });

});

router.post('/login',(req,res,next) =>{
    User.findOne({FullName:req.body.FullName})
    .then((user) =>{
        if(user == null){
            let err = new Error ('Users not found');
            err.status = 401;
            return next(err);

        }else{
            bcrypt.compare(req.body.Password, user.Password)
            .then((isMatch)=>{
                if(!isMatch){
                    let err = new Error('Password does not match');
                    err.status = 401;
                    return next(err);

                }
                let token = jwt.sign({_id: user._id}, 'secretKey');
                res.json({ status: 'Login Successful',user:user._id,image:user.ProfilePicture,token:token});
            }).catch(next);
        }
    }).catch(next);
});



module.exports = router;