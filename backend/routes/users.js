const router = require('express').Router();
let User = require('../models/user.model');

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const newUser = new User({
        username,
        password,
    });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' +err));

});

router.route("/").post( (req, res)=> {
    
    const { username, password} = req.body
    User.findOne({ username: username}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 
module.exports = router;