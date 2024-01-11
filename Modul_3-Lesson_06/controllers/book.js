const Book = require("../models/book");

const getAllBooks = async (req, res, next) => {
  const books = await Book.find({ genre: "Horor", favorite: true });
  res.send(books);
};

const getBook = async (req, res, next) => {
  const { id } = req.params;

  const book = await Book.findById(id);

  if (book === null) {
    return res.status(404).send("Book not found");
  }

  res.send(book);
};

const createBook = (req, res, next) => {
  const book = {
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    year: req.body.year,
  };

  const result = await Book.create(book);

  res.send("Create Book");
};

const updateBook = (req, res, next) => {
  const { id } = req.params;
  res.send(` Update Book ${id}`);
};

const deleteBook = (req, res, next) => {
  const { id } = req.params;
  res.send(` Delete Book ${id}`);
};

const changeBookFavorite = (req, res, next) => {
  const { id } = req.params;
  res.send(` Change Book ${id} Favorire`);
};

module.exports = {
  getAllBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
  changeBookFavorite,
};
