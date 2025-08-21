import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// middlewares
app.use(express.json()) // this middleware will parse JSON bodies : req.body
app.use(cors({ // allows every request from every single url from frontend
    origin: "http://localhost:5173",
}))

// ensure to put on the rate limiter below cors middleware
app.use(rateLimiter);

// Use prefix so each route doesn’t have to be written repeatedly
app.use("/api/notes", notesRoutes)

// Best practice: connect to the database first, then start the server
connectDB().then(() => {
    app.listen(5000, () => {
        console.log("Server is Running on Port: ", PORT);
    });
});
