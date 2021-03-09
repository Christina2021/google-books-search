const db = require('../models');

module.exports = {
    all: function(req, res) {
        db.Book
          .find(req.query)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    add: function(req, res) {
        db.Book
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    }
  };