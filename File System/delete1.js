const fs = require('fs');
fs.unlink('final-notes.txt', (err) => {
    if (err) throw err;
    console.log('File deleted');
  });
