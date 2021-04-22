const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var NewBookSchema = new Schema({
    bookName: String,
    authorName: String,
    genre: String,
    image: String

});

var Bookdata = mongoose.model("bookdatas", NewBookSchema);

module.exports = Bookdata;