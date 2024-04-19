import books from "./api/books.js";
import author from "./api/author.js"

export default function (server, mongoose) {  
    books(server, mongoose),
      author(server, mongoose)      
}