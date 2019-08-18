var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser')
var cors = require('cors');
var auther = require('./services/autherServices')
var user = require('./services/userService')
var app= express();

var url = "mongodb://localhost:27017/teacherbase";
  mongoose.connect(url, function(err, db) {
    if (!err) 
    console.log("Veritabaına Baglandı");
  });


  app.use(cors());
  app.use(bodyParser.json());

  app.use('/auther',auther.router)
  app.use('/user', user.router)
  app.listen(8065)