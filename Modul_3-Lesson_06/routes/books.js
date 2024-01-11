const express = require("express");

const BookController = require("../controllers/book");

const router = express.Router();

router.get("/", BookController.getAllBooks);

router.get("/:id", BookController.getBook);

router.post("/", BookController.createBook);

router.put("/:id", BookController.updateBook);

router.delete("/:id", BookController.deleteBook);

router.patch("/:id/favorite", BookController.changeBookFavorite);

module.exports = router;
