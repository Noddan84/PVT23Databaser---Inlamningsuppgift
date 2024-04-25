import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author' },
  genre: String,
  releaseDate: Date,
  isbnCode: String,
  description: String
});

const Book = mongoose.model('Book', bookSchema);

export default Book;