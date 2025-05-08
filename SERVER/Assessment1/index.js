const express = require('express');
const app = express();
const fs = require('fs');
const PORT = process.env.PORT || 5002;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

const readNotes = () => {

    const data = fs.readFileSync('notes.json', 'utf8');
    return JSON.parse(data);
}
const writeNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes, null, 2));
};

app.get('/notes', (req, res) => {
    const notes = readNotes();
    res.json(notes);
});

app.post('/notes', (req, res) => {
    const notes = readNotes();
    const newNote = {
        id: Date.now(),
        title: req.body.title,
        content: req.body.content,
        pinned: false
    };
    notes.push(newNote);
    writeNotes(notes);
    res.status(201).json(newNote);
});

app.put('/notes/:id', (req, res) => {
    const notes = readNotes();
    const noteId = parseInt(req.params.id);
    const index = notes.findIndex(n => n.id === noteId);
    if (index == -1) return res.status(404).json({ message: "Note not found" });

    notes[index].title = req.body.title || notes[index].title;
    notes[index].content = req.body.content || notes[index].content;
    notes[index].pinned = req.body.pinned ?? notes[index].pinned;

    writeNotes(notes);
    res.json(notes[index]);
});

app.delete('/notes/:id', (req, res) => {
    const notes = readNotes();
    const noteId = parseInt(req.params.id);
    const updatedNotes = notes.filter(n => n.id !== noteId);
    writeNotes(updatedNotes);
    res.status(204).send();
});

app.get('/', (req, res) => {
    res.send('Welcome to our server!');
});