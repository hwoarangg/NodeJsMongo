var express = require('express');
var router = express.Router();
var User = require('../model/user');
var jwt = require('jwt-simple')

router.post('/register', (request, response) => {
    var user = new User(request.body);
    user.save((error, result) => {
        if (error) {
            console.log(error)
            return response.sendStatus(500).send({ message: error })
        }
        return response.sendStatus(200)
    });
})

router.post('/login', async (request, response) => {

    var userData = request.body;
    var data = await User.findOne({ email: userData.email });

    if (!data) {
        return response.status(401).send({ message: 'Bu isimde kullanıcı yok' })
    }

    if (data.password != userData.password) {
        return response.status(401).send({ message: 'Bu isimde kullanıcı yok !' })
    }

    var payload = {}
    var token = jwt.encode(payload, '12345')
    return response.status(200).send({ token });
})

var user = {
    router, checkAuthenticated: (request, response, next) => {
       console.log(request.header('auth'));

        if (!request.header('auth')) {
            return response.status(401).send({ message: "Oturum Hatası" });
        }

        var token = request.header('auth').split(' ')[1]
        console.log(token);
        
        var payload = jwt.decode(token,'12345');
        if (!payload) {
            return response.status(401).send({ message: "Toekn Oturum Hatası" });
        }

        next();
    }
}
module.exports = user;

