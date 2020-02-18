const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/book');
const auth = require('../routes/auth');

router.post('/booking', (req, res, next) => {
    // console.log({data: req.body})
   
                user = {
                    fullname:req.body.fullname,
                    email: req.body.email,
                    username : req.body.username,
                    address:req.body.address,
                    to:req.body.to,
                    from : req.body.from,
                    destination:req.body.destination
                }
                User.create(user).then((cuser)=>{
                    res.send(cuser);
                }).catch(next);
        
    
});

router.get('/me', auth.verifyUser, (req, res, next) => {
    // res.json({ username: req.user.username, firstName: req.user.firstName, lastName: req.user.lastName });
    res.json(req.user);
});
router.put('/me', auth.verifyUser, (req, res, next) => {
    User.findByIdAndUpdate(req.user._id, { $set: req.body }, { new: true })
        .then((user) => {
            res.json({ fullname: user.fullname, email: user.email, address: user.address, to: user.to,username:user.username,from:user.from,destination:user.destination });
        })
});
router.delete('/me', auth.verifyUser, (req, res, next) => {
    User.findByIdAndDelete(req.user._id)
        .then((user) => {
            res.json({ status: 'User deleted!', user: user })
        }).catch(next);
});
router.delete('/:userId', auth.verifyUser, auth.verifyAdmin, (req, res, next) => {
    User.findByIdAndDelete(req.params.userId)
        .then((user) => {
            res.json({ status: 'User deleted!', user: user });
        }).catch(next);
});
// router.get('/all', auth.verifyUser, auth.verifyAdmin, (req, res, next) => {
//     User.find()
//         .then((users) => {
//             res.json(users);
//         }).catch(next);
// });
module.exports = router;