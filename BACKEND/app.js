const express = require("express");
const cors = require("cors");
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
var bodyparser = require('body-parser');
const port = process.env.PORT || 3000;
var app = new express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: false
}));

mongoose.connect('mongodb+srv://userone:userone@ictakfiles.vfcnk.mongodb.net/LibApp?retryWrites=true&w=majority')

const userRouter = require('./routes/user');

app.use('/auth', userRouter);

function verifyToken(req, res, next) {

    if (!req.headers.authorization) {
        return res.status(401).send('Unauthorized request');
    }
    let token = req.headers.authorization.split('')[1];
    if (token == 'null') {
        return res.status(401).send('Unauthorized request');
    }
    let payload = jwt.verify(token, 'secretKey');
    console.log(payload);
    if (!payload) {
        return res.status(401).send('Unauthorized request');
    }
    req.userId = payload.subject;
    next();

}

app.listen(port, function() {
    console.log("Port listening at " + port);
});