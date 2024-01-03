// Path: src/StickyNotesApp.js

// Imports
import NotesWall from "./NotesWall.js";

class StickyNotesApp {
    // Constructor
    constructor() {
        this.notesWall = new NotesWall();
    }

    renderNotes() {
        // Clean NotesWall upon rendering
        // 10. Spec: The deployed app should start with no existing notes. It should run smoothly without any errors and should be efficient. It shouldn't display errors or debugging messages in the console.
        const notesContainer = document.getElementById("notes-wall");
        notesContainer.innerHTML = "";

        // Unpack NotesWall array to render notes
        this.notesWall.getNotes.forEach((note) => {
            // Create note element
            const element = document.createElement("div");
            element.className = "relative w-40 h-40 p-0 m-2 overflow-y-auto transition-transform transform bg-yellow-200 shadow-lg note hover:scale-105";
            
            // Delete button
            // 5. Spec: Users can delete a note by clicking its trash icon, which is visible on hover and located at the top right corner of each note.
            const delBtn = document.createElement("button");
            delBtn.className = "absolute w-5 h-5 leading-5 text-center transition-opacity opacity-0 cursor-pointer delete-btn top-1 right-1 hover:opacity-100";
            delBtn.innerHTML = "🗑";
            delBtn.setAttribute("data-id", note.getId);
            // Delete note
            delBtn.addEventListener("click", () => {
                this.notesWall.deleteNote(note.getId);
                this.renderNotes();
            });
            
            // Display text
            const text = document.createElement("div");
            text.className = "p-4 note-text";
            // Multiline content
            // 2. Spec: Users can add multiline content to a note using "Shift + Enter".
            // 8. Spec: While editing, users can add multiline content with "Shift + Enter".
            text.innerHTML = note.getText.replace(/\n/g, '<br>');
            
            // Edit text area
            const edit = document.createElement("textarea");
            edit.className = "absolute top-0 left-0 hidden w-full h-full p-4 transition-transform transform bg-yellow-300 shadow-xl resize-none outline-rose-700 outline-offset-0 note-edit note hover:scale-105";
            edit.value = note.getText;
            
            // Add elements to note
            element.appendChild(delBtn);
            element.appendChild(text);
            element.appendChild(edit);
            notesContainer.appendChild(element);
        });
    }

    // 6. Spec: Users can edit a note by double-clicking it, revealing a textarea with the note's content. The textarea should be focused for editing.
    handleNoteDoubleClick(event) { 
        // If the event target is a note-text element 
        if (event.target.classList.contains("note-text")) {
            // Get note element
            const element = event.target.closest(".note");

            // Get edit area element
            const editArea = element.querySelector(".note-edit");

            // Reveal edit area
            editArea.style.display = "block";

            // Focus edit area
            editArea.focus();

            // Hide note text
            event.target.style.display = "none";
        }
    }

    // 7. Spec: After editing, users can save changes by pressing "Enter".
    handleTextAreaKeyDown(event, isEditing = false) {
        if (event.key === "Enter" && !event.shiftKey) {
            // Multiline content
            // 2. Spec: Users can add multiline content to a note using "Shift + Enter".
            // 8. Spec: While editing, users can add multiline content with "Shift + Enter".
            event.preventDefault();
    
            // Save edit
            if (isEditing) {
                // Focus out trigger (that function handles the updates)
                event.target.blur();
            } else if (event.target.value.trim() !== "") { 
                // Add note
                this.notesWall.addNote(event.target.value.trim());
    
                // Clear text area
                event.target.value = "";
                
                // Render notes
                this.renderNotes();
            }
        }
    }

    // 9. Spec: Clicking outside the text area while editing should also save changes.
    handleNoteFocusOut(event) {
        // If the event target is a note-edit element
        if (event.target.classList.contains("note-edit")) {
            // Get updated text
            const updatedText = event.target.value.trim();
            
            // Get note id (bottom-up approach)
            const id = event.target.closest(".note-edit").parentElement.querySelector(".note-text").parentElement.querySelector(".delete-btn").getAttribute("data-id");

            // Update note
            this.notesWall.editNote(id, updatedText);

            // Render Notes
            this.renderNotes();
        }
    }

    init() {
        // Event Listener for keydown (adding) a new note
        // 1. Spec: Users can add a new note by typing into the provided textarea and pressing "Enter".
        // 3. Spec: After adding a new note, the textarea for new notes should be cleared, including any new lines. The placeholder "Create a new note..." should be visible when the textarea is empty.
        const newNote = document.getElementById("new-note");
        newNote.addEventListener("keydown", this.handleTextAreaKeyDown.bind(this));
        newNote.placeholder = "Create a new note...";

        // Event Listener for keydown (saving) a note
        document
            .getElementById("notes-wall")
            .addEventListener("keydown", (event) => this.handleTextAreaKeyDown(event, true));
        
        // Event Listener for focus out (saving) a note
        // 7. Spec: After editing, users can save changes by pressing "Enter".
        // 9. Spec: Clicking outside the text area while editing should also save changes.
        document
            .getElementById("notes-wall")
            .addEventListener("focusout", this.handleNoteFocusOut.bind(this));
        
        // Event Listener for double-clicking (editing) a note
        // 6. Spec: Users can edit a note by double-clicking it, revealing a textarea with the note's content. The textarea should be focused for editing.
        document
            .getElementById("notes-wall")
            .addEventListener("dblclick", this.handleNoteDoubleClick.bind(this));

        // Render notes
        this.renderNotes();
    }

}

export default StickyNotesApp;





