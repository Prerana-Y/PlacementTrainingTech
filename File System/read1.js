// Async
const fs = require('fs');

fs.readFile('notes.txt', 'utf8', (err, data) => {
    if (err) throw err;
  });
  
  // Sync
  const data = fs.readFileSync('notes.txt', 'utf8');
  console.log(data);