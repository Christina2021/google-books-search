const db = require('../models');

module.exports = {
    all: function(req, res) {
        db.Book
          .find(req.query)
          .then(dbModel => {
            console.log(dbModel)
            res.json(dbModel)
          })
          .catch(err => res.status(422).json(err));
    },
    add: function(req, res) {
        db.Book
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
      db.Book
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
  };