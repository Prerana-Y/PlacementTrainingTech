// Async (creates or overwrites)
const fs = require('fs');
fs.writeFile('notes.txt', 'Initial note content.', (err) => {
    if (err) throw err;
    console.log('File written successfully');
  });
  
  // Sync
  fs.writeFileSync('notes.txt', 'Hello again!');