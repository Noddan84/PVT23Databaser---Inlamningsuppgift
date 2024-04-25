import express from "express"
import mongoose from "mongoose"
import apiRegister from "./api-register.js"

const server = express()
const port = 3333
server.use(express.json())
mongoose.connect("mongodb+srv://csnoddan:kim123@cluster0.nw3iadb.mongodb.net/test")
apiRegister(server, mongoose)
server.listen(port, () => console.log(`Listening on port http://localhost:${port}`))