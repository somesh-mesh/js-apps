document.addEventListener("DOMContentLoaded", () => {
    const addBtn = document.querySelector("#addBtn");
    const main = document.querySelector("#main");

    // Load saved notes on page load
    loadNotes();

    addBtn.addEventListener("click", () => addNote());

    function saveNotes() {
        const notes = document.querySelectorAll(".note textarea");
        const data = [];

        notes.forEach(note => data.push(note.value));

        localStorage.setItem("notes", JSON.stringify(data));
    }

    function addNote(text = "") {
        const note = document.createElement("div");
        note.classList.add("note");

        note.innerHTML = `
            <div class="tool">
                <i class="save fas fa-save"></i>  
                <i class="trash fas fa-trash"></i>
            </div>     
            <textarea>${text}</textarea>
        `;

        // Delete note event
        note.querySelector(".trash").addEventListener("click", () => {
            note.remove();
            saveNotes();
        });

        // Save note event
        note.querySelector(".save").addEventListener("click", saveNotes);

        // Save notes on textarea input change
        note.querySelector("textarea").addEventListener("input", saveNotes);

        main.appendChild(note);
    }

    function loadNotes() {
        const savedNotes = JSON.parse(localStorage.getItem("notes") || "[]");

        savedNotes.forEach(noteText => addNote(noteText));
    }
});
