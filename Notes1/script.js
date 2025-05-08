let notes = [];

document.getElementById('add-note-btn').addEventListener('click', addNote);

function addNote() {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (title && content) {
        const note = {
            title,
            content
        };

        notes.push(note);

        displayNotes();

        document.getElementById('title').value = '';
        document.getElementById('content').value = '';
    }
}

function displayNotes() {
    const notesList = document.getElementById('notes-list');
    notesList.innerHTML = '';

    if (notes.length === 0) {
        document.getElementById('no-notes-message').style.display = 'block';
    } else {
        document.getElementById('no-notes-message').style.display = 'none';

        notes.forEach((note, index) => {
            const noteElement = document.createElement('li');
            noteElement.classList.add('note');

            const titleElement = document.createElement('h3');
            titleElement.classList.add('note-title');
            titleElement.textContent = note.title;

            const contentElement = document.createElement('p');
            contentElement.classList.add('note-content');
            contentElement.textContent = note.content;

            noteElement.appendChild(titleElement);
            noteElement.appendChild(contentElement);

            notesList.appendChild(noteElement);
        });
    }
}