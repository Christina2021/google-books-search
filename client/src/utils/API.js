/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
  // Find books
  findBooks: function(url) {
    return axios.get(url);
  }
};