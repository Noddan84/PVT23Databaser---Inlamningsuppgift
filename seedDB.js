import mongoose from "mongoose";
import authorSchema from "./api/author.js";
import bookSchema from "./api/books.js";
import faker from "faker";

console.log("Start seeding database!");

const Author = mongoose.model("Author", authorSchema);
const Book = mongoose.model("Book", bookSchema);

async function seedDB() {
  try {
    await mongoose.connect("mongodb+srv://csnoddan:kim123@cluster0.nw3iadb.mongodb.net/test");
    const booksList = await createBooks(50);
    console.log("BooksList - ", booksList);
  } catch (error) {
    console.log(`Errormessage: ${error}`);
  }
}

async function createBooks(amount) {
  const authorList = [];
  const bookList = [];
  for (let i = 0; i < amount; i++) {
    const newAuthor = new Author({
      fullName: faker.name.findName()
    });
    await newAuthor.save();
    authorList.push(newAuthor);
    const newBook = new Book({
      title: faker.lorem.words(),
      isbnCode: faker.random.alphaNumeric(10),
      genre: faker.random.arrayElement(['Deckare', 'Sci-Fi', 'Barnbok', 'Ungdomsbok', 'Fantasy', 'Thriller', 'Skräck', 'Komedi']),
      releaseDate: faker.date.past(),
      description: faker.lorem.paragraph(),
      author: newAuthor._id
    });
    await newBook.save();
    bookList.push(newBook);
  }
  return bookList;
}

export default seedDB;