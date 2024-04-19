
export default function (server, mongoose) {
  const bookSchema = new mongoose.Schema({
    title: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author' },
    genre: String,
    releaseDate: Date,
    isbnCode: String,
    description: String
  });

  const Book = mongoose.model('Book', bookSchema);

  // Express route för att hämta böcker med författare
  server.get('/api/books', async (req, res) => {
    try {
      const books = await Book.find().populate("author");
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json({ message: "Ett fel inträffade", error });
    }
  });


  // Skapar en GET-route för att hämta en specifik bok med ett specifikt ID.
  server.get('/api/books/:id', async (req, res) => {
    try {
      const book = await Book.findById(req.params.id).populate("author");
      if (!book) {
        return res.status(404).json({ message: "Boken hittades inte" });
      }
      res.json(book);
    } catch (error) {
      res.status(500).json({ message: "Ett fel uppstod på servern vid hämtning av en bok." });
    }
  });

  server.post('/api/books', async (req, res) => {
    try {
      const { title, author, genre, releaseDate, isbnCode, description } = req.body;

      // Skapa en ny bok
      const newBook = new Book({ title, author, genre, releaseDate, isbnCode, description });
      const savedBook = await newBook.save();
      res.status(201).json(savedBook);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Ett fel uppstod på servern vid skapande av ny bok." });
    }
  });

 
  server.put('/api/books/:id', async (req, res) => {
    try {
      const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('author');
      if (!updatedBook) {
        return res.status(404).json({ message: "Boken hittades inte" });
      }
      res.json(updatedBook);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Ett fel uppstod på servern vid uppdatering av bok." });
    }
  });

  // Skapar en DELETE-route för att radera en bok med ett specifikt ID.
  server.delete('/api/books/:id', async (req, res) => {
    try {
      const deletedBook = await Book.findByIdAndDelete(req.params.id);
      if (!deletedBook) {
        return res.status(404).json({ message: "Boken hittades inte" });
      }
      // Nu använder vi populate för att fylla på författarens information i den raderade boken
      await deletedBook.populate('author').execPopulate();
      res.json({ message: "Boken har raderats!", deletedBook });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Ett fel uppstod på servern vid radering av bok." });
    }
  })
};