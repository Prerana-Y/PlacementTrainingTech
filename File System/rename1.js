const fs = require('fs');
fs.rename('notes.txt', 'final-notes.txt', (err) => {
    if (err) throw err;
    console.log('File renamed');
  });