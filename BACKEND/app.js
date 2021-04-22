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
const bookRouter = require('./routes/book');
const authorRouter = require('./routes/author');
const addBookRouter = require('./routes/addBook');
const addAuthorRouter = require('./routes/addAuthor');
const updateBookRouter = require('./routes/updateBook');
const deleteBookRouter = require('./routes/deleteBook');
const updateAuthorRouter = require('./routes/updateAuthor');
const deleteAuthorRouter = require('./routes/deleteAuthor');

app.use('/auth', userRouter);
app.use('/books', bookRouter);
app.use('/authors', authorRouter);
app.use('/addbook', addBookRouter);
app.use('/addauthor', addAuthorRouter);
app.use('/updatebook', updateBookRouter);
app.use('/deletebook', deleteBookRouter);
app.use('/updateauthor', updateAuthorRouter);
app.use('/deleteauthor', deleteAuthorRouter);

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