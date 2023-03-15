import { Request, Response } from 'express';
import { getFirestore } from '../config/firebase';
const firestore = getFirestore()
export async function getBooks(req: Request, res: Response): Promise<void> {
  try {
    const books = await firestore.collection('books').get().then(({docs})=> docs.map((doc)=>doc.data()))
    res.json(books);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al obtener los libros');
  }
}

export async function getBookById(req: Request, res: Response): Promise<void> {
  const id = req.params.id;

  try {
    const book = await firestore.collection('books').doc(id).get().then((doc)=> doc.data());

    if (!book) {
      res.status(404).send(`No se encontró ningún libro con ID ${id}`);
      return;
    }

    res.json(book);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al obtener el libro');
  }
}

export async function createBook(req: Request, res: Response): Promise<void> {
  const bookData = req.body;

  try {
    const book = await firestore.collection('books').add(bookData);
    res.json(book);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al crear el libro');
  }
}

export async function updateBook(req: Request, res: Response): Promise<void> {
  const id = req.params.id;
  const bookData = req.body;

  try {
    const book = await firestore.collection('books').doc(id).update(bookData);


    if (!book) {
      res.status(404).send(`No se encontró ningún libro con ID ${id}`);
      return;
    }
   
    res.json(book);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al actualizar el libro');
  }
}

export async function deleteBook(req: Request, res: Response): Promise<void> {
  const id = req.params.id;

  try {
    const book = await firestore.collection('books').doc(id).delete();


    if (!book) {
      res.status(404).send(`No se encontró ningún libro con ID ${id}`);
      return;
    }
    res.json({ message: `Libro con ID ${id} eliminado` });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al eliminar el libro');
  }
}