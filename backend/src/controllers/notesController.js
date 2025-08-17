// Move all responses here and convert them into a asynchronous function
import Note from "../models/Note.js";

// Fetch all notes
export async function getAllNotes(_, res) {
    try {
        const notes = await Note.find().sort({ createdAt: -1 }) // -1 will sort in descending. order (newest first)

        res.status(200).json(notes);
    } catch (error) {
        // Failed to fetch notes
        console.error("Error in getAllNotes controller", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

// Fetch note by Id
export async function getNoteById(req, res) {
    try {
        const note = await Note.findById(req.params.id)

        // check is note exist
        if (!note) return res.status(404).json({ message: "Note not found." });

        res.status(200).json(note);
    } catch (error) {
        // Failed to fetch note
        console.error("Error in getNoteById controller", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

// create the notes
export async function createNote(req, res) {
    try {
        const { title, content } = req.body;
        const newNote = new Note({ title: title, content: content });

        const newSavedNote = await newNote.save();
        res.status(201).json(newSavedNote);
    } catch (error) {
        // Failed to create notes
        console.error("Error in createNote controller", error)
        res.status(500).json({ message: "Internal Server Error" });
    }
}

// update the notes
export async function updateNote(req, res) {
    try {
        const { title, content } = req.body;

        // req.params.id must match the ":id" defined in the route path
        const updatedNote = await Note.findByIdAndUpdate(req.params.id,

            // fields to update (will replace existing values)
            {
                title, content,
            },

            // return the updated document (default is the old one)
            // by default, Mongoose returns the old document (before update)
            // setting new: 'true' makes it return the updated document instead
            {
                new: true
            }
        );

        // check is note exist
        if (!updatedNote) return res.status(404).json({ message: "Note not found." });

        res.status(200).json(updatedNote);
    } catch (error) {
        // Failed to update note
        console.error("Error in updateNote controller", error)
        res.status(500).json({ message: "Internal Server Error" });
    }
}

// delete the notes
export async function deleteNote(req, res) {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id);

        // check is note exist
        if (!deletedNote) return res.status(404).json({ message: "Note not found." });

        res.status(200).json({ message: "Note deleted successfully!" });
    } catch (error) {
        // Failed to delete note
        console.error("Error in deleteNote controller", error)
        res.status(500).json({ message: "Internal Server Error" });
    }
}