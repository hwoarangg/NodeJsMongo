var express = require('express');
var User = require('../services/userService')
var Auther = require('../model/auther')
var router = express.Router();


router.post('/add',User.checkAuthenticated, (request, response) => {
    var auther = new Auther(request.body);
    auther.save((error, result) => {
        if (error) {
            console.log(error)
            return response.sendStatus(500).send({ message: error })
        }
        return response.sendStatus(201)
    });
})

router.get('/list',User.checkAuthenticated, async (request, response) => {
    var auther = await Auther.find({}, '-__v');
    response.send(auther);

})

var auther ={router}
module.exports =auther ;

