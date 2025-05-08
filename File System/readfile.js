// Async
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    // console.log(data);
  });
  
  // Sync
  const data = fs.readFileSync('example.txt', 'utf8');
  console.log(data);