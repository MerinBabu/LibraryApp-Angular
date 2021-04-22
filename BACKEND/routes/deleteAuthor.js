const express = require('express');
const deleteAuthorRouter = express.Router();
const AuthorData = require('../src/model/Authordata');

deleteAuthorRouter.delete('/:id', (req, res) => {
    const id = req.params.id;
    AuthorData.findByIdAndRemove({ _id: id }, (err, authorData) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).send(authorData)
        }
    });
});

module.exports = deleteAuthorRouter;