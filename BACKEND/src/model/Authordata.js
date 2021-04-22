const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var NewAuthorSchema = new Schema({
    authorName: String,
    bestbookName: String,
    genre: String,
    image: String

});

var Authordata = mongoose.model("authordatas", NewAuthorSchema);

module.exports = Authordata;