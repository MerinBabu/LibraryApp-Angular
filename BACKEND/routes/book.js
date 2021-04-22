const express = require('express');
const bookRouter = express.Router();
const Bookdata = require('../src/model/Bookdata');


bookRouter.get('', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    Bookdata.find()
        .then(function(books) {
            res.send(books);
        });

});

module.exports = bookRouter;