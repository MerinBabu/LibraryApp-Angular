const express = require('express');
const updateAuthorRouter = express.Router();
const AuthorData = require('../src/model/Authordata');


updateAuthorRouter.post('/:id', (req, res) => {
    const id = req.params.id;
    AuthorData.findById(id, (err, authorData) => {
        if (!authorData) {
            res.status(404).send("Record Not Found");
        } else {

            authorData.authorName = req.body.authorName,
                authorData.bestbookName = req.body.bestbookName,
                authorData.genre = req.body.genre,
                authorData.image = req.body.image

            authorData.save().then(authorData => {
                    console.log(authorData);

                })
                .catch(err => {
                    res.status(400).send("Unable to Update the Database");
                });
        }
    });
});

module.exports = updateAuthorRouter;