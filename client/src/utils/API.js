import axios from "axios";

export default {
  // Find books
  findBooks: function(url) {
    return axios.get(url);
  },
  getBooks: function() {
    return axios.get("/api/books");
  },
  saveBook: function(book) {
    return axios.post("/api/books", book);
  },
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  }
};