const express = require('express');
const addAuthorRouter = express.Router();
const Authordata = require('../src/model/Authordata');





addAuthorRouter.post('/', (req, res) => {

    var author = {
        authorName: req.body.author.authorName,
        bookName: req.body.author.bookName,
        genre: req.body.author.genre,
        image: req.body.author.image

    }
    var author = Authordata(author)
    author.save((err, authorData) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).send(authorData)
        }
    });

});



module.exports = addAuthorRouter;