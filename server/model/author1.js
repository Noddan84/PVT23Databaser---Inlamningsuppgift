import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
  fullName: String,
  books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }]
});

const Author = mongoose.model('Author', authorSchema);

export default Author;