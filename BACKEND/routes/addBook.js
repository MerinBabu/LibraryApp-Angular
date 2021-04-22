const express = require('express');
const addBookRouter = express.Router();
const Bookdata = require('../src/model/Bookdata');





addBookRouter.post('/', (req, res) => {

    var book = {
        bookName: req.body.book.bookName,
        authorName: req.body.book.authorName,
        genre: req.body.book.genre,
        image: req.body.book.image

    }
    var book = Bookdata(book)
    book.save((err, bookData) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).send(bookData)
        }
    });

});



module.exports = addBookRouter;