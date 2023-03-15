import express from 'express';
import { getBooks, getBookById, createBook, updateBook, deleteBook } from '../controllers/books';

const booksRouter = express.Router();

booksRouter.get('/', getBooks);
booksRouter.get('/:id', getBookById);
booksRouter.post('/', createBook);
booksRouter.put('/:id', updateBook);
booksRouter.delete('/:id', deleteBook);

export default booksRouter;