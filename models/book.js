const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const googleBookSchema = new Schema({
  title: String,
  authors: Array,
  description: String,
  image: {},
  link: String,
  bookID: String
});

const Book = mongoose.model("Book", googleBookSchema);

module.exports = Book;
