const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll({
    order: [['title', 'ASC']],
  });

  return books;
};

const getById = async (id) => {
  const book = await Book.findByPk(id);

  return book;
};

const create = async ({ title, author, pageQuantity, publisher }) => {
  const newBook = await Book.create({ title, author, pageQuantity, publisher });

  return newBook;
};

const update = async (id, { title, author, pageQuantity, publisher }) => {
  const [updatedBook] = await Book.update(
    { title, author, pageQuantity, publisher },
    { where: { id } }
  );

  return updatedBook;
};

const remove = async (id) => {
  const book = await Book.destroy({ where: { id } });

  return book;
};

const getByAuthor = async (author) => {
  const books = await Book.findAll({
    where: { author },
    order: [['title', 'ASC']],
  });

  return books;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getByAuthor,
};
