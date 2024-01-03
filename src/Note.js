// Path: src/Note.js

class Note {
    // Constructor
    constructor(id, text) {
        this.id = id;
        this.text = text;
    }

    // Methods
    // Getters
    get getId() {
        return this.id;
    }

    get getText() {
        return this.text;
    }

    // Setters
    set setId(id) {
        this.id = id;
    }

    set setText(text) {
        this.text = text;
    }
}

export default Note;

// General Specifications
// 12. Spec: The JavaScript code should be modular, using at least three classes: Note, NotesWall, and StickyNotesApp. Each class must be in its own file: Note.js, NotesWall.js, and StickyNotesApp.js.
// 13. Spec: Proper division of responsibilities among the classes, following the single responsibility principle. The Note class should only represent a note. The NotesWall class should function as a data structure without direct DOM interactions. The StickyNotesApp class should handle the application logic, rendering, and event handling.
// 11. Spec: Adherence to best practices in code readability, including consistent indentation, clear naming, and relevant code comments.
// 10. Spec: The deployed app should start with no existing notes. It should run smoothly without any errors and should be efficient. It shouldn't display errors or debugging messages in the console.