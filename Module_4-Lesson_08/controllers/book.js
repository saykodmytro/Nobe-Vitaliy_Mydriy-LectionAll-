const Book = require("../models/book");

const getAllBooks = async (req, res, next) => {
  console.log(req.user);
  try {
    const userId = req.user.id;
    const books = await Book.find({ ownerId: userId });
    //{ genre: "Action", favorite: true }
    res.send(books);
  } catch (error) {
    next(error);
  }
};

async function getBook(req, res, next) {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const book = await Book.findById(id);

    if (book === null) {
      return res.status(404).send("Book not found");
    }

    if (book.ownerId.toString() !== userId) {
      // return res.status(403).send("Forbidden");
      return res.status(404).send("Book not found");
    }

    res.send(book);
  } catch (error) {
    next(error);
  }
}

async function createBook(req, res, next) {
  // Add Joi before

  const book = {
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    year: req.body.year,
    ownerId: req.user.id,
  };

  try {
    const result = await Book.create(book);

    res.status(201).send(result);
  } catch (error) {
    next(error);
  }
}

const updateBook = async (req, res, next) => {
  const { id } = req.params;

  const book = {
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    year: req.body.year,
  };

  try {
    const result = await Book.findByIdAndUpdate(id, book, { new: true });

    if (result === null) {
      return res.status(404).send("Book not found");
    }

    res.send(result);
  } catch (error) {
    next(error);
  }
};

const deleteBook = async (req, res, next) => {
  const { id } = req.params;

  try {
    const result = await Book.findByIdAndDelete(id);

    if (result === null) {
      return res.status(404).send("Book not found");
    }

    res.send({ id });
  } catch (error) {
    next(error);
  }
};

const changeBookFavorite = async (req, res, next) => {
  const { id } = req.params;

  try {
    const result = await Book.findByIdAndUpdate(
      id,
      {
        favorite: req.body.favorite,
      },
      { new: true }
    );

    if (result === null) {
      return res.status(404).send("Book not found");
    }

    res.send(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
  changeBookFavorite,
};
