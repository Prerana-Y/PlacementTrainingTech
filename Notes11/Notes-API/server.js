const express=require('express');
const app=express();
const PORT=process.env.PORT || 3001;
const cors=require('cors');
const fs=require('fs');
const path=require('path');
const { title } = require('process');
require('dotenv').config();

app.use(express.json());

// app.use(cor({
//     origin:'',
//     methods: ['GET','POST','PUT','DELETE'],
//     allowedHeaders:['Content-Type']
// }));

const DATA_FILE=path.join(__dirname,'notes.json');

const readNotes=()=>{
    if(!fs.existsSync(DATA_FILE))
    {
        fs.writeFileSync(DATA_FILE,JSON.stringify([]));
        return [];
    } 
    const data=fs.readFileSync(DATA_FILE,'utf-8');
    return JSON.parse(data);
}

const writeNotes=(notes)=>{
    fs.writeFileSync(DATA_FILE,JSON.stringify(notes,null,2));
}

const generateID=()=>{
    return Date.now().toString();
}

app.get('/notes',(req,res)=>
{
    try{
        const notes =readNotes();
        res.json(notes);
    }
    catch(error)
    {
        console.error('Error fecthing notes:',error);
        res.status(500).json({message:'Internal Server Error'});
    }
});

app.post('/notes',(req,res)=>{
    try{
        const notes = readNotes();
        const newNote={
            id: generateID(),
            title: req.body.title,
            content: req.body.content,
            createdAt: new Date(),
            updatedAt: new Date()
        };

        notes.unshift(newNote);
        writeNotes(notes);

        res.status(201).json(newNote);
    }
    catch(error)
    {
        console.error('Error adding a note:',error);
        res.status(400).json({message:'Bad Request'});
    }
});

app.put('/notes/:id',(req,res)=>{
    try{
        const noteId=req.params.id;
        const notes = readNotes();

        const noteIndex = notes.findIndex(note=>note.id===noteId);
        if(noteIndex===-1)
        {
            return res.status(404).json({message:'Note not found'});
        }
        const updatedNote={
            ...notes[noteIndex],
            title: req.body.title,
            content: req.body.content,
            updatedAt: new Date()
        };

        notes[noteIndex] = updatedNote;
        writeNotes(notes);
        res.json(updatedNote);
    }
    catch(error)
    {
    console.error('Error adding a note:',error);
    res.status(400).json({message:'Bad Request'});
    }
    
});

app.delete('/notes/:id',(req,res)=>{
    try{
        const noteId=req.params.id;
        let notes = readNotes();

        const initialLength=notes.length;
        notes=notes.filter(note=>note.id!==noteId);

        if(notes.length===initialLength)
        {
            return res.status(404).json({message:'Note not fopund'});
        }

        writeNotes(notes);
        res.json({message:'Note deleted successfully'});
        //res.status(204).send();
    }
    catch(error)
    {
    console.error('Error adding a note:',error);
    res.status(400).json({message:'Bad Request'});
    }
})

app.listen(PORT,()=>
{
    console.log(`Note Keeper App is running on port ${PORT}`);
})