const getAllBooks = (req, res, next) => {
  res.send("Get all Books");
};

const getBook = (req, res, next) => {
  const { id } = req.params;

  res.send(` Get Book - ${id}`);
};

const createBook = (req, res, next) => {
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
