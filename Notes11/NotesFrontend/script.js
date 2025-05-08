const API_URL = "http://localhost:3001/notes";
let editingNoteId = null;

document.addEventListener("DOMContentLoaded", fetchNotes);

function fetchNotes() {
  fetch(API_URL)
    .then(res => res.json())
    .then(notes => {
      document.querySelector(".note-display").innerHTML = "";
      if (notes.length === 0) {
        document.getElementById("empty-message").style.display = "block";
      } else {
        document.getElementById("empty-message").style.display = "none";
        notes.forEach(displayNote);
      }
    })
    .catch(() => {
      document.querySelector(".error").style.display = "block";
    });
}

function handleSave() {
  const title = document.getElementById("title").value.trim();
  const content = document.getElementById("content").value.trim();
  if (!title || !content) {
    alert("Title and content are required.");
    return;
  }

  const noteData = { title, content };

  if (editingNoteId) {
    fetch(`${API_URL}/${editingNoteId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(noteData),
    })
      .then(res => res.json())
      .then(() => {
        resetForm();
        fetchNotes();
      });
  } else {
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(noteData),
    })
      .then(res => res.json())
      .then(note => {
        displayNote(note);
        resetForm();
        document.getElementById("empty-message").style.display = "none";
      });
  }
}

function displayNote(note) {
  const noteDiv = document.createElement("div");
  noteDiv.classList.add("note-item");

  noteDiv.innerHTML = `
    <strong>${note.title}</strong>
    <p>${note.content}</p>
    <div class="note-buttons">
      <button onclick="editNote('${note.id}', '${note.title}', '${note.content}')">✏️</button>
      <button onclick="deleteNote('${note.id}')">🗑️</button>
    </div>
  `;

  document.querySelector(".note-display").appendChild(noteDiv);
}

function editNote(id, title, content) {
  document.getElementById("title").value = title;
  document.getElementById("content").value = content;
  editingNoteId = id;
  document.querySelector("button").textContent = "Update Note";
}

function deleteNote(id) {
  if (confirm("Delete this note?")) {
    fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    })
      .then(() => fetchNotes());
  }
}

function resetForm() {
  document.getElementById("title").value = "";
  document.getElementById("content").value = "";
  editingNoteId = null;
  document.querySelector("button").textContent = "Save Note";
}
