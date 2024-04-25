import { faker } from '@faker-js/faker';
import mongoose from 'mongoose';
import Author from "./server/model/author1.js";
import Book from "./server/model/books1.js";

console.log("Start seeding database!");

async function seedDB() {  
  try {
    await mongoose.connect("mongodb+srv://csnoddan:kim123@cluster0.nw3iadb.mongodb.net/test")
    console.log(".: Connected! :.")
    const authorList = await createAuthors(100)
    const bookList = await createBooks(100, authorList)
    console.log("AuthorList - ", authorList)
    console.log("BookList - ", bookList)
  } catch (error) {
    console.log(`Errormessage: ${error}`);
  }
}

async function createAuthors(amount) {  
  const authorList = []
  for (let i = 0; i < amount; i++) {
    const newAuthor = new Author({
      fullName: faker.person.fullName()
    })
    await newAuthor.save()
    authorList.push(newAuthor)
    console.log(`New author - ${newAuthor.fullName} - has been created.`)
  }
  console.log(`${amount} authors have been seeded.`)
  return authorList
}

async function createBooks(amount, authorList) {
  
  const bookList = [];
  for (let i = 0; i < amount; i++) {
    const randomAuthor = faker.helpers.arrayElement(authorList);
    const newBook = new Book({
      title: faker.lorem.words(),
      author: randomAuthor._id, 
      genre: faker.helpers.arrayElement(['Deckare', 'Sci-Fi', 'Barnbok', 'Ungdomsbok', 'Fantasy', 'Thriller', 'Skräck', 'Komedi']),
      releaseDate: faker.date.past(),
      isbnCode: faker.string.numeric(13),
      description: faker.lorem.paragraph()
    });
    await newBook.save();
    bookList.push(newBook);        
    randomAuthor.books.push(newBook._id);
    await randomAuthor.save(); 
  }  
  return bookList;
}
export default seedDB;
seedDB();