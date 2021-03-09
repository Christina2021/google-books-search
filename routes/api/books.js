const router = require("express").Router();
const booksController = require("../../controller/booksController");

router.route("/")
    .get(booksController.all)
    .post(booksController.add);

module.exports = router;