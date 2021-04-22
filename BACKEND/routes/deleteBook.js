const express = require('express');
const deleteBookRouter = express.Router();
const BookData = require('../src/model/Bookdata');

deleteBookRouter.delete('/:id', (req, res) => {
    const id = req.params.id;
    BookData.findByIdAndRemove({ _id: id }, (err, bookData) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).send(bookData)
        }
    });
});

module.exports = deleteBookRouter;