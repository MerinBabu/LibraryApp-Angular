const express = require('express');
const authorRouter = express.Router();
const Authordata = require('../src/model/Authordata');


authorRouter.get('', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    Authordata.find()
        .then(function(authors) {
            res.send(authors);
        });

});

module.exports = authorRouter;