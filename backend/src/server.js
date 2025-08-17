import express from "express";
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

// middleware that enables access to req.body, also enable access to { title, content}
app.use(express.json()) // this middleware will parse JSON bodies : req.body

// simple custom middleware
// app.use((req, res, next) => {
//     console.log(`Req method is ${req.method} and Req URL is ${req.url}`)
//     next(); // will execute the method/function
// })

// Use prefix so each route doesn’t have to be written repeatedly
app.use("/api/notes", notesRoutes)

app.listen(5000, () => {
    console.log("Server is Running on Port: ", PORT);
});
