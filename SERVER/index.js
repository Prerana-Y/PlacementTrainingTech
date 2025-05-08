const express= require('express')
const app= express();
const fs=require('fs');
const PORT = process.env.PORT || 5001;

app.use(express.json());

app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
});

const readTasks=()=>
{
    const data=fs.readFileSync('tasks.json','utf8');
    return JSON.parse(data);
};

const writeTasks =(tasks)=>{
    fs.writeFileSync('tasks.json',JSON.stringify(tasks,null,2));
};

app.get('/tasks',(req,res)=>{
    const tasks=readTasks();
    res.json(tasks);
});

app.post('/tasks',(req,res)=>{
    const tasks = readTasks();
    const newTask=
    {
        id:Date.now(),
        title: req.body.title,
        completed:false
    };
    tasks.push(newTask);
    writeTasks(tasks);
    res.status(201).json(newTask);
});

app.put('/tasks/:id',(req,res)=>{
    const tasks=readTasks();
    const taskId=parseInt(req.params.id);
    const index=tasks.findIndex(t=>t.id===taskId);
    if(index==-1) return res.status(404).json({message:"Task not found"});

    tasks[index].title=req.body.title || tasks[index].title;
    tasks[index].completed=req.body.completed ?? tasks[index].completed;

    writeTasks(tasks);
    res.json(tasks[index]);
});

app.delete('/tasks/:id',(req,res)=>
{
    const tasks = readTasks();
    const taskId = parseInt(req.params.id);
    const updatedTasks=tasks.filter(t=> t.id !== taskId);
    writeTasks(updatedTasks);
    res.status(204).send();
});

app.get('/',(req,res)=>{
    res.send('Welcome to our server!');

});