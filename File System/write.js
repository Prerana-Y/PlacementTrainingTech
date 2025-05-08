// Async (creates or overwrites)
const fs = require('fs');
fs.writeFile('output.txt', 'Hello World!', (err) => {
    if (err) throw err;
    console.log('File written successfully');
  });
  
  // Sync
  fs.writeFileSync('output.txt', 'Hello again!');