const express = require('express');
const updateBookRouter = express.Router();
const BookData = require('../src/model/Bookdata');


updateBookRouter.post('/:id', (req, res) => {
    const id = req.params.id;
    BookData.findById(id, (err, bookData) => {
        if (!bookData) {
            res.status(404).send("Record Not Found");
        } else {
            bookData.bookName = req.body.bookName,
                bookData.authorName = req.body.authorName,
                bookData.genre = req.body.genre,
                bookData.image = req.body.image

            bookData.save().then(bookData => {
                    console.log(bookData);

                })
                .catch(err => {
                    res.status(400).send("Unable to Update the Database");
                });
        }
    });
});

module.exports = updateBookRouter;