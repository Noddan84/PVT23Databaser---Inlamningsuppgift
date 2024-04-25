
import Author from "../model/author1.js";

export default function (server, mongoose) {
 

  // GET route för att hämta författare
  server.get('/api/authors', async (req, res) => {
    try {
      const authors = await Author.find().populate("books");
      res.status(200).json(authors);
    } catch (error) {
      res.status(500).json({ message: "Ett fel inträffade", error });
    }
  });

  // Skapar en GET-route för att hämta en specifik författare med ett specifikt ID.
  server.get('/api/authors/:id', async (req, res) => {
    try {
      const author = await Author.findById(req.params.id).populate("books");
      if (!author) {
        return res.status(404).json({ message: "Författaren hittades inte" });
      }
      res.json(author);
    } catch (error) {
      res.status(500).json({ message: "Ett fel uppstod på servern vid hämtning av en författare." });
    }
  });

  // Skapar en POST-route för att lägga till en ny författare.
  server.post('/api/authors', async (req, res) => {
    try {
      const { fullName, books } = req.body;
      const newAuthor = new Author({ fullName, books });
      const savedAuthor = await newAuthor.save();          
      res.status(201).json(savedAuthor);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Ett fel uppstod på servern vid skapande av ny författare." });
    }
  });

  // Skapar en PUT-route för att uppdatera en författare med ett specifikt ID.
  server.put('/api/authors/:id', async (req, res) => {
    try {
      const updatedAuthor = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedAuthor) {
        return res.status(404).json({ message: "Författaren hittades inte" });
      }
      res.json(updatedAuthor);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Ett fel uppstod på servern vid uppdatering av författare." });
    }
  });

  // Skapar en DELETE-route för att radera en författare med ett specifikt ID.
  server.delete('/api/authors/:id', async (req, res) => {
    try {
      const deletedAuthor = await Author.findByIdAndDelete(req.params.id);
      if (!deletedAuthor) {
        return res.status(404).json({ message: "Författaren hittades inte" });
      }
      res.json({ message: "Författaren har raderats!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Ett fel uppstod på servern vid radering av författare." });
    }
  });

  //Belastningstest via GET
  server.get('/api/load-test2', async (req, res) => {
    try {
      const authors = await Author.find().populate("books");
      res.status(200).json(authors);
    } catch (error) {
      res.status(500).json({ message: "Ett fel inträffade", error });
    }
  });

};