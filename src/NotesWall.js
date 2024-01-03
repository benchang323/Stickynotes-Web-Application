// Path: NotesWall.js

// Imports
import Note from "./Note.js";

class NotesWall {

    // Constructor
    constructor() {
        this.notes = [];
        this.idCounter = 0;
    }

    // Methods
    // Getters
    get getNotes() {
        return this.notes;
    }

    // Add Notes
    addNote(text) {
        // Increment idCounter
        this.idCounter++;

        // Create new Note
        const note = new Note(this.idCounter, text);

        // Push new Note to notes array (NotesWall)
        this.notes.push(note);

        return note;
    }

    // Edit Notes
    editNote(id, text) {
        // Find note by id
        const noteId = parseInt(id);
        const note = this.notes.find(note => note.id === noteId);

        // Edit note text if note exists
        if (note) {
            note.setText = text;
            return note;
        } 
        return null;
    }

    // Delete Notes
    deleteNote(id) {
        // Find note by id
        const note = this.notes.find(note => note.id === id);

        // Delete note if note exists
        if (note) {
            // Delete note from notes array (NotesWall)
            this.notes.splice(this.notes.indexOf(note), 1);
            
            return note;
        }
    }
}

export default NotesWall;

// General Specifications
// 12. Spec: The JavaScript code should be modular, using at least three classes: Note, NotesWall, and StickyNotesApp. Each class must be in its own file: Note.js, NotesWall.js, and StickyNotesApp.js.
// 13. Spec: Proper division of responsibilities among the classes, following the single responsibility principle. The Note class should only represent a note. The NotesWall class should function as a data structure without direct DOM interactions. The StickyNotesApp class should handle the application logic, rendering, and event handling.
// 11. Spec: Adherence to best practices in code readability, including consistent indentation, clear naming, and relevant code comments.
// 10. Spec: The deployed app should start with no existing notes. It should run smoothly without any errors and should be efficient. It shouldn't display errors or debugging messages in the console.