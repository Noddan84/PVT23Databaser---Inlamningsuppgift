import books from "./server/api/books.js";
import author from "./server/api/author.js";

export default function (server, mongoose) {  
  books(server, mongoose),
  author(server, mongoose)   
}