// Path: src/main.js
import "../style.css";

// Imports
import StickyNotesApp from "./StickyNotesApp.js";

// Create StickyNotesApp instance (app)
const app = new StickyNotesApp();
window.addEventListener("DOMContentLoaded", () => app.init());

// General Specifications
// 12. Spec: The JavaScript code should be modular, using at least three classes: Note, NotesWall, and StickyNotesApp. Each class must be in its own file: Note.js, NotesWall.js, and StickyNotesApp.js.
// 13. Spec: Proper division of responsibilities among the classes, following the single responsibility principle. The Note class should only represent a note. The NotesWall class should function as a data structure without direct DOM interactions. The StickyNotesApp class should handle the application logic, rendering, and event handling.
// 11. Spec: Adherence to best practices in code readability, including consistent indentation, clear naming, and relevant code comments.
