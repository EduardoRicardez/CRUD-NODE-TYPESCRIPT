import express from "express";
import booksRouter from "./routes/books";

const app = express();
app.use(express.json());

const PORT = 3000;

app.get("/ping", (_, res) => {
  console.log("someone pinged here!!");
  res.send("pong");
});

app.use(booksRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
